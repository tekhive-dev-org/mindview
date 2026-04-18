import styles from "./WhatWeDo.module.css";
import Link from "next/link";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import SecurityRoundedIcon from "@mui/icons-material/SecurityRounded";
import SmartToyRoundedIcon from "@mui/icons-material/SmartToyRounded";
import EngineeringRoundedIcon from "@mui/icons-material/EngineeringRounded";

const SERVICES = [
	{
		icon: <SecurityRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Security",
		image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
		desc: "We provide end-to-end security solutions — from CCTV and IP surveillance to access control, alarm systems, and perimeter protection for facilities of all sizes.",
		reverse: false,
		bullets: [
			"CCTV and IP surveillance systems with remote monitoring and recording capabilities.",
			"Access control systems including biometrics, RFID, and smart card solutions.",
			"Integrated alarm systems with real-time alerts and response protocols.",
		],
		href: "/security",
	},
	{
		icon: <SmartToyRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Automation",
		image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
		desc: "Our home and industrial automation solutions bring intelligent control to lighting, climate, security, manufacturing, and access — tailored to your environment.",
		reverse: true,
		bullets: [
			"Intelligent home automation systems for lighting, climate, security, and entertainment.",
			"Industrial automation systems for manufacturing, logistics, and process plants.",
			"Gate and door automation for residential, commercial, and industrial entries.",
		],
		href: "/automation",
	},
	{
		icon: <EngineeringRoundedIcon className={styles.serviceTitleIcon} />,
		title: "Infrastructure",
		image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80",
		desc: "From mechanical and electrical engineering to instrumentation, control systems, and ongoing maintenance — we deliver infrastructure built for industry.",
		reverse: false,
		bullets: [
			"Mechanical engineering design, fabrication, and integration for industrial and commercial applications.",
			"Electrical engineering covering power distribution, control panels, and low-voltage systems.",
			"Instrumentation & control solutions for precise process monitoring and automation.",
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
						Transform Business Ideas Into
						<br />
						Digital Solutions With Mindview
					</h2>
					<p className={styles.subtitle}>
						Welcome to Mindview digital solutions — where learning, mentorship,
						and technology meet to build the future! We offer cohort-based
						programs, professional courses, and hands-on mentorship to help you
						thrive in today&apos;s digital world. Let us and make your transformation count!
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
								<img
									src={service.image}
									alt={service.title}
									className={styles.serviceImage}
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
