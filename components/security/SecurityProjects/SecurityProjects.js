import Image from "next/image";
import Link from "next/link";
import styles from "./SecurityProjects.module.css";

const PROJECTS = [
	{
		title: "Access Control Systems",
		description:
			"Deploy biometric, RFID, and credential-based systems that control movement into sensitive spaces.",
		image:
			"/assets/images/control.jpg",
	},
	{
		title: "Alarm Systems Installation",
		description:
			"Install connected alarm systems with reliable triggers, response workflows, and central visibility.",
		image:
			"/assets/images/alarm.webp",
	},
	{
		title: "Bollards",
		description:
			"Protect high-risk entry points with fixed or automatic bollards engineered for perimeter control.",
		image:
			"/assets/images/bollard.jpg",
	},
	{
		title: "CCTV/Cameras",
		description:
			"Build complete camera coverage with indoor and outdoor systems for monitoring and evidence review.",
		image:
			"/assets/images/cctv.jpg",
	},
	{
		title: "Luggage Scanners",
		description:
			"Screen carried items efficiently with dependable scanner installations at controlled checkpoints.",
		image:
			"/assets/images/security3.avif",
	},
	{
		title: "Surveillance Cameras",
		description:
			"Coordinate visible deterrence and remote oversight through carefully placed surveillance endpoints.",
		image:
			"/assets/images/surveillance.jpg",
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
								<Image
									src={project.image}
									alt={project.title}
									className={styles.image}
									width={1200}
									height={800}
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
								/>
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