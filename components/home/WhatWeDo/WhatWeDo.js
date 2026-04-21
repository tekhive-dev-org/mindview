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
		desc: "We design and install layered security systems for homes, offices, facilities, and industrial environments where visibility, access control, and response speed matter.",
		reverse: false,
		bullets: [
			"CCTV and IP surveillance systems with live monitoring, recording, and incident visibility.",
			"Access control setups using biometrics, RFID, intercoms, and controlled entry points.",
			"Integrated alarm, detection, and perimeter systems tailored to real site conditions.",
		],
		href: "/security",
	},
	{
		icon: <SmartToyRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Automation Systems",
		image: "/assets/images/automation.webp",
		desc: "Our automation work improves control, convenience, and operational efficiency across residential, commercial, and industrial environments.",
		reverse: true,
		bullets: [
			"Smart home and building automation for lighting, climate, access, and coordinated control.",
			"Industrial automation support for process improvement, monitoring, and dependable operations.",
			"Gate, door, and entrance automation for secure and efficient movement across sites.",
		],
		href: "/automation",
	},
	{
		icon: <EngineeringRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Engineering Support",
		image: "/assets/images/engineering.png",
		desc: "From engineering support to energy and vertical transport coordination, we help clients deliver technical systems that are practical to install, run, and maintain.",
		reverse: false,
		bullets: [
			"Mechanical, electrical, and instrumentation support for facilities and live operations.",
			"Solar energy and backup power systems designed around reliability and site demand.",
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
						Mindview delivers practical security, automation, engineering, energy,
						and vertical transport solutions for residential, commercial, and
						industrial environments. Our work is built around site conditions,
						reliability, safe execution, and long-term performance after handover.
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
