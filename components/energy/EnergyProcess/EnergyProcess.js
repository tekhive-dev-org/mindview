import Link from "next/link";
import styles from "./EnergyProcess.module.css";

const STEPS = [
	{
		number: "01",
		title: "Contact Us",
		description:
			"Tell us the type of energy challenge, outage concern, or solar and backup objective you want solved.",
	},
	{
		number: "02",
		title: "Site Audit & Load Review",
		description:
			"We review your energy usage, critical loads, roof or installation conditions, and existing power setup.",
	},
	{
		number: "03",
		title: "System Design & Recommendation",
		description:
			"Our team defines the right mix of generation, inverter capacity, storage, and protection for your needs.",
	},
	{
		number: "04",
		title: "Installation & Integration",
		description:
			"We install and integrate the components carefully so the system performs safely and consistently in real use.",
	},
	{
		number: "05",
		title: "Testing & Handover",
		description:
			"Performance is verified, users are briefed, and the system is handed over with clear operating guidance.",
	},
];

export default function EnergyProcess() {
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
							Building Your Energy System
							<br />
							In Just 5 Steps
						</h2>
						<p className={styles.summaryDesc}>
							Our process keeps energy delivery practical from first assessment to
							final commissioning, with clear design decisions, controlled
							installation, and dependable handover.
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