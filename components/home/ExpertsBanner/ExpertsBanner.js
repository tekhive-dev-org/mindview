import styles from "./ExpertsBanner.module.css";

export default function ExpertsBanner() {
	return (
		<section className={styles.expertsBanner}>
			<div className={styles.expertsBannerBg}>
				{/* Background handled by section styles */}
			</div>
			<div className={styles.expertsBannerOverlay} />
			<div className={styles.expertsBannerContent}>
				<h2 className={styles.expertsTitle}>
					Built Around Real Sites,<br />
					Not Generic Specifications
				</h2>
				<p className={styles.expertsDesc}>
					Mindview Automation approaches every project with technical review, careful system
					selection, disciplined installation, and practical after-support so the
					final result works reliably in the environment it was built for.
				</p>
			</div>
		</section>
	);
}
