import Link from "next/link";
import styles from "./SecurityHero.module.css";

const REVIEWERS = [
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
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
								<img
									key={reviewer}
									src={reviewer}
									alt="Mindview security client"
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
								src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1400&q=80"
								alt="Security bollards protecting an access point"
							/>
						</div>
						<div className={styles.topPhoto}>
							<img
								src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80"
								alt="Perimeter security system at an entry gate"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<img
								src="https://images.unsplash.com/photo-1558002038-1055907df827?w=900&q=80"
								alt="Smart access control device"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}