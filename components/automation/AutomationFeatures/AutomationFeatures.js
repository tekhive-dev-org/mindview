import styles from "./AutomationFeatures.module.css";

const FEATURES = [
	{
		icon: "01",
		title: "Smart lighting & control system",
		desc: "Build lighting scenes, routines, and timed controls that make daily living easier and more energy-aware.",
	},
	{
		icon: "02",
		title: "Voice controlled home integration",
		desc: "Connect assistants and automation hubs so users can manage their space naturally through simple voice commands.",
	},
	{
		icon: "03",
		title: "Smart Security Integration",
		desc: "Coordinate access control, surveillance, alarms, and alerts in one dependable security workflow.",
	},
	{
		icon: "04",
		title: "Remote control via mobile apps",
		desc: "Manage devices, monitor system health, and respond quickly with mobile-first remote access capabilities.",
	},
	{
		icon: "05",
		title: "Energy usage monitoring systems",
		desc: "Track utility performance and consumption patterns to improve efficiency without sacrificing comfort.",
	},
	{
		icon: "06",
		title: "Smart integration and utility automation",
		desc: "Unify hardware, controls, and software logic into one cohesive automation backbone across properties.",
	},
];

export default function AutomationFeatures() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<span className={styles.pill}>What you get</span>

				<h2 className={styles.title}>
					We Automate Processes For
					<br />
					Your Comfortability
				</h2>
				<p className={styles.desc}>
					Mindview combines practical engineering, installation quality, and
					user-friendly control design to make automation dependable in real
					living and working environments.
				</p>

				<div className={styles.grid}>
					{FEATURES.map((f) => (
						<div key={f.title} className={styles.card}>
							<div className={styles.cardIcon}>{f.icon}</div>
							<h3 className={styles.cardTitle}>{f.title}</h3>
							<p className={styles.cardDesc}>{f.desc}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
