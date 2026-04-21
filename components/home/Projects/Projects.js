import styles from "./Projects.module.css";

const PROJECTS = [
	{
		title: "Operation Maintenance",
		description: "Integrated maintenance planning for industrial facilities with faster diagnostics, uptime tracking, and support workflows.",
		date: "Dec 2025",
		image: "/assets/images/maintenance.jpg",
	},
	{
		title: "Vertical Transport Systems",
		description: "Lift and escalator solutions designed for safe movement, reliable performance, and long-term building efficiency.",
		date: "Dec 2025",
		image: "/assets/images/vertical.jpg",
	},
	{
		title: "Solar Energy",
		description: "Solar installations tailored for commercial and residential sites with efficient power delivery and scalable output.",
		date: "Oct 2025",
		image: "/assets/images/solar.webp",
	},
	{
		title: "Engineering",
		description: "Structural and systems engineering support that turns project requirements into practical, build-ready execution.",
		date: "Dec 2025",
		image: "/assets/images/engineering.webp",
	},
	{
		title: "CCTV and Surveillance",
		description: "Smart monitoring systems built to improve site visibility, incident response, and everyday operational security.",
		date: "Dec 2025",
		image: "/assets/images/cctv.jpg",
	},
	{
		title: "Access Control Systems",
		description: "Controlled entry solutions that combine security hardware, identity access, and dependable site management.",
		date: "Nov 2025",
		image: "/assets/images/control.jpg",
	},
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
					These case-study snapshots reflect Mindview work across engineering
					support, security systems, solar energy, surveillance, and vertical
					transport. Each project is approached around site needs,
					installation quality, system reliability, and long-term use.
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
									alt={project.title}
									className={styles.projectImage}
								/>
							</div>
							<div className={styles.projectBody}>
								<p className={styles.projectDate}>{project.date}</p>
								<h3 className={styles.projectName}>{project.title}</h3>
								<p className={styles.projectDescription}>{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
