import Link from "next/link";
import styles from "./ServicesHero.module.css";

const REVIEWERS = [
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
];

export default function ServicesHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Engineering Support
						<br />
						For Critical Operations
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							Mindview delivers mechanical, electrical, instrumentation, and
							operations support for industrial plants, commercial facilities, and
							utility environments. From field execution and troubleshooting to
							maintenance planning and system review, we help teams keep assets
							safe, efficient, and ready for continuous performance.
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
								<img
									key={reviewer}
									src={reviewer}
									alt="Mindview engineering client"
									className={styles.avatar}
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
							<img
								src="https://images.unsplash.com/photo-1541976590-713941681591?w=1400&q=80"
								alt="Engineering team carrying out field maintenance"
							/>
						</div>
						<div className={styles.topPhoto}>
							<img
								src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=900&q=80"
								alt="Engineering inspection scene"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<img
								src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=900&q=80"
								alt="Mechanical field service engineers"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
