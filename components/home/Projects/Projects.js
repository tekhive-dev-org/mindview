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
							</div>
							<div className={styles.projectBody}>
								<div className={styles.projectMeta}>
									<span className={styles.metaReviews}>
										<svg className={styles.metaIcon} fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
										</svg>
										{project.reviews}
									</span>
									<span className={styles.metaDate}>{project.date}</span>
								</div>
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
