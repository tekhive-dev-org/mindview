import Link from "next/link";
import styles from "./VerticalSolutionsBanner.module.css";

const OFFERINGS = [
	{
		title: "Passenger Elevators For Every Building",
		description:
			"We provide passenger lift systems for office developments, hospitality environments, residential buildings, and institutional facilities where safe and efficient movement between floors is essential.",
		bullets: [
			"Passenger lift planning for commercial sites",
			"Accessibility-focused transport design",
			"Controller, drive, and cabin coordination",
			"Safe installation review and commissioning",
		],
		image:
			"https://images.unsplash.com/photo-1460317442991-0ec209397118?w=1200&q=80",
		alt: "Lift shaft construction and passenger elevator installation",
	},
	{
		title: "Escalators And Moving Walkways",
		description:
			"For malls, transport hubs, and public spaces, Mindview supports escalator and moving walkway systems that improve passenger flow, support accessibility, and keep high-traffic environments moving.",
		bullets: [
			"Escalator systems for retail and transit spaces",
			"Moving walkway support for public circulation",
			"Traffic flow and user-safety coordination",
			"Maintenance-ready integration and testing",
		],
		image:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=80",
		alt: "Escalator system in a public building",
	},
];

export default function VerticalSolutionsBanner() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>What we offer</span>
					<h2 className={styles.title}>Trust Us To Ease Your Transport Systems</h2>
					<p className={styles.subtitle}>
						We help businesses, property developers, and public-facing facilities
						build vertical transport systems that move people comfortably,
						support accessibility, and stay dependable under daily use.
					</p>
				</div>

				<div className={styles.stack}>
					{OFFERINGS.map((offering, index) => (
						<div
							key={offering.title}
							className={`${styles.row} ${index % 2 === 1 ? styles.rowReverse : ""}`}
						>
							<div className={styles.media}>
								<img src={offering.image} alt={offering.alt} className={styles.image} />
							</div>
							<div className={styles.content}>
								<h3 className={styles.cardTitle}>{offering.title}</h3>
								<p className={styles.cardText}>{offering.description}</p>
								<ul className={styles.list}>
									{offering.bullets.map((bullet) => (
										<li key={bullet} className={styles.listItem}>
											<span className={styles.listIcon} aria-hidden="true">
												<svg viewBox="0 0 20 20" fill="none">
													<path
														d="M5 10.5l3 3 7-7"
														stroke="currentColor"
														strokeWidth="1.8"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
											<span>{bullet}</span>
										</li>
									))}
								</ul>
								<Link href="/contact" className={styles.linkButton}>
									View More
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}