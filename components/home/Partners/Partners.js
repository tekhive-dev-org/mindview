import Image from "next/image";
import styles from "./Partners.module.css";

const PARTNERS = [
	{ name: "coinbase", icon: "/assets/icons/coinbase.png" },
	{ name: "Spotify", icon: "/assets/icons/spotify.png" },
	{ name: "slack", icon: "/assets/icons/slack.png" },
	{ name: "Dropbox", icon: "/assets/icons/dropbox.png" },
	{ name: "webflow", icon: "/assets/icons/webflow.png" },
	{ name: "zoom", icon: "/assets/icons/zoom.png" },
];

export default function Partners({ label }) {
	return (
		<section className={styles.partners}>
			<p className={styles.partnersLabel}>
				{label || "Companies We Partner With"}
			</p>
			<div className={styles.marqueeViewport}>
				<div className={styles.partnersTrack}>
					{PARTNERS.map((partner) => (
						<div key={partner.name} className={styles.partnerCard}>
							<Image
								src={partner.icon}
								alt={partner.name}
								width={120}
								height={36}
								className={styles.partnerIcon}
							/>
						</div>
					))}
					{PARTNERS.map((partner) => (
						<div
							key={`${partner.name}-duplicate`}
							className={styles.partnerCard}
							aria-hidden="true"
						>
							<Image
								src={partner.icon}
								alt=""
								width={120}
								height={36}
								className={styles.partnerIcon}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
