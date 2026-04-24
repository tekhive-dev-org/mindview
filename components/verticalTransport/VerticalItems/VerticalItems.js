import Image from "next/image";
import Link from "next/link";
import styles from "./VerticalItems.module.css";

const PROJECTS = [
	{
		title: "Passenger Lift Systems",
		description:
			"Passenger elevator solutions for office, residential, and institutional buildings that require dependable daily movement.",
		image:
			"/assets/images/elevator2.webp",
	},
	{
		title: "Escalator Installations",
		description:
			"Escalator systems for malls and public spaces where crowd movement and uptime are critical to the user experience.",
		image:
			"/assets/images/vertical1.jpg",
	},
	{
		title: "Lift Modernization",
		description:
			"Modernization work that improves controller performance, ride quality, safety response, and long-term maintainability.",
		image:
			"/assets/images/elevator1.webp",
	},
	{
		title: "Accessibility Platforms",
		description:
			"Accessibility-focused lift and access infrastructure that improves movement for users across different building conditions.",
		image:
			"/assets/images/platforms.jpg",
	},
	{
		title: "Machine Room And Controls",
		description:
			"Control room and drive-system coordination for reliable lift performance, smoother response, and better maintenance access.",
		image:
			"/assets/images/machine-room.jpg",
	},
	{
		title: "Freight And Service Lifts",
		description:
			"Heavy-duty lift solutions for goods movement, back-of-house operations, and service access in busy facilities.",
		image:
			"/assets/images/freight.png",
	},
];

export default function VerticalItems() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Discover Some Of Our Projects In
						<br />
						Vertical Transport Systems
					</h2>
					<p className={styles.description}>
						Mindview Automation vertical transport work supports lifts, escalators,
						modernization programs, accessibility systems, and service access for
						properties where safe movement and reliable performance are essential.
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