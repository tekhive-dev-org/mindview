import Image from "next/image";
import Link from "next/link";
import styles from "./AboutMission.module.css";

const FEATURE_IMAGE = {
	src: "/assets/about/mission.jpeg",
	alt: "Industrial systems and engineering environment",
};

export default function AboutMission() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<span className={styles.pill}>Who we are</span>
					<h2 className={styles.title}>Built Around Delivery Quality And Site Reality</h2>
					<p className={styles.subtitle}>
						Mindview works as a delivery partner for clients that need more than
						generic recommendations. We plan around operating conditions,
						installation quality, maintainability, and how each system will
						perform after handover.
					</p>
				</div>

				<div className={styles.row}>
					<div className={styles.media}>
						<div className={styles.imageWrap}>
							<Image
								src={FEATURE_IMAGE.src}
								alt={FEATURE_IMAGE.alt}
								className={styles.image}
								width={1200}
								height={900}
								sizes="(min-width: 1024px) 50vw, 100vw"
							/>
						</div>
					</div>

					<div className={styles.content}>
						<h3 className={styles.cardTitle}>How Mindview Approaches Every Project</h3>
						<p className={styles.cardText}>
							Our team combines engineering support, coordinated execution, and
							cross-system thinking to deliver technical solutions that fit the
							client&apos;s environment instead of forcing a one-size-fits-all setup.
						</p>
						<ul className={styles.list}>
							<li className={styles.listItem}>Security, automation, energy, and access systems planned around actual operational needs</li>
							<li className={styles.listItem}>Installations delivered with attention to safety, reliability, and maintainability</li>
							<li className={styles.listItem}>Support that extends beyond commissioning into optimization and long-term use</li>
						</ul>
						<Link href="/services" className={styles.linkButton}>
							Explore Services
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
