import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./RecentWorkCarousel.module.css";

const RECENT_WORK = [
	{
		title: "Garage Door Installation",
		description:
			"Installed an automated garage door system for secure daily access, smoother operation, and dependable residential entry control.",
		image: "/assets/recent/work1.jpeg",
	},
	{
		title: "Bollard Installation",
		description:
			"Delivered bollard installation work to strengthen perimeter protection and improve vehicle access control at a secured site.",
		image: "/assets/recent/work2.jpeg",
	},
	{
		title: "Turnstile Access System",
		description:
			"Installed a turnstile access system for regulated pedestrian movement and cleaner entry-point control.",
		image: "/assets/recent/work3.jpeg",
	},
	{
		title: "Barrier Gate Installation",
		description:
			"Installed an automated barrier system to manage vehicle lanes, improve entry control, and support smoother site traffic flow.",
		image: "/assets/recent/work4.jpeg",
	},
	{
		title: "Smart Building Automation",
		description:
			"Integrated connected controls for access, utilities, and coordinated building automation workflows.",
		image: "/assets/recent/work5.jpeg",
	},
	{
		title: "Turnstile Entry Project",
		description:
			"Delivered another turnstile installation project with practical access control integration for a controlled facility entrance.",
		image: "/assets/recent/work6.jpeg",
	},
	{
		title: "Shutter Door Installation",
		description:
			"Installed a shutter door system for secure opening control, dependable operation, and better protection for the client space.",
		image: "/assets/recent/work7.jpeg",
	},
	{
		title: "Turnstile Control System",
		description:
			"Completed a turnstile control installation to improve pedestrian screening, access regulation, and entry monitoring.",
		image: "/assets/recent/work8.jpeg",
	},
	{
		title: "Home Door Automation",
		description:
			"Installed a home door access solution designed for safer entry, smoother operation, and everyday convenience.",
		image: "/assets/recent/work9.jpeg",
	},
	{
		title: "CCTV Installation",
		description:
			"Delivered CCTV camera installation for improved site surveillance, incident visibility, and continuous monitoring coverage.",
		image: "/assets/recent/work10.jpeg",
	},
];

export default function RecentWorkCarousel({
	title = "Recent Work From Live Installations",
	description = "A quick look at recent Mindview field work across security systems, automation, access devices, and integrated site solutions.",
	variant = "dark",
	ctaHref = "/contact",
	ctaLabel = "Start Your Project",
}) {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeItem = RECENT_WORK[activeIndex];
	const themeClass = variant === "light" ? styles.light : styles.dark;

	useEffect(() => {
		const timer = window.setInterval(() => {
			setActiveIndex((currentIndex) => (currentIndex + 1) % RECENT_WORK.length);
		}, 4500);

		return () => window.clearInterval(timer);
	}, []);

	const orderedItems = useMemo(() => {
		return RECENT_WORK.map((item, index) => ({ ...item, index }));
	}, []);

	function showPrevious() {
		setActiveIndex((currentIndex) =>
			currentIndex === 0 ? RECENT_WORK.length - 1 : currentIndex - 1
		);
	}

	function showNext() {
		setActiveIndex((currentIndex) => (currentIndex + 1) % RECENT_WORK.length);
	}

	return (
		<section className={`${styles.section} ${themeClass}`}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<div>
						<span className={styles.sectionLabel}>Recent Work</span>
						<h2 className={styles.title}>{title}</h2>
						<p className={styles.description}>{description}</p>
					</div>
					<Link href={ctaHref} className={styles.cta}>
						{ctaLabel}
					</Link>
				</div>

				<div className={styles.stage}>
					<div className={styles.mediaPanel}>
						<div className={styles.imageWrap}>
							<Image
								src={activeItem.image}
								alt={activeItem.title}
								className={styles.image}
								width={1600}
								height={1100}
								sizes="(min-width: 1024px) 58vw, 100vw"
								priority={activeIndex === 0}
							/>
						</div>
						<div className={styles.controls}>
							<button
								type="button"
								className={styles.controlButton}
								onClick={showPrevious}
								aria-label="Show previous recent work"
							>
								<span aria-hidden="true">&larr;</span>
							</button>
							<button
								type="button"
								className={styles.controlButton}
								onClick={showNext}
								aria-label="Show next recent work"
							>
								<span aria-hidden="true">&rarr;</span>
							</button>
						</div>
					</div>

					<div className={styles.infoPanel}>
						<p className={styles.counter}>
							{String(activeIndex + 1).padStart(2, "0")}
							<span className={styles.counterDivider}>/</span>
							{String(RECENT_WORK.length).padStart(2, "0")}
						</p>
						<h3 className={styles.cardTitle}>{activeItem.title}</h3>
						<p className={styles.cardDescription}>{activeItem.description}</p>
						<div className={styles.dotRow} aria-label="Recent work slide selectors">
							{RECENT_WORK.map((item, index) => (
								<button
									key={item.image}
									type="button"
									className={`${styles.dot} ${
										index === activeIndex ? styles.dotActive : ""
									}`}
									onClick={() => setActiveIndex(index)}
									aria-label={`Show ${item.title}`}
									aria-pressed={index === activeIndex}
								/>
							))}
						</div>
						<div className={styles.thumbnailGrid}>
							{orderedItems.map((item) => (
								<button
									key={item.image}
									type="button"
									className={`${styles.thumbnailButton} ${
										item.index === activeIndex ? styles.thumbnailActive : ""
									}`}
									onClick={() => setActiveIndex(item.index)}
								>
									<Image
										src={item.image}
										alt={item.title}
										className={styles.thumbnailImage}
										width={200}
										height={140}
										sizes="96px"
									/>
								</button>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
