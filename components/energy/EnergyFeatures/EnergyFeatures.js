import styles from "./EnergyFeatures.module.css";

const FEATURES = [
	{
		icon: "01",
		title: "Energy auditing and system sizing",
		desc: "We assess your demand profile, critical loads, and usage patterns so the recommended energy system fits how the site actually operates.",
	},
	{
		icon: "02",
		title: "Solar and storage integration",
		desc: "Mindview Automation combines panels, inverters, batteries, and protection devices into systems that are practical to run and maintain.",
	},
	{
		icon: "03",
		title: "Power continuity for critical loads",
		desc: "Keep essential circuits, home systems, and business operations available during outages with properly planned backup architecture.",
	},
	{
		icon: "04",
		title: "Smart monitoring and visibility",
		desc: "Track generation, battery performance, and energy usage with clear visibility into what the system is producing and consuming.",
	},
	{
		icon: "05",
		title: "Reliable installation standards",
		desc: "Our installations focus on safe routing, clean integration, correct protection, and dependable long-term field performance.",
	},
	{
		icon: "06",
		title: "Maintenance and lifecycle support",
		desc: "We support post-installation upkeep with inspections, cleaning, diagnostics, and recommendations that protect energy output over time.",
	},
];

export default function EnergyFeatures() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<span className={styles.pill}>What you get</span>

				<h2 className={styles.title}>
					We Power Reliable
					<br />
					Energy Systems For You
				</h2>
				<p className={styles.desc}>
					Mindview Automation energy solutions are structured to improve power reliability,
					reduce avoidable downtime, and give homes and facilities a clearer path
					to stable long-term energy performance.
				</p>

				<div className={styles.grid}>
					{FEATURES.map((feature) => (
						<div key={feature.title} className={styles.card}>
							<div className={styles.cardIcon}>{feature.icon}</div>
							<h3 className={styles.cardTitle}>{feature.title}</h3>
							<p className={styles.cardDesc}>{feature.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}