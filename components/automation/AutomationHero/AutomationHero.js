import Image from "next/image";
import Link from "next/link";
import styles from "./AutomationHero.module.css";

const REVIEWERS = [
	"/assets/test/5.jpg",
	"/assets/test/2.avif",
	"/assets/test/3.webp",
	"/assets/test/4.jpg",
];

export default function AutomationHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Automation Systems
						<br />
						For Homes And Facilities
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							Mindview Automation designs and installs automation solutions that improve
							comfort, access, control, and operational efficiency across homes,
							offices, and industrial sites. From smart home integration and gate
							automation to door systems, connected controls, and industrial
							automation workflows, we deliver systems that are practical,
							dependable, and easy to manage.
						</p>
					</div>
					<div className={styles.heroCtas}>
						<Link href="/contact" className={styles.ctaPrimary}>
							Get a Quote
						</Link>
						<a
							href="https://wa.me/2349130410677"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.ctaSecondary}
						>
							Whatsapp Us
						</a>
					</div>

					<div className={styles.reviewCard}>
						<div className={styles.avatarGroup}>
							{REVIEWERS.map((reviewer, index) => (
								<Image
									key={reviewer}
									src={reviewer}
									alt="Mindview automation client"
									className={styles.avatar}
									width={46}
									height={46}
									sizes="46px"
									style={{ zIndex: REVIEWERS.length - index }}
								/>
							))}
						</div>
						<div className={styles.reviewCopy}>
							<strong>1,500 +</strong>
							<span>Customer Review</span>
						</div>
					</div>
				</div>

				<div className={styles.visualCol}>
					<div className={styles.visualWrap}>
						<div className={styles.mainPhoto}>
							<Image
								src="/assets/images/automation2.jpg"
								width={1400}
								height={1200}
								sizes="(min-width: 1024px) 560px, 100vw"
								priority
							/>
						</div>
						<div className={styles.topPhoto}>
							<Image
								src="/assets/images/automation4.jpg"
								width={900}
								height={700}
								sizes="176px"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<Image
								src="/assets/images/automation3.jpg"
								alt="Automation engineers at work"
								width={900}
								height={700}
								sizes="144px"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
