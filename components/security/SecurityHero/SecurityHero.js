import Image from "next/image";
import Link from "next/link";
import styles from "./SecurityHero.module.css";

const REVIEWERS = [
	"/assets/test/5.jpg",
	"/assets/test/2.avif",
	"/assets/test/3.webp",
	"/assets/test/4.jpg",
];

export default function SecurityHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Integrated Security Systems
						<br />
						For Safer Facilities
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							Protect people, facilities, and critical assets with CCTV,
							surveillance, access control, screening equipment, and perimeter
							protection designed for live environments. Mindview helps teams
							improve visibility, control entry points, and respond faster across
							commercial, residential, and industrial sites.
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
									alt="Mindview security client"
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
								src="/assets/images/security1.webp"
								alt="Security bollards protecting an access point"
								width={1400}
								height={1200}
								sizes="(min-width: 1024px) 560px, 100vw"
								priority
							/>
						</div>
						<div className={styles.topPhoto}>
							<Image
								src="/assets/images/security2.webp"
								alt="Perimeter security system at an entry gate"
								width={900}
								height={700}
								sizes="176px"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<Image
								src="/assets/images/security.jpg"
								alt="Smart access control device"
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