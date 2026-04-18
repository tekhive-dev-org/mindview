import styles from "./Projects.module.css";

const PROJECTS = [
	{ name: "Automated workflow", author: "British Chidi", reviews: "20k reviews", date: "Dec 2025", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80" },
	{ name: "Automated workflow", author: "British Chidi", reviews: "20k reviews", date: "Dec 2025", image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=600&q=80" },
	{ name: "3D engineering", author: "British Chidi", reviews: "10k reviews", date: "Oct 2025", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80" },
	{ name: "Digital illustration", author: "Kelvin British Chidi", reviews: "20k reviews", date: "Dec 2025", image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80" },
	{ name: "Advanced elevator", author: "British Chidi", reviews: "20k reviews", date: "Dec 2025", image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80" },
	{ name: "Automated workflow", author: "British Chidi", reviews: "20k reviews", date: "Nov 2025", image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80" },
];

export default function Projects() {
	return (
		<section className={styles.projects}>
			{/* Subtle ambient glow */}
			<div className={styles.ambientGlow || ''} aria-hidden="true" />

			<div className={styles.projectsInner}>
				<div className={styles.projectsHeader}>
					<div className={styles.sectionLabel}>
						<span className={styles.labelDot} />
						Our Portfolio
					</div>
					<h2 className={styles.projectsTitle}>
						Discover Some Of Our Projects In
						<br />
						<span className={styles.titleHighlight}>
							Smart Automation, Security &amp; Engineering
						</span>
					</h2>
					<p className={styles.projectsDesc}>
					Mindview digital solutions is an holistic platform that connects learning with real world impact. The platform designed to equip individuals with in-depth knowledge and practical skills in data analytics, product management, product design and related fields. Mindview offers structured engineering, smart security systems, and industry-based infrastructure.
					</p>
				</div>

				<div className={styles.tabRow}>
					<button className={`${styles.tab} ${styles.tabActive}`}>Case Study</button>
					
				</div>

				<div className={styles.projectsGrid}>
					{PROJECTS.map((project, i) => (
						<div key={i} className={styles.projectCard}>
							<div className={styles.projectImageWrap}>
								<img
									src={project.image}
									alt={project.name}
									className={styles.projectImage}
								/>
								<div className={styles.imageOverlay} />
								<div className={styles.imageMeta}>
									<span className={styles.imageMetaReviews}>{project.reviews}</span>
									<span className={styles.imageMetaDate}>{project.date}</span>
								</div>
							</div>
							<div className={styles.projectBody}>
								<h3 className={styles.projectName}>{project.name}</h3>
								<p className={styles.projectAuthor}>{project.author}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
