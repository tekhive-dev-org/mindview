import Link from "next/link";
import styles from "./SecurityDetails.module.css";

const OFFERINGS = [
	{
		title: "Luggage Scanners",
		description:
			"Control entry points with screening systems that help teams inspect bags, parcels, and carried items quickly without disrupting traffic flow across secured facilities.",
		bullets: [
			"X-ray baggage screening installation",
			"Security screening for airports, malls, and offices",
			"Maintenance and calibration services",
			"Integrated monitoring systems for checkpoints",
		],
		image:
			"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
		alt: "Luggage scanner system in a screening area",
	},
	{
		title: "CCTV & Surveillance",
		description:
			"Monitor indoor and outdoor spaces with surveillance systems built for continuous visibility, incident review, and better on-site security coordination.",
		bullets: [
			"Surveillance systems for homes",
			"Smart security systems for offices",
			"Fixed and PTZ systems for campuses",
			"Night visibility cameras for schools and sites",
		],
		image:
			"https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=1200&q=80",
		alt: "Mounted surveillance camera for perimeter monitoring",
	},
];

export default function SecurityDetails() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>What we offer</span>
					<h2 className={styles.title}>Providing Runtime Security Always</h2>
					<p className={styles.subtitle}>
						Mindview builds security solutions for sites that need dependable
						visibility, controlled access, and equipment that performs under
						real daily operating conditions.
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