import { useState, useRef, useCallback, useEffect } from "react";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
	{
		text: "I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
		author: "Child British, Data Analytics",
	},
	{
		text: "I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
		author: "Child British, Data Analytics",
	},
	{
		text: "I have an understanding that, even if the work is not perfect, it's a work in progress. And the reason why I'm on Skillshare is to develop a skill. I feel that it's a safe space. Wonderful UX learning platform! The courses are very well structured. Information is well explained and condense, you don't need to spend a lot of time trying to understand a topic. Good job!",
		author: "Child British, Data Analytics",
	},
];

export default function Testimonials() {
	const [activeDot, setActiveDot] = useState(0);
	const trackRef = useRef(null);
	const scrollTimeoutRef = useRef(null);

	const scrollToCard = useCallback((index) => {
		const track = trackRef.current;
		if (!track || !track.children[index]) return;

		const card = track.children[index];
		const trackRect = track.getBoundingClientRect();
		const cardRect = card.getBoundingClientRect();

		const scrollLeft =
			card.offsetLeft - track.offsetLeft - (trackRect.width / 2) + (cardRect.width / 2);

		track.scrollTo({ left: scrollLeft, behavior: "smooth" });
		setActiveDot(index);
	}, []);

	const handleScroll = useCallback(() => {
		if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

		scrollTimeoutRef.current = setTimeout(() => {
			const track = trackRef.current;
			if (!track) return;

			const trackCenter = track.scrollLeft + track.offsetWidth / 2;
			let closestIndex = 0;
			let closestDistance = Infinity;

			Array.from(track.children).forEach((card, i) => {
				const cardCenter = card.offsetLeft - track.offsetLeft + card.offsetWidth / 2;
				const distance = Math.abs(trackCenter - cardCenter);
				if (distance < closestDistance) {
					closestDistance = distance;
					closestIndex = i;
				}
			});

			setActiveDot(closestIndex);
		}, 80);
	}, []);

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;
		track.addEventListener("scroll", handleScroll, { passive: true });
		return () => track.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);

	return (
		<section className={styles.testimonials}>
			<h2 className={styles.testimonialsTitle}>
				Client-Based Testimonials
			</h2>
			<p className={styles.testimonialsSubtitle}>
				Discover what our clients have to say about us
			</p>

			<div className={styles.testimonialsTrack} ref={trackRef}>
				{TESTIMONIALS.map((t, i) => (
					<div key={i} className={styles.testimonialCard}>
						<p className={styles.testimonialText}>{t.text}</p>
						<div>
							<p className={styles.testimonialAuthor}>{t.author}</p>
						</div>
					</div>
				))}
			</div>

			<div className={styles.dots}>
				{TESTIMONIALS.map((_, i) => (
					<button
						key={i}
						className={`${styles.dot} ${
							i === activeDot ? styles.dotActive : ""
						}`}
						onClick={() => scrollToCard(i)}
						aria-label={`Go to testimonial ${i + 1}`}
					/>
				))}
			</div>
		</section>
	);
}
