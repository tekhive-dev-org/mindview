import Image from "next/image";
import Link from "next/link";
import styles from "./AutomationBooking.module.css";

const OFFERINGS = [
	{
		title: "Home Automation",
		description:
			"Design smart home environments with lighting, climate control, voice scenes, and mobile access built into one practical system.",
		bullets: [
			"Smart lighting and climate control",
			"Voice-controlled home integration",
			"Remote mobile access and monitoring",
			"Energy usage visibility across devices",
		],
		image:
			"/assets/images/automation.webp",
		alt: "Smart lock controlled from a mobile phone",
	},
	{
		title: "Industrial Automation",
		description:
			"Deploy facility automation for gates, machinery, access points, and process monitoring with dependable controls and safety-first planning.",
		bullets: [
			"Industrial process control solutions",
			"Automation for production workflows",
			"Advanced access and safety systems",
			"Control panels and Industry 4.0 integration",
		],
		image:
			"/assets/images/engineering.webp",
		alt: "Automation specialists collaborating on-site",
	},
];

export default function AutomationBooking() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>What we offer</span>
					<h2 className={styles.title}>Stressfree Aids Designed For You</h2>
					<p className={styles.subtitle}>
						Mindview Automation delivers reliable automation systems for homes and
						businesses, combining modern hardware, practical control design, and
						clean user experiences.
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
