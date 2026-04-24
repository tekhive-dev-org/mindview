import styles from "./WhyChooseUs.module.css";

const STEPS = [
	{
		num: "1",
		title: "Assessment",
		desc: "We start by understanding the site, the operating constraints, and the exact system requirement before recommending a solution.",
	},
	{
		num: "2",
		title: "Execution",
		desc: "Our team handles planning, installation, integration, and commissioning with attention to safety, coordination, and delivery quality.",
	},
	{
		num: "3",
		title: "Support",
		desc: "After handover, we stay involved through testing, maintenance guidance, and ongoing support so the system performs as expected.",
	},
];

const HIGHLIGHTS = [
	{
		tag: "Delivery",
		value: "End-to-End",
		label: "From technical review and design through installation and handover",
	},
	{
		tag: "Coordination",
		value: "Integrated",
		label: "Security, automation, engineering, energy, and access considered together",
	},
	{
		tag: "Support",
		value: "Aftercare",
		label: "Support that continues beyond commissioning into real daily use",
	},
];

export default function WhyChooseUs() {
	return (
		<section className={styles.whyChoose}>
			<h2 className={styles.whyChooseTitle}>
				Why Teams Choose Mindview Automation
			</h2>
			<p className={styles.whyChooseSubtitle}>
				We focus on technical fit, disciplined delivery, and dependable support
				instead of generic packages that ignore how a site actually operates.
			</p>

			<div className={styles.stepsRow}>
				{STEPS.map((step, i) => (
					<div key={step.num} className={styles.stepItem}>
						<div className={styles.stepCircle}>
							<span className={styles.stepNumber}>{step.num}</span>
						</div>
						{i < STEPS.length - 1 && (
							<div className={styles.stepConnector} />
						)}
						<h3 className={styles.stepTitle}>{step.title}</h3>
						<p className={styles.stepDesc}>{step.desc}</p>
					</div>
				))}
			</div>

			<div className={styles.statsRow}>
				{HIGHLIGHTS.map((highlight) => (
					<div key={highlight.value} className={styles.statItem}>
						<span className={styles.statTag}>{highlight.tag}</span>
						<h3 className={styles.statValue}>{highlight.value}</h3>
						<p className={styles.statLabel}>{highlight.label}</p>
					</div>
				))}
			</div>
		</section>
	);
}
