import styles from "./ExpertsBanner.module.css";

export default function ExpertsBanner() {
	return (
		<section className={styles.expertsBanner}>
			<div className={styles.expertsBannerBg}>
				{/* PLACEHOLDER — replace with background image */}
			</div>
			<div className={styles.expertsBannerOverlay} />
			<div className={styles.expertsBannerContent}>
				<h2 className={styles.expertsTitle}>
					Guided by Experts,<br />
					Designed for Your Growth
				</h2>
				<p className={styles.expertsDesc}>
					Our engineers and trainers are seasoned professionals, passionate about
					guiding you with the same strategies and insights they use to create
					value in their fields.
				</p>
			</div>
		</section>
	);
}
