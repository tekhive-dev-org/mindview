import Head from "next/head";
import Link from "next/link";
import styles from "./404.module.css";

const QUICK_LINKS = [
	{ href: "/", label: "Home" },
	{ href: "/services", label: "All Services" },
	{ href: "/about", label: "About Mindview Automation" },
	{ href: "/contact", label: "Request a Quote" },
];

export default function Custom404() {
	return (
		<>
			<Head>
				<title>Page Not Found — Mindview Automation</title>
				<meta
					name="description"
					content="The page you requested could not be found. Return to Mindview Automation services, home, or contact the team for help."
				/>
			</Head>

			<section className={styles.pageShell}>
				<div className={styles.container}>
					<p className={styles.code}>404</p>
					<h1 className={styles.title}>Page not found</h1>
					<p className={styles.description}>
						The page you are looking for does not exist, may have been moved, or
						the link may be incorrect.
					</p>

					<div className={styles.actions}>
						<Link href="/" className={styles.primaryAction}>
							Go to Home
						</Link>
						<Link href="/services" className={styles.secondaryAction}>
							Browse Services
						</Link>
					</div>

					<div className={styles.quickLinksWrap}>
						<p className={styles.quickLinksTitle}>Useful links</p>
						<div className={styles.quickLinks}>
							{QUICK_LINKS.map((item) => (
								<Link key={item.href} href={item.href} className={styles.quickLink}>
									{item.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}