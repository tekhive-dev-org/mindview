import Link from "next/link";
import styles from "./VerticalItems.module.css";

const PROJECTS = [
	{
		title: "Passenger Lift Systems",
		description:
			"Passenger elevator solutions for office, residential, and institutional buildings that require dependable daily movement.",
		image:
			"https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
	},
	{
		title: "Escalator Installations",
		description:
			"Escalator systems for malls and public spaces where crowd movement and uptime are critical to the user experience.",
		image:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
	},
	{
		title: "Lift Modernization",
		description:
			"Modernization work that improves controller performance, ride quality, safety response, and long-term maintainability.",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
	},
	{
		title: "Accessibility Platforms",
		description:
			"Accessibility-focused lift and access infrastructure that improves movement for users across different building conditions.",
		image:
			"https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=1200&q=80",
	},
	{
		title: "Machine Room And Controls",
		description:
			"Control room and drive-system coordination for reliable lift performance, smoother response, and better maintenance access.",
		image:
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
	},
	{
		title: "Freight And Service Lifts",
		description:
			"Heavy-duty lift solutions for goods movement, back-of-house operations, and service access in busy facilities.",
		image:
			"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80",
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
						Mindview vertical transport work supports lifts, escalators,
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