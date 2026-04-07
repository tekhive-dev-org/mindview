import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div>
					<span className={styles.heroBadge}>
						Welcome to Mindview Digital Solutions
					</span>
					<h1 className={styles.heroTitle}>
						From Mindview To Solutions -{" "}
						<span className={styles.heroHighlight}>
							We bridge the gap
						</span>
					</h1>
					<p className={styles.heroDesc}>
						Welcome to Mindview digital solutions, where innovation meets
						opportunity! We empower businesses with tailored tech solutions,
						upskill workforces through corporate training, and prepare aspiring
						professionals for industry-ready careers through our cohort-based
						learning programs. At Mindview, vision and transformation go hand in
						hand, start your journey with us today!
					</p>
					<div className={styles.heroCtas}>
						<button className={styles.ctaPrimary}>Get a Quote</button>
						<button className={styles.ctaSecondary}>Whatsapp Us</button>
					</div>
				</div>

				<div className={styles.heroImageWrapper}>
					<img
						src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80"
						alt="Team collaborating on digital solutions"
						className={styles.heroImage}
					/>
					<div className={styles.heroStatsBadge}>
						<span className={styles.statsNumber}>50+</span>
						<span className={styles.statsLabel}>
							Satisfied Clients &amp; Companies
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
