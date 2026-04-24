import Image from "next/image";
import styles from "./WhatWeDo.module.css";
import Link from "next/link";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";

const SERVICES = [
	{
		icon: <SecurityRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Security Systems",
		image: "/assets/images/security.jpg",
		desc: "We supply, install, program, and integrate layered security systems for homes, offices, hotels, checkpoints, and industrial environments where visibility, controlled access, and response speed matter.",
		reverse: false,
		bullets: [
			"CCTV and IP camera systems with live monitoring, recording, and incident visibility.",
			"Access control, access software, hotel card locks, and EAS systems for managed entry and loss prevention.",
			"Turnstiles, luggage scanners, walkthrough metal detectors, boom barriers, and checkpoint screening systems.",
			"Bollards, road blockers, tire spikes, and car trackers for perimeter and vehicle security.",
		],
		href: "/security",
	},
	{
		icon: <SmartToyRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Automation Systems",
		image: "/assets/images/automation.webp",
		desc: "Our automation work improves movement, convenience, and operational efficiency across residential, commercial, hospitality, and industrial environments.",
		reverse: true,
		bullets: [
			"Automatic gates, sliding doors, swing gates, and entrance automation for secure daily access.",
			"Garage doors, shutter doors, and door operators integrated with remotes, sensors, and access devices.",
			"Smart home and building automation for lighting, climate, utilities, security, and coordinated control.",
			"System programming and integration for connected controls, operators, and mobile visibility.",
		],
		href: "/automation",
	},
	{
		icon: <EngineeringRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Engineering Support",
		image: "/assets/images/engineering.png",
		desc: "From engineering support to energy and vertical transport coordination, we help clients deliver technical systems that are practical to install, operate, and maintain across facilities.",
		reverse: false,
		bullets: [
			"Sales, installation, programming, and integration of access control systems for managed entry across facilities.",
			"Passenger and home elevator solutions with vertical transport planning, modernization, and integration.",
			"Solar energy and backup power systems designed around reliability and site demand.",
			"Field maintenance, technical coordination, and utility support for dependable site performance.",
			"Vertical transport and access infrastructure planned for safe daily use and uptime.",
		],
		href: "/engineering",
	},
];

export default function WhatWeDo() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.sectionLabel}>What We Do</span>
					<h2 className={styles.title}>
						Core Systems We Design,
						<br />
						Install, And Support
					</h2>
					<p className={styles.subtitle}>
						Mindview Automation delivers practical security, automation, access-device,
						engineering, energy, and vertical transport solutions for residential,
						commercial, hospitality, retail, and industrial environments. Our work
						covers supply, installation, programming, and integration, with a
						focus on site conditions, reliability, safe execution, and long-term
						performance after handover.
					</p>
				</div>

				<div className={styles.servicesList}>
					{SERVICES.map((service) => (
						<div
							key={service.title}
							className={`${styles.serviceRow} ${
								service.reverse ? styles.serviceRowReverse : ""
							}`}
						>
							<div className={styles.serviceImageWrap}>
								<Image
									src={service.image}
									alt={service.title}
									className={styles.serviceImage}
									width={1200}
									height={900}
									sizes="(min-width: 1024px) 50vw, 100vw"
								/>
							</div>

							<div className={styles.serviceContent}>
								<h3 className={styles.serviceTitle}>
									<span className={styles.serviceIconWrap}>{service.icon}</span>
									{service.title}
								</h3>
								<p className={styles.serviceDesc}>{service.desc}</p>

								<ul className={styles.bulletList}>
									{service.bullets.map((bullet, i) => (
										<li key={i} className={styles.bulletItem}>
											<CheckCircleRoundedIcon
												className={styles.bulletIcon}
												fontSize="small"
											/>
											{bullet}
										</li>
									))}
								</ul>

								<Link href={service.href} className={styles.readMore}>Read More</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
