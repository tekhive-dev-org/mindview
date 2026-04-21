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
					Request A Project Quote
				</h1>
				<p className={styles.heroDesc}>
					Share your project scope, timeline, and service needs so the Mindview
					team can review the opportunity and respond with the right next steps
					for delivery, site assessment, or commercial discussion.
				</p>
			</div>
		</section>
	);
}
