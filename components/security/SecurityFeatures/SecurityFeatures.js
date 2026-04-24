import styles from "./SecurityFeatures.module.css";

const FEATURES = [
	{
		icon: "01",
		title: "Access and control systems",
		desc: "Manage who enters key spaces with coordinated access hardware, permissions, and entry-point monitoring.",
	},
	{
		icon: "02",
		title: "Video controlled home integration",
		desc: "Connect cameras, intercoms, notifications, and smart locks into one practical home security workflow.",
	},
	{
		icon: "03",
		title: "Smart security integration",
		desc: "Unify alarms, surveillance, access control, and monitoring tools so teams work from one security picture.",
	},
	{
		icon: "04",
		title: "Remote control via mobile apps",
		desc: "Review camera activity, receive alerts, and control approved endpoints remotely through mobile interfaces.",
	},
	{
		icon: "05",
		title: "Energy usage monitoring systems",
		desc: "Support efficient operations with connected systems that help track utility behaviour around secured environments.",
	},
	{
		icon: "06",
		title: "Smart integration and utility automation",
		desc: "Coordinate security devices with facility controls and operational automation for broader site awareness.",
	},
];

export default function SecurityFeatures() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<span className={styles.pill}>What you get</span>

				<h2 className={styles.title}>
					Runtime Security Ensurance
					<br />
					Is Our Utmost Priority
				</h2>
				<p className={styles.desc}>
					Mindview Automation security solutions are designed to improve visibility,
					strengthen access control, reduce blind spots, and help teams operate
					with more confidence across homes, offices, and critical sites.
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