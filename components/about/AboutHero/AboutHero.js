import styles from "./AboutHero.module.css";

export default function AboutHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroContent}>
				<h1 className={styles.heroTitle}>
					Transform Your Career, Transform Your Business With Mindview
				</h1>
				<p className={styles.heroDesc}>
					Welcome to Mindview digital solutions — where learning, mentorship,
					and technology create opportunity. We empower individuals and
					organizations with the skills, guidance, and solutions to thrive in
					today&apos;s digital world. Join us and begin your transformation
					today!
				</p>
			</div>
			<div className={styles.heroImageWrap}>
				<img
					src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80"
					alt="Industrial automation and technology"
					className={styles.heroImage}
				/>
				<div className={styles.heroImageOverlay} />
			</div>
		</section>
	);
}
