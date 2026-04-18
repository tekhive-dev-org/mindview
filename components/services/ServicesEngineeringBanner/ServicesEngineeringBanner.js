import Link from "next/link";
import styles from "./ServicesEngineeringBanner.module.css";

const OFFERINGS = [
	{
		title: "Engineering Service",
		description:
			"Mindview provides front-end engineering support, execution planning, technical supervision, and systems review for facilities that demand reliable performance under real operating conditions.",
		bullets: [
			"Plant and utility engineering assessments",
			"Mechanical design review and troubleshooting",
			"Instrumentation and control coordination",
			"Field execution support and technical supervision",
		],
		image:
			"https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=1200&q=80",
		alt: "Engineering technician inspecting industrial equipment",
	},
	{
		title: "Operation & Maintenance",
		description:
			"We support day-to-day plant reliability with preventive maintenance plans, shutdown readiness, corrective actions, and asset care practices that extend service life.",
		bullets: [
			"Preventive maintenance planning",
			"Breakdown response and corrective actions",
			"Reliability reviews for rotating and static assets",
			"Asset lifecycle management support",
		],
		image:
			"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&q=80",
		alt: "Engineer performing operation and maintenance work",
	},
	{
		title: "Electrical Engineering",
		description:
			"From low-voltage distribution to control panels and instrumentation interfaces, our electrical engineering services help teams build safer, more dependable power systems.",
		bullets: [
			"Low-voltage and motor control systems",
			"Panel and switchgear design support",
			"Protection coordination and troubleshooting",
			"Testing, commissioning, and cable system review",
		],
		image:
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
		alt: "Electrical field engineer at work",
	},
];

export default function ServicesEngineeringBanner() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>What we offer</span>
					<h2 className={styles.title}>24/7 Vetted Engineers At Your Service</h2>
					<p className={styles.subtitle}>
						Mindview Engineering Services works across industrial plants,
						commercial facilities, and utility environments to provide skilled
						engineering support exactly where operations need it most.
					</p>
				</div>

				<div className={styles.stack}>
					{OFFERINGS.map((offering, index) => (
						<div
							key={offering.title}
							className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ""}`}
						>
							<div className={styles.media}>
								<img src={offering.image} alt={offering.alt} className={styles.image} />
							</div>
							<div className={styles.content}>
								<h3 className={styles.cardTitle}>{offering.title}</h3>
								<p className={styles.cardText}>{offering.description}</p>
								<ul className={styles.list}>
									{offering.bullets.map((bullet) => (
										<li key={bullet} className={styles.listItem}>
											<span className={styles.listIcon} aria-hidden="true">
												<svg viewBox="0 0 20 20" fill="none">
													<path
														d="M5 10.5l3 3 7-7"
														stroke="currentColor"
														strokeWidth="1.8"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
											<span>{bullet}</span>
										</li>
									))}
								</ul>
								<Link href="/contact" className={styles.linkButton}>
									View More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
