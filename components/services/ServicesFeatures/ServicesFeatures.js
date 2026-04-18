import styles from "./ServicesFeatures.module.css";

const FEATURES = [
	{
		icon: "01",
		title: "Plant engineering & technical review",
		desc: "Support project teams with engineering checks, system reviews, technical clarifications, and practical site-focused recommendations.",
	},
	{
		icon: "02",
		title: "Vetted on-site service engineers",
		desc: "Deploy experienced field engineers who understand industrial safety, execution pressure, and plant operating realities.",
	},
	{
		icon: "03",
		title: "Smart facility diagnostics",
		desc: "Investigate recurring failures, performance loss, and maintenance bottlenecks using structured engineering diagnostics.",
	},
	{
		icon: "04",
		title: "Shutdown and maintenance support",
		desc: "Plan and execute shutdown scopes, maintenance workpacks, punch-list closeout, and readiness activities with discipline.",
	},
	{
		icon: "05",
		title: "Energy and utility reliability systems",
		desc: "Improve power quality, utility coordination, and equipment reliability through well-managed engineering interventions.",
	},
	{
		icon: "06",
		title: "Instrumentation and controls integration",
		desc: "Coordinate devices, loops, panels, and signals so operations teams can rely on stable measurement and control performance.",
	},
];

export default function ServicesFeatures() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<span className={styles.pill}>What you get</span>

				<h2 className={styles.title}>
					We Ensure Progressive
					<br />
					Engineering Services
				</h2>
				<p className={styles.desc}>
					Mindview engineering support is structured to keep assets stable,
					improve reliability, and help facilities respond faster to operating
					issues without sacrificing safety or execution quality.
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