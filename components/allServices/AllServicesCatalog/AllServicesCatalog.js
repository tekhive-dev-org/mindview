import Image from "next/image";
import Link from "next/link";
import styles from "./AllServicesCatalog.module.css";

const SECURITY_AND_AUTOMATION = [
	{
		title: "Smart Security",
		highlight: "Expansion and Innovation",
		description:
			"Protect homes, offices, and controlled facilities with connected surveillance, screening, access, and monitoring systems built for live environments.",
		bullets: [
			"Integrated CCTV and access control coverage",
			"Checkpoint screening and perimeter protection",
			"Remote alerts, monitoring, and incident visibility",
		],
		href: "/security",
		cta: "View More",
		image: "/assets/images/security.jpg",
		accentImage: "/assets/images/security2.webp",
		reverse: false,
	},
	{
		title: "Automation",
		highlight: "Expansion & Innovation",
		description:
			"Automate daily comfort, access, workflows, and connected controls across homes and facilities with systems that are simple to manage.",
		bullets: [
			"Smart home and industrial automation",
			"Gate, door, and utility control integration",
			"Remote management and mobile visibility",
		],
		href: "/automation",
		cta: "View More",
		image: "/assets/images/automation.webp",
		accentImage: "/assets/images/automation1.webp",
		reverse: true,
	},
];

const ENERGY_AND_VERTICAL = [
	{
		title: "Home Elevators",
		highlight: "Expansion and Innovation",
		description:
			"Support safe and comfortable vertical movement with passenger lifts, access systems, and modernization options for multi-level buildings.",
		bullets: [
			"Passenger elevators for residential and commercial use",
			"Accessibility-focused transport planning",
			"Lift modernization and control coordination",
		],
		href: "/vertical-transport",
		cta: "View More",
		image: "/assets/images/elevator2.webp",
		accentImage: "/assets/images/elevator1.webp",
		reverse: false,
	},
	{
		title: "Solar Power Systems",
		highlight: "Expansion and Innovation",
		description:
			"Build practical solar and hybrid energy systems that improve daily reliability, reduce grid dependence, and support critical loads during outages.",
		bullets: [
			"Solar generation and inverter backup integration",
			"Battery storage planning for critical circuits",
			"Commercial and residential energy resilience",
		],
		href: "/energy",
		cta: "View More",
		image: "/assets/images/solar.webp",
		accentImage: "/assets/images/solar1.jpeg",
		reverse: true,
	},
];

const ENGINEERING = {
	title: "Engineering - Beyond Critical Thinking",
	description:
		"Mindview engineering services support electrical, mechanical, instrumentation, and site execution work for facilities that need dependable technical delivery. From utility systems and field coordination to maintenance planning and troubleshooting, we help projects move from drawings to working operations.",
	bullets: [
		"Mechanical and electrical engineering support",
		"Plant troubleshooting and field execution",
		"Maintenance planning and utility coordination",
	],
	href: "/engineering",
	cta: "View More",
	image: "/assets/images/engineering.webp",
};

function ServiceRow({ item }) {
	return (
		<div className={`${styles.serviceRow} ${item.reverse ? styles.serviceRowReverse : ""}`}>
			<div className={styles.mediaWrap}>
				<div className={styles.imageCard}>
					<Image
						src={item.image}
						alt={item.title}
						className={styles.image}
						width={1200}
						height={900}
						sizes="(min-width: 1024px) 50vw, 100vw"
					/>
				</div>
				<div className={`${styles.accentBubble} ${item.reverse ? styles.accentBubbleLeft : styles.accentBubbleRight}`}>
					<Image
						src={item.accentImage}
						alt=""
						className={styles.accentImage}
						width={220}
						height={220}
						sizes="110px"
					/>
				</div>
			</div>

			<div className={styles.content}>
				<h3 className={styles.cardTitle}>
					{item.title} <span>{item.highlight}</span>
				</h3>
				<p className={styles.cardDesc}>{item.description}</p>
				<ul className={styles.list}>
					{item.bullets.map((bullet) => (
						<li key={bullet} className={styles.listItem}>
							<span className={styles.listIcon} aria-hidden="true">
								<svg viewBox="0 0 20 20" fill="none">
									<path
										d="M10 3.5a6.5 6.5 0 106.5 6.5"
										stroke="currentColor"
										strokeWidth="1.4"
										strokeLinecap="round"
									/>
									<path
										d="M7.2 10.1l1.7 1.7 3.9-4.1"
										stroke="currentColor"
										strokeWidth="1.6"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
							<span>{bullet}</span>
						</li>
					))}
				</ul>
				<Link href={item.href} className={styles.linkButton}>
					{item.cta}
				</Link>
			</div>
		</div>
	);
}

export default function AllServicesCatalog() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.sectionBand}>
					<span className={styles.sectionBandAccent} />
					<h2 className={styles.sectionBandTitle}>Security &amp; Automation</h2>
				</div>

				<div className={styles.stack}>
					{SECURITY_AND_AUTOMATION.map((item) => (
						<ServiceRow key={item.title} item={item} />
					))}
				</div>

				<div className={styles.sectionBand}>
					<span className={styles.sectionBandAccent} />
					<h2 className={styles.sectionBandTitle}>Energy Solutions &amp; Vertical Transport Access</h2>
				</div>

				<div className={styles.stack}>
					{ENERGY_AND_VERTICAL.map((item) => (
						<ServiceRow key={item.title} item={item} />
					))}
				</div>

				<div id="consultancy-integration" className={styles.engineeringPanel}>
					<div className={styles.engineeringImageWrap}>
						<Image
							src={ENGINEERING.image}
							alt={ENGINEERING.title}
							className={styles.engineeringImage}
							width={1200}
							height={900}
							sizes="(min-width: 1024px) 45vw, 100vw"
						/>
					</div>
					<div className={styles.engineeringContent}>
						<h3 className={styles.engineeringTitle}>{ENGINEERING.title}</h3>
						<p className={styles.engineeringDesc}>{ENGINEERING.description}</p>
						<ul className={styles.list}>
							{ENGINEERING.bullets.map((bullet) => (
								<li key={bullet} className={`${styles.listItem} ${styles.listItemLight}`}>
									<span className={`${styles.listIcon} ${styles.listIconLight}`} aria-hidden="true">
										<svg viewBox="0 0 20 20" fill="none">
											<path
												d="M10 3.5a6.5 6.5 0 106.5 6.5"
												stroke="currentColor"
												strokeWidth="1.4"
												strokeLinecap="round"
											/>
											<path
												d="M7.2 10.1l1.7 1.7 3.9-4.1"
												stroke="currentColor"
												strokeWidth="1.6"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
									</span>
									<span>{bullet}</span>
								</li>
							))}
						</ul>
						<Link href={ENGINEERING.href} className={styles.linkButtonAlt}>
							{ENGINEERING.cta}
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}