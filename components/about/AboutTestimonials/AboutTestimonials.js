import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./AboutTestimonials.module.css";

const TESTIMONIALS = [
	{
		text: "Mindview helped us consolidate surveillance and access control into one practical setup. The installation was clean, the team was responsive, and the final system fits how our site actually operates.",
		author: "Operations Manager",
		role: "Commercial security project",
		avatar: "/assets/test/1.jpg",
	},
	{
		text: "The automation upgrade made daily control much easier for our team. Mindview focused on what we needed, not on adding unnecessary features that would complicate operations.",
		author: "Facility Supervisor",
		role: "Automation systems project",
		avatar: "/assets/test/2.avif",
	},
	{
		text: "Their engineering support was practical from the start. We got clear technical guidance, solid execution on site, and better coordination across the work than we had with previous contractors.",
		author: "Project Coordinator",
		role: "Engineering support engagement",
		avatar: "/assets/test/3.webp",
	},
	{
		text: "Our solar and backup setup is far more dependable now. Mindview assessed the real load properly and delivered a solution that supports critical use without constant power anxiety.",
		author: "Property Owner",
		role: "Energy solutions project",
		avatar: "/assets/test/4.jpg",
	},
	{
		text: "Mindview approached the lift work with attention to safety, finish quality, and long-term performance. The result feels reliable in daily use and the handover process was handled professionally.",
		author: "Site Administrator",
		role: "Vertical transport project",
		avatar: "/assets/test/5.jpg",
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
								{TESTIMONIALS.slice(0, 4).map((testimonial, i) => (
									<img
										key={testimonial.author}
										src={testimonial.avatar}
										alt=""
										className={styles.avatar}
										style={{ zIndex: 4 - i }}
									/>
								))}
							</div>
							<div className={styles.ratingInfo}>
								<div className={styles.stars}>
									{[0, 1, 2, 3].map((i) => (
										<svg key={i} className={styles.star} fill="#f59e0b" viewBox="0 0 20 20">
											<path d={STAR_PATH} />
										</svg>
									))}
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
								<p className={styles.happyCount}><strong>Client feedback</strong> across core Mindview service lines</p>
								<p className={styles.ratingsCount}><strong>Security, automation, engineering, energy, and lifts</strong></p>
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
											<img src={t.avatar} alt="" className={styles.authorAvatar} />
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

