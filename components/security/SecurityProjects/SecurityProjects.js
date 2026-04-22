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
	{
		title: "Turnstiles",
		description:
			"Regulate pedestrian access at secured entry points with flip glass, full height, and tripod turnstile systems.",
		image:
			"/assets/images/turnstile.jpg",
	},
	{
		title: "Walkthrough Metal Detectors",
		description:
			"Screen individuals at checkpoints with walk-through detection systems for malls, offices, and institutions.",
		image:
			"/assets/images/walkthrough.webp",
	},
	{
		title: "Boom Barriers",
		description:
			"Automate vehicle entry lanes at car parks, estates, and facility gates with reliable boom barrier systems.",
		image:
			"/assets/images/boom.jpg",
	},
	{
		title: "Hotel Card Locks",
		description:
			"Secure hotel rooms and restricted areas with programmable card lock systems for hospitality environments.",
		image:
			"/assets/images/hotel.jpg",
	},
	{
		title: "Car Trackers",
		description:
			"Monitor vehicle location and movement in real time with GPS tracking systems for fleets and personal vehicles.",
		image:
			"/assets/images/tracker.jpg",
	},
	{
		title: "Road Blockers & Tire Spikes",
		description:
			"Secure perimeters and vehicle entry lanes with heavy-duty road blockers and tire killer spike systems.",
		image:
			"/assets/images/spikes.webp",
	},
];

export default function SecurityProjects() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Our Full Range Of
						<br />
						Security Products &amp; Installations
					</h2>
					<p className={styles.description}>
						Mindview supplies, installs, programs, and integrates all kinds of
						access and security devices for homes, offices, hotels, campuses, and
						controlled facilities — from turnstiles and metal detectors to boom
						barriers, car trackers, and perimeter protection systems.
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