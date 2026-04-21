import Image from "next/image";
import styles from "./AllServicesHero.module.css";

export default function AllServicesHero() {
	return (
		<section className={styles.hero}>
			<Image
				src="/assets/images/mindviewHero.webp"
				alt="Smart infrastructure and engineering building"
				className={styles.heroBg}
				fill
				sizes="100vw"
				priority
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