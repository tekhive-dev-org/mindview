import Link from "next/link";
import styles from "./AutomationServicesList.module.css";

const SERVICES = [
	{
		title: "Gate automation",
		image:
			"https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1200&q=80",
		description:
			"Secure and automate estate gates with remote access, timing logic, and dependable operator systems.",
	},
	{
		title: "Door automation",
		image:
			"https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=1200&q=80",
		description:
			"Enable sensor-driven and access-controlled door systems for residential and commercial spaces.",
	},
	{
		title: "Industry automation",
		image:
			"https://images.unsplash.com/photo-1567789884554-0b844b597180?w=1200&q=80",
		description:
			"Control production lines, panel systems, and connected machinery with resilient engineering design.",
	},
	{
		title: "Revolving Doors",
		image:
			"https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&q=80",
		description:
			"Install premium entrance automation that blends aesthetics, safety, and high-traffic flow control.",
	},
	{
		title: "Advanced elevator",
		image:
			"https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
		description:
			"Upgrade lift systems with intelligent access, monitoring, and integration for modern buildings.",
	},
	{
		title: "Home Automation",
		image:
			"https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80",
		description:
			"Connect lighting, entertainment, security, and utilities into a seamless home control experience.",
	},
];

export default function AutomationServicesList() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Discover Some Of Our Projects In
						<br />
						Seamless Automation
					</h2>
					<p className={styles.description}>
						Mindview designs and installs automation systems for homes,
						commercial spaces, and industrial sites. Explore some of the
						projects and environments where our automation work is already in
						motion.
					</p>
					<Link href="/contact" className={styles.viewAllBtn}>
						Get a Quote
					</Link>
				</div>

				<div className={styles.grid}>
					{SERVICES.map((service) => (
						<article key={service.title} className={styles.card}>
							<div className={styles.imageFrame}>
								<img src={service.image} alt={service.title} className={styles.image} />
							</div>
							<div className={styles.cardBody}>
								<h3 className={styles.cardTitle}>{service.title}</h3>
								<p className={styles.cardDesc}>{service.description}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
