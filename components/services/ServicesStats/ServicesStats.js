import styles from "./ServicesStats.module.css";

const STATS = [
	{ number: "500+", label: "Delivered projects" },
	{ number: "50+", label: "Trusted partners" },
	{ number: "4.7/5", label: "Average rating" },
];

export default function ServicesStats() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.statsRow}>
					{STATS.map((stat) => (
						<div key={stat.label} className={styles.stat}>
							<span className={styles.statNumber}>{stat.number}</span>
							<span className={styles.statLabel}>{stat.label}</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}