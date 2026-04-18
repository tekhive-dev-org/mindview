import Link from "next/link";
import styles from "./AutomationHero.module.css";

const REVIEWERS = [
	"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&q=80",
	"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80",
	"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80",
	"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
];

export default function AutomationHero() {
	return (
		<section className={styles.hero}>
			<div className={styles.heroGrid}>
				<div className={styles.textCol}>
					<h1 className={styles.heroTitle}>
						Seamless Automation
						
						For Every Home
					</h1>
					<div className={styles.heroDescWrap}>
						<p className={styles.heroDesc}>
							Founded by mindview began as a training initiative for young
							professionals. Today, it has grown into a dynamic ecosystem
							&apos; empowering individuals to build meaningful careers, guiding
							startups and organizations with tailored solutions, and fostering
							mentorship that inspires clarity, confidence, and growth. More
							than a training hub, Mindview is a movement committed to
							transforming people, businesses, and communities through skills,
							innovation, and technology.
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
									alt="Mindview customer"
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
								src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1400&q=80"
								alt="Remote home automation control"
							/>
						</div>
						<div className={styles.topPhoto}>
							<img
								src="https://images.unsplash.com/photo-1567789884554-0b844b597180?w=900&q=80"
								alt="Industrial automation interface"
							/>
						</div>
						<div className={styles.bottomPhoto}>
							<img
								src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80"
								alt="Automation engineers at work"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
