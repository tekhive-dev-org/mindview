import Link from "next/link";
import styles from "./EnergyItems.module.css";

const PROJECTS = [
	{
		title: "Rooftop Solar Installation",
		description:
			"Clean rooftop solar systems designed to reduce daytime energy costs and improve daily supply reliability.",
		image:
			"https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200&q=80",
	},
	{
		title: "Solar Maintenance Workflow",
		description:
			"Panel cleaning, inspection, and performance checks that keep solar assets operating efficiently over time.",
		image:
			"https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=1200&q=80",
	},
	{
		title: "Renewable Energy Design",
		description:
			"Energy layouts that combine generation, storage, and backup planning for practical long-term performance.",
		image:
			"https://images.unsplash.com/photo-1509391366360-2e959784a276?w=1200&q=80",
	},
	{
		title: "Inverter And Storage Integration",
		description:
			"Coordinated inverter and battery systems that support stable backup and smoother energy switching.",
		image:
			"https://images.unsplash.com/photo-1624397640148-949b1732bb0a?w=1200&q=80",
	},
	{
		title: "Power Room Retrofit",
		description:
			"Utility-room upgrades that improve protection, energy routing, and maintainability for installed systems.",
		image:
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
	},
	{
		title: "Hybrid Backup Systems",
		description:
			"Hybrid solutions for homes and facilities that balance solar generation, storage, and grid or generator backup.",
		image:
			"https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=1200&q=80",
	},
];

export default function EnergyItems() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Discover Some Of Our Projects In
						<br />
						Energy Solutions
					</h2>
					<p className={styles.description}>
						Mindview energy teams handle residential solar rollouts, inverter and
						battery integration, commercial installations, and performance support
						for sites that need dependable power. These are some of the project
						environments where that work creates measurable value.
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