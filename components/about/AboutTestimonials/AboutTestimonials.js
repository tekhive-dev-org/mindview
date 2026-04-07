import { useState } from "react";
import styles from "./AboutTestimonials.module.css";

const TESTIMONIALS = [
	{
		text: "We envision a world where geographical boundaries are mere lines on a map, where teams seamlessly come together to innovate, create, and conquer. Our vision is to be the driving force behind this transformation – to empower teams of all sizes",
		author: "Chidi British",
		role: "Senior product designer",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
	},
	{
		text: "Mindview has completely transformed how our team approaches product development. The mentorship and collaborative tools have bridged the gap between remote teams across three continents.",
		author: "Sara Mitchell",
		role: "Product Manager",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
	},
	{
		text: "The platform gave our startup the structure and skills we needed to scale. From onboarding to leadership, Mindview’s resources are second to none in the industry.",
		author: "James Okafor",
		role: "Tech Lead",
		avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
	},
	{
		text: "I joined Mindview with zero tech background. Within six months I had certified skills, a portfolio, and a job offer. The learning experience is world-class and genuinely life-changing.",
		author: "Amara Diallo",
		role: "Frontend Developer",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
	},
	{
		text: "Our organization partnered with Mindview for a workforce upskilling programme. The results exceeded every KPI we set — engagement, completion rate, and skill transfer have all been outstanding.",
		author: "Tunde Fashola",
		role: "HR Director",
		avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
	},
];

const STAR_PATH = "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

export default function AboutTestimonials() {
	const [active, setActive] = useState(0);
	const total = TESTIMONIALS.length;

	// returns stack position: 0=front, 1=middle, 2=back, >=3 hidden
	const getPos = (i) => (i - active + total) % total;

	return (
		<section className={styles.testimonials}>
			<div className={styles.inner}>
				<div className={styles.layout}>
					{/* ── Left ── */}
					<div className={styles.left}>
						<h2 className={styles.title}>
							What Our Clients Say About Us.
						</h2>
						<p className={styles.subtitle}>
							We envision a world where geographical boundaries are mere lines
							on a map, where teams seamlessly come together to innovate,
							create, and conquer. Our vision is to be the driving force
							behind this transformation – to empower teams of all sizes
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
								<p className={styles.happyCount}><strong>1,500+</strong> Happy Students</p>
								<p className={styles.ratingsCount}><strong>365</strong> (Ratings)</p>
							</div>
						</div>
					</div>

					{/* ── Right: stacked cards ── */}
					<div className={styles.right}>
						<div className={styles.cardStack}>
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

