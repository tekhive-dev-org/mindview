import Image from "next/image";
import Link from "next/link";
import styles from "./EnergySolutionsBanner.module.css";

const OFFERINGS = [
	{
		title: "Solar Power Systems For Every Home",
		description:
			"We design rooftop solar systems that match real household loads, reduce dependence on unstable supply, and provide cleaner daily power for lighting, appliances, and essential home operations.",
		bullets: [
			"Residential solar sizing and load assessment",
			"Panel, inverter, and balance-of-system installation",
			"Smart monitoring for daily performance",
			"Backup-ready system design for outages",
		],
		image:
			"/assets/images/solar.webp",
		alt: "Technician cleaning rooftop solar panels",
	},
	{
		title: "Battery Backup And Inverter Integration",
		description:
			"Mindview integrates energy storage and inverter systems that keep homes, offices, and critical circuits powered during outages without the noise and fuel dependency of constant generator use.",
		bullets: [
			"Hybrid inverter configuration",
			"Battery bank sizing and installation",
			"Critical load separation and protection",
			"Backup optimization for homes and offices",
		],
		image:
			"/assets/images/inverter.avif",
		alt: "Battery backup and inverter installation",
	},
	{
		title: "Commercial And Facility Energy Systems",
		description:
			"For commercial sites and multi-building operations, we deploy scalable energy infrastructure that supports daytime generation, controlled storage, and dependable backup for business continuity.",
		bullets: [
			"Commercial rooftop and ground-mount systems",
			"Energy resilience planning for facilities",
			"Hybrid systems for offices and utility spaces",
			"Maintenance support and performance checks",
		],
		image:
			"/assets/images/commercial.png",
		alt: "Commercial solar energy installation",
	},
];

export default function EnergySolutionsBanner() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>What we offer</span>
					<h2 className={styles.title}>24/7 Vetted Energy Experts At Your Service</h2>
					<p className={styles.subtitle}>
						We help households, offices, and commercial facilities move toward
						more reliable energy with practical solar generation, battery
						storage, and hybrid power systems designed around actual demand.
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