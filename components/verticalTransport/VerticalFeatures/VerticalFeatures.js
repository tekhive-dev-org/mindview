import styles from "./VerticalFeatures.module.css";

const FEATURES = [
	{
		icon: "01",
		title: "Safe engineering and control systems",
		desc: "We help projects combine lift mechanics, controls, and safety logic into systems that are dependable in real daily use.",
	},
	{
		icon: "02",
		title: "Passenger comfort and ride quality",
		desc: "Design and installation decisions are guided by comfort, smooth operation, and practical user experience across all floors.",
	},
	{
		icon: "03",
		title: "Smart accessibility integration",
		desc: "Vertical transport is planned to support accessibility, inclusion, and safe movement for different categories of users.",
	},
	{
		icon: "04",
		title: "Maintenance-ready systems",
		desc: "We prioritize access, maintainability, and reliable component coordination so systems can be supported without unnecessary downtime.",
	},
	{
		icon: "05",
		title: "Traffic flow and public-space planning",
		desc: "For malls, transit spaces, and high-traffic buildings, we align vertical mobility with the way people actually move through the site.",
	},
	{
		icon: "06",
		title: "Retrofit and modernization support",
		desc: "Existing lift and escalator assets can be upgraded for safer performance, better control response, and longer service life.",
	},
];

export default function VerticalFeatures() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<span className={styles.pill}>What you get</span>

				<h2 className={styles.title}>
					We Improve Vertical Movement
					<br />
					For Everyday Comfort
				</h2>
				<p className={styles.desc}>
					Mindview Automation vertical transport solutions are designed to make movement
					through buildings safer, smoother, and easier to support over time,
					whether the priority is passenger convenience, accessibility, or
					high-traffic performance.
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