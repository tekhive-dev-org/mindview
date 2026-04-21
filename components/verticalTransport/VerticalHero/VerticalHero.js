import Link from "next/link";
import styles from "./VerticalHero.module.css";

const REVIEWERS = [
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
];

export default function VerticalHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Vertical Transport Systems
						<br />
						Built For Safe Daily Movement
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							Mindview provides elevators, escalators, moving walkways, freight
							lifts, and access infrastructure for buildings where passenger
							movement, accessibility, and uptime matter every day. We help
							clients plan, install, modernize, and maintain systems that move
							people and goods safely, comfortably, and reliably.
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
									alt="Mindview vertical transport client"
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
								src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1400&q=80"
								alt="Escalator and vertical mobility infrastructure"
							/>
						</div>
						<div className={styles.topPhoto}>
							<img
								src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=900&q=80"
								alt="Large commercial building with vertical access systems"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<img
								src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80"
								alt="Lift modernization and access infrastructure"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}