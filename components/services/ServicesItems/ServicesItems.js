import Image from "next/image";
import Link from "next/link";
import styles from "./ServicesItems.module.css";

const PROJECTS = [
	{
		title: "Mechanical Engineering",
		description:
			"Rotating equipment support, alignment, fabrication review, and plant mechanical interventions.",
		image:
			"/assets/images/engineering3.webp",
	},
	{
		title: "Electrical Engineering",
		description:
			"Panel systems, low-voltage distribution, testing support, and electrical troubleshooting.",
		image:
			"https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1200&q=80",
	},
	{
		title: "Instrumentation and Control",
		description:
			"Loop checks, signal integrity, control interface review, and instrumentation coordination.",
		image:
			"/assets/images/engineering4.jpg",
	},
	{
		title: "Operation and Maintenance",
		description:
			"Planned maintenance delivery, field servicing, shutdown preparation, and asset support.",
		image:
			"/assets/images/engineering5.jpg",
	},
	{
		title: "Advanced Elevator",
		description:
			"Vertical transport system engineering, inspection support, and modernization coordination.",
		image:
			"/assets/images/engineering6.jpg",
	},
	{
		title: "Field Engineering",
		description:
			"Site supervision, technical reporting, engineering liaison, and hands-on field execution.",
		image:
			"/assets/images/engineering1.webp",
	},
];

export default function ServicesItems() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Discover Some Of Our Projects In
						<br />
						Engineering Services
					</h2>
					<p className={styles.description}>
						Mindview Automation engineering teams handle plant support, electrical systems,
						instrumentation, maintenance, and field execution across demanding
						sites. These are some of the project environments where that work
						delivers measurable value.
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
