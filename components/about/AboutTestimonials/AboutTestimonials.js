import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AboutTestimonials.module.css";

const TESTIMONIALS = [
	{
		text: "We needed one delivery partner that could understand the site, recommend the right solution, and execute without drama. Mindview brought structure, clarity, and follow-through from start to handover.",
		author: "Chidi British",
		role: "Site operations lead",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
	},
	{
		text: "Mindview has completely transformed how we manage our facility systems. The handover was smooth, the team was responsive, and the final solution feels practical rather than over-engineered.",
		author: "Sara Mitchell",
		role: "Facilities manager",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
	},
	{
		text: "Their team handled planning, installation, and training with real attention to detail. We now have a coordinated setup instead of separate systems that used to create confusion.",
		author: "James Okafor",
		role: "Operations director",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
	},
	{
		text: "The final result is intuitive enough for the whole team to use. Mindview focused on what would actually work in our environment instead of pushing a one-size-fits-all setup.",
		author: "Amara Diallo",
		role: "Homeowner",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
	},
	{
		text: "We partnered with Mindview for a mixed office and facility rollout. Their team understood the operational constraints and delivered exactly what was required without unnecessary complexity.",
		author: "Tunde Fashola",
		role: "Project consultant",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
	},
];

const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

export default function AboutTestimonials() {
	const [active, setActive] = useState(0);
	const total = TESTIMONIALS.length;
	const paused = useRef(false);
	const touchStartX = useRef(null);

	const next = useCallback(() => setActive((a) => (a + 1) % total), [total]);
	const prev = useCallback(() => setActive((a) => (a - 1 + total) % total), [total]);

	// Auto-slide every 4 s
	useEffect(() => {
		const id = setInterval(() => {
			if (!paused.current) next();
		}, 4000);
		return () => clearInterval(id);
	}, [next]);

	// Touch swipe handlers
	const handleTouchStart = (e) => {
		touchStartX.current = e.touches[0].clientX;
		paused.current = true;
	};
	const handleTouchEnd = (e) => {
		if (touchStartX.current === null) return;
		const delta = touchStartX.current - e.changedTouches[0].clientX;
		if (Math.abs(delta) > 40) delta > 0 ? next() : prev();
		touchStartX.current = null;
		paused.current = false;
	};

	// returns stack position: 0=front, 1=middle, 2=back, >=3 hidden
	const getPos = (i) => (i - active + total) % total;

	return (
		<section id="testimonials" className={styles.testimonials}>
			<div className={styles.inner}>
				<div className={styles.layout}>
					{/* ── Left ── */}
					<div className={styles.left}>
						<h2 className={styles.title}>
							What Our Clients Say About Us.
						</h2>
						<p className={styles.subtitle}>
							We deliver practical technology systems that are thoughtfully
							designed, carefully installed, and dependable after handover. Here
							is what clients say after working with the Mindview team.
						</p>

						<div className={styles.ratingBlock}>
							<div className={styles.avatarRow}>
								{[
									"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
									"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
									"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
									"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
								].map((src, i) => (
									<img key={i} src={src} alt="" className={styles.avatar} />
								))}
							</div>

							<div className={styles.ratingInfo}>
								<div className={styles.stars}>
									{[0, 1, 2, 3].map((i) => (
										<svg key={i} className={styles.star} fill="#f59e0b" viewBox="0 0 20 20">
											<path d={STAR_PATH} />
										</svg>
									))}
									{/* half star */}
									<svg className={styles.star} viewBox="0 0 20 20">
										<defs>
											<linearGradient id="half">
												<stop offset="50%" stopColor="#f59e0b" />
												<stop offset="50%" stopColor="#d1d5db" />
											</linearGradient>
										</defs>
										<path d={STAR_PATH} fill="url(#half)" />
									</svg>
								</div>
								<p className={styles.happyCount}><strong>1,500+</strong> Customer review</p>
								<p className={styles.ratingsCount}><strong>365</strong> Five star rate</p>
							</div>
						</div>
					</div>

					{/* ── Right: stacked cards ── */}
					<div className={styles.right}>
						<div
							className={styles.cardStack}
							onMouseEnter={() => { paused.current = true; }}
							onMouseLeave={() => { paused.current = false; }}
							onTouchStart={handleTouchStart}
							onTouchEnd={handleTouchEnd}
						>
							{TESTIMONIALS.map((t, i) => {
								const pos = getPos(i);
								if (pos >= 3) return null;
								return (
									<div
										key={i}
										className={`${styles.card} ${styles[`pos${pos}`]}`}
									>
										{pos === 0 && (
											<>
												<div className={styles.quoteIcon}>&ldquo;&ldquo;</div>
												<p className={styles.cardText}>{t.text}</p>
											</>
										)}
										<div className={styles.cardFooter}>
											<img src={t.avatar} alt={t.author} className={styles.authorAvatar} />
											<div>
												<p className={styles.authorName}>{t.author}</p>
												<p className={styles.authorRole}>{t.role}</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				{/* ── Dots ── */}
				<div className={styles.dots}>
					{TESTIMONIALS.map((_, i) => (
						<button
							key={i}
							className={`${styles.dot} ${i === active ? styles.dotActive : ""}`}
							onClick={() => setActive(i)}
							aria-label={`Go to testimonial ${i + 1}`}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

