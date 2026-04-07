import styles from "./WhyChooseUs.module.css";

const STEPS = [
	{
		num: "1",
		title: "Trust",
		desc: "Select from our mentorship programs, cohort-based learning, or advisory services tailored to your career or business needs.",
	},
	{
		num: "2",
		title: "Equity",
		desc: "Get matched with experienced mentors, trainers, or industry professionals who guide you with practical insights and proven strategies.",
	},
	{
		num: "3",
		title: "Diversity",
		desc: "Engage in hands-on training, gain real-world insights, and track your programs with tools, feedback, and certifications that validate your journey.",
	},
];

export default function WhyChooseUs() {
	return (
		<section className={styles.whyChoose}>
			<h2 className={styles.whyChooseTitle}>
				Why Choose Us: built around you
			</h2>
			<p className={styles.whyChooseSubtitle}>&nbsp;</p>

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
				<div className={styles.statItem}>
					<p className={styles.statValue}>500+</p>
					<p className={styles.statLabel}>Delivered projects</p>
				</div>
				<div className={styles.statItem}>
					<p className={styles.statValue}>50+</p>
					<p className={styles.statLabel}>Trusted partners</p>
				</div>
				<div className={styles.statItem}>
					<p className={styles.statValue}>4.7/5</p>
					<p className={styles.statLabel}>Average rating</p>
				</div>
			</div>
		</section>
	);
}
