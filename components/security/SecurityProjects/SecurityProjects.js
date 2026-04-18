import Link from "next/link";
import styles from "./SecurityProjects.module.css";

const PROJECTS = [
	{
		title: "Access Control Systems",
		description:
			"Deploy biometric, RFID, and credential-based systems that control movement into sensitive spaces.",
		image:
			"https://images.unsplash.com/photo-1558002038-1055907df827?w=1200&q=80",
	},
	{
		title: "Alarm Systems Installation",
		description:
			"Install connected alarm systems with reliable triggers, response workflows, and central visibility.",
		image:
			"https://images.unsplash.com/photo-1582139329536-e7284fece509?w=1200&q=80",
	},
	{
		title: "Bollards",
		description:
			"Protect high-risk entry points with fixed or automatic bollards engineered for perimeter control.",
		image:
			"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
	},
	{
		title: "CCTV/Cameras",
		description:
			"Build complete camera coverage with indoor and outdoor systems for monitoring and evidence review.",
		image:
			"https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=1200&q=80",
	},
	{
		title: "Luggage Scanners",
		description:
			"Screen carried items efficiently with dependable scanner installations at controlled checkpoints.",
		image:
			"https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&q=80",
	},
	{
		title: "Surveillance Cameras",
		description:
			"Coordinate visible deterrence and remote oversight through carefully placed surveillance endpoints.",
		image:
			"https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
	},
];

export default function SecurityProjects() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Discover Some Of Our Projects In
						<br />
						Smart Security Installations
					</h2>
					<p className={styles.description}>
						Mindview deploys practical security infrastructure for checkpoints,
						buildings, campuses, offices, and controlled facilities. These are
						some of the environments where our smart security installations are
						already in operation.
					</p>
					<Link href="/contact" className={styles.viewAllBtn}>
						Get a Quote
					</Link>
				</div>

				<div className={styles.grid}>
					{PROJECTS.map((project) => (
						<article key={project.title} className={styles.card}>
							<div className={styles.imageFrame}>
								<img src={project.image} alt={project.title} className={styles.image} />
							</div>
							<div className={styles.cardBody}>
								<h3 className={styles.cardTitle}>{project.title}</h3>
								<p className={styles.cardDesc}>{project.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}