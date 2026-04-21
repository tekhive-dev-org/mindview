import Link from "next/link";
import styles from "./EnergyHero.module.css";

const REVIEWERS = [
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
];

export default function EnergyHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Solar And Backup Energy
						<br />
						Built For Daily Reliability
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							From rooftop solar and inverter backup to hybrid systems for homes,
							offices, and commercial facilities, Mindview builds practical
							energy infrastructure that reduces grid dependence and protects
							critical loads. We assess your demand, recommend the right
							generation and storage mix, and deliver installations built for
							safe, efficient, long-term performance.
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
									alt="Mindview energy solutions client"
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
								src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1400&q=80"
								alt="Wind turbine and clean energy installation"
							/>
						</div>
						<div className={styles.topPhoto}>
							<img
								src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=900&q=80"
								alt="Solar engineer inspecting photovoltaic panels"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<img
								src="https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=900&q=80"
								alt="Inverter and energy storage hardware"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}