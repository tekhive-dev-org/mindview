import styles from "./AllServicesHero.module.css";

export default function AllServicesHero() {
	return (
		<section className={styles.hero}>
			<img
				src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80"
				alt="Smart infrastructure and engineering building"
				className={styles.heroBg}
			/>
			<div className={styles.heroOverlay} />
			<div className={styles.heroInner}>
				<h1 className={styles.heroTitle}>
					Provider of Smart Infrastructure &amp; Engineering
				</h1>
				<p className={styles.heroDesc}>
					To bridge the gap between technology and daily life by delivering
					practical tech skills, responsive digital solutions, and collaborative
					smart experiences.
				</p>
			</div>
		</section>
	);
}