import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
	{ label: "Home", href: "/" },
	{ label: "About", href: "/about" },
	{
		label: "Services",
		href: "/services",
		children: [
			{label: "All Services", href: "/services"},
			{ label: "Automation Solutions", href: "/automation" },
			{ label: "Energy Solutions", href: "/energy" },
			{ label: "Engineering Services", href: "/engineering" },
			{ label: "Security Systems", href: "/security" },
			{ label: "Vertical Transport & Access", href: "/vertical-transport" },
			// { label: "Consultancy & Integration", href: "/services#consultancy-integration" },
		],
	},
	{ label: "Blog", href: "/blog" },
	// { label: "Contact Us", href: "/contact" },
	{ label: "Testimonials", href: "/#testimonials" },
];

export default function Navbar() {
	const router = useRouter();
	const [menuOpen, setMenuOpen] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
	const dropdownRef = useRef(null);

	const isActive = (href) =>
		href === "/" ? router.pathname === "/" : router.pathname.startsWith(href);

	// Close dropdown on outside click
	useEffect(() => {
		function handleClickOutside(e) {
			if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
				setDropdownOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		document.body.style.overflow = menuOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	return (
		<header className={styles.header}>
			<div className={styles.headerInner}>
				<a href="/" className={styles.logo}>
					<Image
						src="/mindviewLogo0.png"
						alt="Mindview"
						width={40}
						height={40}
						priority
					/>
					<div className={styles.logoTextGroup}>
						<span className={styles.logoText}>Mindview</span>
						<span className={styles.logoSubtext}>A Journey of automation<br />and technology</span>
					</div>
				</a>

				{/* Desktop Navigation */}
				<nav className={styles.desktopNav}>
					{NAV_LINKS.map((link) =>
						link.children ? (
							<div
								key={link.label}
								className={styles.dropdownWrapper}
								ref={dropdownRef}
							>
								<button
									className={styles.dropdownTrigger}
									onClick={() => setDropdownOpen(!dropdownOpen)}
									aria-expanded={dropdownOpen}
									aria-haspopup="true"
								>
									{link.label}
									<svg
										className={`${styles.chevron} ${
											dropdownOpen ? styles.chevronOpen : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>

								{dropdownOpen && (
									<div className={styles.dropdownMenu} role="menu">
										{link.children.map((child) => (
											<a
												key={child.label}
												href={child.href}
												className={styles.dropdownItem}
												role="menuitem"
												onClick={() => setDropdownOpen(false)}
											>
												{child.label}
											</a>
										))}
									</div>
								)}
							</div>
						) : (
							<Link
								key={link.label}
								href={link.href}
								className={`${styles.navLink} ${
									isActive(link.href) ? styles.navLinkActive : ""
								}`}
							>
								{link.label}
							</Link>
						)
					)}
				</nav>

				{/* CTA Button — desktop */}
				<div className="hidden laptop:block">
					<Link href="/contact" className={styles.ctaButton}>Get Quote</Link>
				</div>

				{/* Mobile Hamburger */}
				<button
					className={styles.hamburger}
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					aria-expanded={menuOpen}
				>
					{menuOpen ? (
						<svg
							className={styles.hamburgerIcon}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							className={styles.hamburgerIcon}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</button>
			</div>

			{/* Divider line */}
			<div className={styles.divider} />

			{/* Mobile overlay */}
			{menuOpen && (
				<div
					className={styles.mobileOverlay}
					onClick={() => setMenuOpen(false)}
				/>
			)}

			{/* Mobile Menu */}
			{menuOpen && (
				<nav className={styles.mobileMenu}>
					{NAV_LINKS.map((link) =>
						link.children ? (
							<div key={link.label} className={styles.mobileServicesSection}>
								<button
									className={styles.mobileServicesToggle}
									onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
								>
									<span>{link.label}</span>
									<svg
										className={`${styles.chevron} ${
											mobileServicesOpen ? styles.chevronOpen : ""
										}`}
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M19 9l-7 7-7-7"
										/>
									</svg>
								</button>
								{mobileServicesOpen &&
									link.children.map((child) => (
										<a
											key={child.label}
											href={child.href}
											className={styles.mobileSubLink}
											onClick={() => setMenuOpen(false)}
										>
											{child.label}
										</a>
									))}
							</div>
						) : (
							<Link
								key={link.label}
								href={link.href}
								className={`${styles.mobileLink} ${
									isActive(link.href) ? styles.mobileLinkActive : ""
								}`}
								onClick={() => setMenuOpen(false)}
							>
								{link.label}
							</Link>
						)
					)}
					<button
						className={styles.mobileCta}
						onClick={() => setMenuOpen(false)}
					>
						Get Quote
					</button>
				</nav>
			)}
		</header>
	);
}
