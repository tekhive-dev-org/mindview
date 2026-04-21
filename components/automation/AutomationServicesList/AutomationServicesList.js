import Image from "next/image";
import Link from "next/link";
import styles from "./AutomationServicesList.module.css";

const SERVICES = [
	{
		title: "Gate automation",
		image:
			"/assets/images/automation5.webp",
		description:
			"Secure and automate estate gates with remote access, timing logic, and dependable operator systems.",
	},
	{
		title: "Door automation",
		image:
			"/assets/images/control.jpg",
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
			"/assets/images/automation6.jpg",
		description:
			"Install premium entrance automation that blends aesthetics, safety, and high-traffic flow control.",
	},
	{
		title: "Advanced elevator",
		image:
			"/assets/images/elevator2.webp",
		description:
			"Upgrade lift systems with intelligent access, monitoring, and integration for modern buildings.",
	},
	{
		title: "Home Automation",
		image:
			"/assets/images/automation.webp",
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
								<Image
									src={service.image}
									alt={service.title}
									className={styles.image}
									width={1200}
									height={800}
									sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
								/>
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
