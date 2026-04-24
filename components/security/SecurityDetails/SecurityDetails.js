import Image from "next/image";
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
			"/assets/images/security3.avif",
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
			"/assets/images/security.jpg",
		alt: "Mounted surveillance camera for perimeter monitoring",
	},
	{
		title: "Turnstiles & Perimeter Control",
		description:
			"Manage and regulate pedestrian access at secured entry points with flip glass, full height, and tripod turnstile systems built for reliable enforcement at commercial, hospitality, and institutional environments.",
		bullets: [
			"Flip glass and full height turnstile supply and installation",
			"Integration with access control and credential readers",
			"Boom barrier systems for vehicle lane management",
			"Walkthrough metal detectors for checkpoint screening",
		],
		image:
			"/assets/images/turnstile.jpg",
		alt: "Turnstile system at a secured building entry point",
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
						Mindview Automation builds security solutions for sites that need dependable
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
								<Image
									src={offering.image}
									alt={offering.alt}
									className={styles.image}
									width={1200}
									height={900}
									sizes="(min-width: 1024px) 50vw, 100vw"
								/>
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