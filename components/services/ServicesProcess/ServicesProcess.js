import Link from "next/link";
import styles from "./ServicesProcess.module.css";

const STEPS = [
	{
		number: "01",
		title: "Contact Us",
		description:
			"Tell us the engineering issue, facility condition, or maintenance concern you need resolved.",
	},
	{
		number: "02",
		title: "Inspection & Diagnosis",
		description:
			"We assess the equipment, systems, drawings, and operating context to isolate the root problem.",
	},
	{
		number: "03",
		title: "Scope & Recommendation",
		description:
			"Our team defines the repair path, engineering response, materials, and execution plan.",
	},
	{
		number: "04",
		title: "Execution & Coordination",
		description:
			"We mobilize the right engineers and supervise the work to keep safety, quality, and timing on track.",
	},
	{
		number: "05",
		title: "Testing & Handover",
		description:
			"Systems are verified, documented, and handed back with clear operating and maintenance guidance.",
	},
];

export default function ServicesProcess() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.layout}>
					<div className={styles.stepsCol}>
						{STEPS.map((step) => (
							<div key={step.number} className={styles.stepCard}>
								<span className={styles.stepNumber}>{step.number}</span>
								<h3 className={styles.stepTitle}>{step.title}</h3>
								<p className={styles.stepDesc}>{step.description}</p>
							</div>
						))}
					</div>

					<div className={styles.summaryCol}>
						<div className={styles.summaryBadge}>Our Process</div>
						<h2 className={styles.summaryTitle}>
							Fixing Your Engineering Issues
							<br />
							In Just 5 Steps
						</h2>
						<p className={styles.summaryDesc}>
							Our response process is built for fast diagnosis, controlled
							execution, and clear technical communication from first contact to
							final handover.
						</p>
						<Link href="/contact" className={styles.summaryButton}>
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}