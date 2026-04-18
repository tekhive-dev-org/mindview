import styles from "./ContactHero.module.css";

export default function ContactHero() {
	return (
		<section className={styles.hero}>
			<img
				src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
				alt="Smart infrastructure"
				className={styles.heroBg}
			/>
			<div className={styles.heroOverlay} />
			<div className={styles.heroInner}>
				<h1 className={styles.heroTitle}>
					A Journey Of Automation &amp; Technology
				</h1>
				<p className={styles.heroDesc}>
					To bridge the gap between learning and industry by empowering
					individuals and organizations with practical tech skills, transformative
					digital solutions, and collaborative smart infrastructures.
				</p>
			</div>
		</section>
	);
}
