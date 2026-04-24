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
		title: "Revolving Doors",
		image:
			"/assets/images/automation6.jpg",
		description:
			"Install premium entrance automation that blends aesthetics, safety, and high-traffic flow control.",
	},
	{
		title: "Elevators",
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
	{
		title: "Sliding Doors",
		image:
			"/assets/images/sliding.jpeg",
		description:
			"Install automatic sliding door systems for retail entrances, hospitals, offices, and high-traffic access points.",
	},
	{
		title: "Swing Gates",
		image:
			"/assets/images/swing.jpg",
		description:
			"Automate swing gate entry for residential estates and commercial properties with reliable motor systems.",
	},
	{
		title: "Garage Doors",
		image:
			"/assets/images/garage.jpg",
		description:
			"Supply and install automated garage door systems with remote or access-card operation for homes and facilities.",
	},
	{
		title: "Shutter Doors",
		image:
			"/assets/images/shutter.jpg",
		description:
			"Deploy motorised shutter door systems for warehouses, shops, and secured storage areas requiring controlled access.",
	},
];

export default function AutomationServicesList() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						Our Full Range Of
						<br />
						Automation Systems
					</h2>
					<p className={styles.description}>
						Mindview Automation designs and installs automation systems for homes,
						commercial spaces, and industrial sites — from sliding doors, swing
						gates, and garage doors to smart home control and advanced elevator
						systems.
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
