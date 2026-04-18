import Link from "next/link";
import styles from "./AutomationAbout.module.css";

const STATS = [
	{ number: "500+", label: "Delivered projects" },
	{ number: "50+", label: "Trusted partners" },
	{ number: "4.7/5", label: "Average rating" },
];

export default function AutomationAbout() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.statsRow}>
					{STATS.map((s) => (
						<div key={s.label} className={styles.stat}>
							<span className={styles.statNumber}>{s.number}</span>
							<span className={styles.statLabel}>{s.label}</span>
						</div>
					))}
				</div>
			
			</div>
		</section>
	);
}
