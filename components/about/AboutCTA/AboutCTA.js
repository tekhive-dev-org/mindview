import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
	return (
		<section className={styles.cta}>
			<div className={styles.ctaInner}>
				<h2 className={styles.heading}>
					Join a thriving community of solution builders &amp; providers
					{" "}with <span className={styles.highlight}>Mindview</span>
				</h2>
				<p className={styles.description}>
					Build real skills, get certified, and grow fast in the AI-powered
					Tech world. Ready to stand out?
				</p>
				<a href="#" className={styles.ctaButton}>
					Learn More
				</a>
			</div>

			<div className={styles.imageWrap}>
				<img
					src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80"
					alt="Technology and industry"
					className={styles.ctaImage}
				/>
			</div>
		</section>
	);
}
