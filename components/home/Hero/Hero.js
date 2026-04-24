import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const SLIDES = [
	{
		image: "/assets/images/security1.webp",
		alt: "Security bollards protecting a facility access point",
	},
	{
		image: "/assets/images/automation.webp",
		alt: "Smart automation installation at a commercial facility",
	},
	{
		image: "/assets/images/engineering.png",
		alt: "Engineering team at work on a live facility",
	},
	{
		image: "/assets/images/elevator2.webp",
		alt: "Modern passenger elevator vertical transport system",
	},
	{
		image: "/assets/images/cctv.jpg",
		alt: "CCTV surveillance camera installation",
	},
	{
		image: "/assets/images/solar.webp",
		alt: "Solar energy system installation on a commercial property",
	},
];

export default function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((i) => (i + 1) % SLIDES.length);
		}, 5500);
		return () => clearInterval(timer);
	}, []);

	return (
		<section className={styles.hero}>
			{/* ── Background slideshow ── */}
			<div className={styles.slidesContainer} aria-hidden="true">
				{SLIDES.map((slide, index) => (
					<div
						key={slide.image}
						className={`${styles.slide} ${index === activeIndex ? styles.slideActive : ""}`}
					>
						<Image
							src={slide.image}
							alt={slide.alt}
							fill
							className={styles.slideImage}
							sizes="100vw"
							priority={index === 0}
						/>
					</div>
				))}
				<div className={styles.overlay} />
			</div>

			{/* ── Content overlay ── */}
			<div className={styles.heroInner}>
				<div className={styles.heroContent}>
					<span className={styles.heroBadge}>
						Smart Infrastructure And Technical Solutions
					</span>
					<h1 className={styles.heroTitle}>
						Built For Smarter
						<br />
						<span className={styles.heroHighlight}>
							Systems And Safer Operations
						</span>
					</h1>
					<p className={styles.heroDesc}>
					Mindview Automation delivers security systems, automation, access control sales and installation, engineering support,
					energy solutions, and vertical transport services for homes,
					commercial facilities, and industrial environments. We design,
					install, program, and integrate dependable systems that improve safety,
						efficiency, uptime, and day-to-day operational control.
					</p>
					<div className={styles.heroCtas}>
						<Link href="/contact" className={styles.ctaPrimary}>
							Get a Quote
						</Link>
						<a
							href="https://wa.me/2349130410677"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.ctaSecondary}
						>
							Whatsapp Us
						</a>
					</div>

					{/* <div className={styles.heroStats}>
						<div className={styles.heroStatsBadge}>
							<span className={styles.statsNumber}>50+</span>
							<span className={styles.statsLabel}>
								Satisfied Clients &amp; Companies
							</span>
						</div>
					</div> */}
				</div>

				{/* ── Slide dot indicators ── */}
				<div className={styles.dotsRow} role="tablist" aria-label="Hero slides">
					{SLIDES.map((slide, index) => (
						<button
							key={slide.image}
							type="button"
							role="tab"
							className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ""}`}
							onClick={() => setActiveIndex(index)}
							aria-label={`Go to slide ${index + 1}`}
							aria-selected={index === activeIndex}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
