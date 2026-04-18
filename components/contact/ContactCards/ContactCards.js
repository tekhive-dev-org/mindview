import styles from "./ContactCards.module.css";

const CARDS = [
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardSvg}>
				<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
				<path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.12 1.522 5.857L.06 23.489a.5.5 0 00.611.611l5.632-1.462A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.38-1.573.5.5 0 00-.39-.063l-3.787.983.983-3.787a.5.5 0 00-.063-.39A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
			</svg>
		),
		title: "Chat to support",
		desc: "We're here to help.",
		action: "Chat to support",
		href: "https://wa.me/2349130410677",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardSvg}>
				<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
			</svg>
		),
		title: "Visit us",
		desc: "12 Brown Lane, off Kadiri Street, Fadeyi, Lagos.",
		action: "Get directions",
		href: "https://maps.google.com/?q=12+Brown+Lane+off+Kadiri+Street+Fadeyi+Lagos",
	},
	{
		icon: (
			<svg viewBox="0 0 24 24" fill="currentColor" className={styles.cardSvg}>
				<path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
			</svg>
		),
		title: "Call us",
		desc: "Mon-Fri from 8am to 5pm.",
		action: "Call our team",
		href: "tel:+2347018254622",
	},
];

export default function ContactCards() {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.header}>
					<h2 className={styles.title}>We&apos;d love to hear from you</h2>
					<p className={styles.subtitle}>Chat to our friendly team</p>
				</div>
				<div className={styles.cards}>
					{CARDS.map((card) => (
						<div key={card.title} className={styles.card}>
							<span className={styles.iconWrap}>{card.icon}</span>
							<h3 className={styles.cardTitle}>{card.title}</h3>
							<p className={styles.cardDesc}>{card.desc}</p>
							<a href={card.href} className={styles.cardAction}>
								{card.action}
							</a>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
