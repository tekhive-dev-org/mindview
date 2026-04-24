import Image from "next/image";
import styles from "./AboutHero.module.css";

export default function AboutHero() {
	return (
		<section className={styles.hero}>
			<Image
				src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80"
				alt="Technical team working on industrial systems"
				className={styles.heroBg}
				fill
				sizes="100vw"
				priority
			/>
			<div className={styles.heroOverlay} />
			<div className={styles.heroInner}>
				<span className={styles.heroBadge}>About Mindview Automation</span>
				<h1 className={styles.heroTitle}>
					A Technical Partner Focused On Practical Systems Delivery
				</h1>
				<p className={styles.heroDesc}>
					Mindview Automation delivers security, automation,
					engineering, energy, and vertical transport solutions with a strong
					focus on installation quality, reliability, and long-term support for
					real operating environments.
				</p>
			</div>
		</section>
	);
}
