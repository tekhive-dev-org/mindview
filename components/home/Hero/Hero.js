import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div>
					<span className={styles.heroBadge}>
						Smart Infrastructure And Technical Solutions
					</span>
					<h1 className={styles.heroTitle}>
						Built For Smarter
						<br />
						<span className={styles.heroHighlight}>
							Systems And Safer Operations
						</span>
					</h1>
					<p className={styles.heroDesc}>
						Mindview delivers security systems, automation, engineering support,
						energy solutions, and vertical transport services for homes,
						commercial facilities, and industrial environments. We design,
						install, and support dependable systems that improve safety,
						efficiency, uptime, and day-to-day operational control.
					</p>
					<div className={styles.heroCtas}>
						<Link href="/contact" className={styles.ctaPrimary}>Get a Quote</Link>
						<a href="https://wa.me/2349130410677" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>Whatsapp Us</a>
					</div>
				</div>

				<div className={styles.heroImageWrapper}>
					<Image
						src="/assets/images/mindviewHero.webp"
						alt="Engineering and technical planning team"
						className={styles.heroImage}
						width={1400}
						height={1200}
						sizes="(min-width: 1024px) 50vw, 100vw"
						priority
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
