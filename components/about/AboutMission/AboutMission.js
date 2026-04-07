import styles from "./AboutMission.module.css";

const IMAGES = [
	{
		src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=500&q=80",
		alt: "Industrial machinery",
	},
	{
		src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=500&q=80",
		alt: "Engineering workspace",
	},
	{
		src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&q=80",
		alt: "Team collaboration",
	},
];

export default function AboutMission() {
	return (
		<section className={styles.mission}>
			<div className={styles.missionInner}>
				<div className={styles.missionHeader}>
					<h2 className={styles.missionTitle}>
						Mindview Digital Solutions – Bridging the Gap between Vision &amp;
						Solution
					</h2>
					<p className={styles.missionDesc}>
						Founded by mindview began as a training initiative for young
						professionals. Today, it has grown into a dynamic ecosystem —
						empowering individuals to build meaningful careers, guiding startups
						and organizations with tailored solutions, and fostering mentorship
						that inspires clarity, confidence, and growth. More than a training
						hub, Mindview is a movement committed to transforming people,
						businesses, and communities through skills, innovation, and
						technology.
					</p>
				</div>

				<div className={styles.imageGrid}>
					{IMAGES.map((img, i) => (
						<div key={i} className={styles.imageWrap}>
							<img
								src={img.src}
								alt={img.alt}
								className={styles.image}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
