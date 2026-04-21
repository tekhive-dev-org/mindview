import Link from "next/link";
import styles from "./AboutCTA.module.css";

export default function AboutCTA() {
	return (
		<section className={styles.cta}>
			<div className={styles.inner}>
				<div className={styles.panel}>
					<div className={styles.content}>
						<span className={styles.pill}>Start a conversation</span>
						<h2 className={styles.heading}>
							Plan Your Next Technical Rollout With <span className={styles.highlight}>Mindview</span>
						</h2>
						<p className={styles.description}>
							If you need a dependable partner for security, automation,
							engineering, energy, or vertical transport systems, we are ready to
							help you scope, deliver, and support the right solution.
						</p>
						<Link href="/contact" className={styles.ctaButton}>
							Get a Quote
						</Link>
					</div>

					<div className={styles.imageWrap}>
						<img
							src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1400&q=80"
							alt="Technology and industry"
							className={styles.ctaImage}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
