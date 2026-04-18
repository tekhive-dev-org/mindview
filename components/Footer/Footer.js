import { useState } from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const FAQS = [
	{
		question: "What industries do you serve?",
		answer: "We serve a wide range of industries including oil & gas, real estate, manufacturing, logistics, hospitality, and residential sectors — delivering tailored engineering, automation, and security solutions.",
	},
	{
		question: "Do you handle both small & large projects?",
		answer: "Yes. From single residential installations to large-scale industrial projects, we have the expertise and resources to deliver at any scale.",
	},
	{
		question: "Do you provide customised solutions?",
		answer: "Absolutely. Every project begins with a thorough consultation so we can design and deliver solutions that are perfectly tailored to your specific requirements and budget.",
	},
	{
		question: "Do you offer end to end services?",
		answer: "Yes — we handle everything from initial consultation and design through to installation, commissioning, and ongoing maintenance and support.",
	},
];

const USEFUL_LINKS = [
	{ label: "About Us", href: "/about" },
	{ label: "Services", href: "/services" },
	{ label: "Contact Us", href: "/contact" },
	{ label: "Blog", href: "/blog" },
];

const SERVICES = [
	{ label: "Engineering Services", href: "/engineering" },
	{ label: "Automation Solutions", href: "/automation" },
	{ label: "Security Systems", href: "/security" },
	{ label: "Vertical Transport & Access", href: "/vertical-transport" },
	{ label: "Energy Solutions", href: "/energy" },
	// { label: "Consultancy & Integration", href: "/services#consultancy-integration" },
];

const CONTACT_INFO = [
	{
		icon: (
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
				/>
			</svg>
		),
		text: "+234 701 825 4622",
		href: "tel:+2347018254622",
	},
	// {
	// 	icon: (
	// 		<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
	// 			<path
	// 				strokeLinecap="round"
	// 				strokeLinejoin="round"
	// 				strokeWidth={1.5}
	// 				d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
	// 			/>
	// 		</svg>
	// 	),
	// 	text: "contact@mindview.com",
	// 	href: "mailto:contact@mindview.com",
	// },
	{
		icon: (
			<svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
				/>
			</svg>
		),
		text: "12 Brown Lane, off Kadiri St, Fadeyi, Lagos",
		href: "https://maps.google.com/?q=12+Brown+Lane+off+Kadiri+Street+Fadeyi+Lagos",
	},
];

const SOCIALS = [
	{
		label: "LinkedIn",
		href: "https://linkedin.com",
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24">
				<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
			</svg>
		),
	},
	{
		label: "Instagram",
		href: "https://instagram.com",
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24">
				<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
			</svg>
		),
	},
	{
		label: "Twitter",
		href: "https://twitter.com",
		icon: (
			<svg fill="currentColor" viewBox="0 0 24 24">
				<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
			</svg>
		),
	},
];

export default function Footer() {
	const [openFaq, setOpenFaq] = useState(null);

	const toggleFaq = (index) => {
		setOpenFaq(openFaq === index ? null : index);
	};

	return (
		<footer id="contact" className={styles.footer}>
			{/* FAQ Section */}
			<div className={styles.faqSection}>
				<div className={styles.faqInner}>
					<div className={styles.faqHeader}>
						<h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
					</div>
					<div className={styles.faqList}>
						{FAQS.map((faq, i) => (
							<div
								key={i}
								className={`${styles.faqItem} ${openFaq === i ? styles.faqItemOpen : ""}`}
							>
								<button
									className={styles.faqQuestion}
									onClick={() => toggleFaq(i)}
									aria-expanded={openFaq === i}
								>
									<span>{faq.question}</span>
									<span className={styles.faqIcon}>
										{openFaq === i ? "−" : "+"}
									</span>
								</button>
								{openFaq === i && (
									<div className={styles.faqAnswer}>
										<p>{faq.answer}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>

			{/* CTA Banner */}
			<div className={styles.ctaBanner}>
				<div className={styles.ctaInner}>
					<div className={styles.ctaContent}>
						<h3 className={styles.ctaTitle}>
							Ready to transform your business?
						</h3>
						<p className={styles.ctaDesc}>
							Let&apos;s build something extraordinary together.
						</p>
					</div>
					<a href="/contact" className={styles.ctaButton}>
						Get Started
						<svg
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							className={styles.ctaArrow}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</a>
				</div>
			</div>

			{/* Main Footer */}
			<div className={styles.footerMain}>
				<div className={styles.footerInner}>
					<div className={styles.topGrid}>
						{/* Brand Column */}
						<div className={styles.brandCol}>
							<div className={styles.footerLogo}>
								<Image
									src="/mindviewLogo2.png"
									alt="Mindview"
									width={48}
									height={48}
								/>
								<div className={styles.footerLogoTextGroup}>
									<span className={styles.footerLogoText}>Mindview</span>
									<span className={styles.footerLogoSubtext}>
										A Journey of automation
										<br />
										and technology
									</span>
								</div>
							</div>
							<p className={styles.description}>
								Empowering individuals and organizations through tailored
								technology solutions, expert-led training, and transformative
								mentorship.
							</p>
							<div className={styles.socials}>
								{SOCIALS.map((s) => (
									<a
										key={s.label}
										href={s.href}
										target="_blank"
										rel="noopener noreferrer"
										className={styles.socialIcon}
										aria-label={s.label}
									>
										{s.icon}
									</a>
								))}
							</div>
						</div>

						{/* Quick Links */}
						<div className={styles.linkCol}>
							<h4 className={styles.columnHeading}>Quick Links</h4>
							<div className={styles.linkList}>
								{USEFUL_LINKS.map((link) => (
									<a
										key={link.label}
										href={link.href}
										className={styles.footerLink}
									>
										<span className={styles.linkArrow}>→</span>
										{link.label}
									</a>
								))}
							</div>
						</div>

						{/* Services */}
						<div className={styles.linkCol}>
							<h4 className={styles.columnHeading}>Services</h4>
							<div className={styles.linkList}>
								{SERVICES.map((link) => (
									<a
										key={link.label}
										href={link.href}
										className={styles.footerLink}
									>
										<span className={styles.linkArrow}>→</span>
										{link.label}
									</a>
								))}
							</div>
						</div>

						{/* Contact */}
						<div className={styles.linkCol}>
							<h4 className={styles.columnHeading}>Contact Us</h4>
							<div className={styles.contactList}>
								{CONTACT_INFO.map((item) => (
									<a
										key={item.text}
										href={item.href}
										className={styles.contactItem}
									>
										<span className={styles.contactIconWrap}>
											{item.icon}
										</span>
										<span className={styles.contactText}>{item.text}</span>
									</a>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom bar */}
			<div className={styles.divider} />
			<div className={styles.bottomBar}>
				<p className={styles.copyright}>
					&copy; {new Date().getFullYear()} Mindview. All Rights Reserved.
				</p>
				<div className={styles.legalLinks}>
					<a href="#" className={styles.legalLink}>
						Terms &amp; Conditions
					</a>
					<span className={styles.legalSeparator}>|</span>
					<a href="#" className={styles.legalLink}>
						Privacy Policy
					</a>
				</div>
			</div>
		</footer>
	);
}
