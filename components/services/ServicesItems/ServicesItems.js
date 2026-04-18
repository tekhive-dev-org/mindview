import Link from "next/link";
import styles from "./ServicesItems.module.css";

const PROJECTS = [
	{
		title: "Mechanical Engineering",
		description:
			"Rotating equipment support, alignment, fabrication review, and plant mechanical interventions.",
		image:
			"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80",
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
			"https://images.unsplash.com/photo-1581093458791-9d09ddf2f2b7?w=1200&q=80",
	},
	{
		title: "Operation and Maintenance",
		description:
			"Planned maintenance delivery, field servicing, shutdown preparation, and asset support.",
		image:
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
	},
	{
		title: "Advanced Elevator",
		description:
			"Vertical transport system engineering, inspection support, and modernization coordination.",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
	},
	{
		title: "Field Engineering",
		description:
			"Site supervision, technical reporting, engineering liaison, and hands-on field execution.",
		image:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
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
						Mindview engineering teams handle plant support, electrical systems,
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
