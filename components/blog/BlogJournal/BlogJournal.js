import Image from "next/image";
import styles from "./BlogJournal.module.css";

export const BLOG_POSTS = [
	{
		slug: "designing-smarter-security-rollouts",
		title: "Designing Smarter Security Rollouts for Growing Facilities",
		excerpt:
			"Short security projects fail when planning stops at hardware. This note breaks down how Mindview Automation scopes access control, camera coverage, power backup, and user training together so deployments stay reliable after handover.",
		category: "Security Systems",
		author: "Mindview Automation Editorial",
		datePublished: "2026-04-18",
		readTime: "3 min read",
		image: "/assets/images/security.jpg",
		imageAlt: "Security monitoring screens and surveillance equipment",
		featured: true,
	},
	{
		slug: "automation-that-removes-friction",
		title: "Automation That Removes Friction Instead of Adding Complexity",
		excerpt:
			"Good automation should simplify repetitive work, tighten response times, and make control clearer. This short article explains how Mindview Automation prioritizes operator experience, maintenance access, and measurable efficiency gains in every automation brief.",
		category: "Automation Solutions",
		author: "Chidi British",
		datePublished: "2026-04-14",
		readTime: "2 min read",
		image: "/assets/images/automation2.jpg",
		imageAlt: "Industrial automation panel with connected control components",
		featured: true,
	},
	{
		slug: "elevator-modernization-signals",
		title: "Four Signals It Is Time to Modernize an Elevator System",
		excerpt:
			"Frequent callbacks, inconsistent leveling, poor ride quality, and obsolete components usually point to a modernization need. We outline the practical signs teams should track before downtime starts affecting tenants and operations.",
		category: "Vertical Transport",
		author: "Kelvin Esho",
		datePublished: "2026-04-09",
		readTime: "2 min read",
		image: "/assets/images/elevator2.webp",
		imageAlt: "Modern elevator interior with brushed metal surfaces",
		featured: true,
	},
	{
		slug: "backup-power-planning-basics",
		title: "Backup Power Planning Basics for High-Uptime Sites",
		excerpt:
			"Power resilience is not only about adding storage or an inverter. This journal entry covers load profiling, critical circuit mapping, runtime expectations, and maintenance planning so backup systems actually support operations when they are needed.",
		category: "Energy Solutions",
		author: "Mindview Automation Editorial",
		datePublished: "2026-04-05",
		readTime: "3 min read",
		image: "/assets/images/storage.jpg",
		imageAlt: "Battery energy storage units arranged in a technical facility",
	},
	{
		slug: "engineering-scopes-that-age-well",
		title: "Engineering Scopes That Age Well After Installation",
		excerpt:
			"The strongest engineering scopes account for service access, spare parts, future expansion, and documentation from day one. Here is how Mindview Automation frames deliverables so systems remain practical long after project closeout.",
		category: "Engineering Services",
		author: "Kelvin Esho",
		datePublished: "2026-03-29",
		readTime: "2 min read",
		image: "/assets/images/engineering4.jpg",
		imageAlt: "Engineers reviewing technical drawings and machine components",
	},
	{
		slug: "solar-maintenance-checklist",
		title: "A Simple Solar Maintenance Checklist for Better Yield",
		excerpt:
			"Solar systems underperform when cleaning cycles, battery health checks, and connection inspections are ignored. This short checklist helps operators keep renewable systems safer, cleaner, and closer to expected output.",
		category: "Energy Solutions",
		author: "Mindview Automation Editorial",
		datePublished: "2026-03-21",
		readTime: "2 min read",
		image: "/assets/images/solar-maintenance.jpg",
		imageAlt: "Technician performing maintenance on a solar installation",
	},
	{
		slug: "camera-placement-over-camera-count",
		title: "Why Camera Placement Matters More Than Camera Count",
		excerpt:
			"A larger camera count does not guarantee better security coverage. Placement strategy, lighting conditions, retention goals, and monitoring workflows matter more than raw quantity when designing a dependable surveillance system.",
		category: "Security Systems",
		author: "Chidi British",
		datePublished: "2026-03-15",
		readTime: "2 min read",
		image: "/assets/images/surveillance.jpg",
		imageAlt: "Mounted surveillance camera overlooking an outdoor area",
	},
	{
		slug: "maintenance-first-thinking",
		title: "Maintenance-First Thinking Improves Project Handover",
		excerpt:
			"A system is only truly delivered when the client team can maintain it with confidence. This post highlights the role of labels, as-built documentation, testing records, and operator orientation in stronger handovers.",
		category: "Operations",
		author: "Kelvin Esho",
		datePublished: "2026-03-07",
		readTime: "2 min read",
		image: "/assets/images/maintenance.jpg",
		imageAlt: "Maintenance engineer examining industrial equipment",
	},
	{
		slug: "future-ready-control-rooms",
		title: "Building Control Rooms That Stay Future-Ready",
		excerpt:
			"Control rooms need clarity, serviceability, and enough capacity for tomorrow's integrations. We summarize the layout, visibility, power planning, and network considerations that keep command spaces useful over time.",
		category: "Automation Solutions",
		author: "Mindview Automation Editorial",
		datePublished: "2026-02-27",
		readTime: "3 min read",
		image: "/assets/images/control.jpg",
		imageAlt: "Control room desk with equipment and monitoring interfaces",
	},
];

function formatDate(dateValue) {
	return new Intl.DateTimeFormat("en-US", {
		day: "numeric",
		month: "short",
		year: "numeric",
	}).format(new Date(dateValue));
}

export default function BlogJournal() {
	const featuredPosts = BLOG_POSTS.filter((post) => post.featured);
	const spotlightPost = featuredPosts[0];
	const supportingPosts = featuredPosts.slice(1);

	return (
		<div className={styles.pageShell}>
			<section className={styles.hero}>
				<div className={styles.heroGlow} />
				<div className={styles.heroInner}>
					<p className={styles.eyebrow}>Mindview Automation Journal</p>
					<h1 className={styles.title}>
						Inside Mindview Automation: stories, notes, and project insights.
					</h1>
					<p className={styles.intro}>
						A clean collection of short reads from across Mindview Automation's work in
						security, automation, engineering, energy, and transport.
					</p>
				</div>
			</section>

			<section className={styles.section} aria-labelledby="recent-posts-title">
				<div className={styles.sectionHeader}>
					<h2 id="recent-posts-title" className={styles.sectionTitle}>
						Recent posts
					</h2>
				</div>

				<div className={styles.featuredLayout}>
					<article className={styles.spotlightCard} id={spotlightPost.slug}>
						<div className={styles.spotlightMedia}>
							<Image
								src={spotlightPost.image}
								alt={spotlightPost.imageAlt}
								fill
								sizes="(max-width: 1023px) 100vw, 60vw"
								className={styles.cardImage}
							/>
						</div>
						<div className={styles.cardBody}>
							<p className={styles.cardMeta}>
								<span>{spotlightPost.author}</span>
								<span>{formatDate(spotlightPost.datePublished)}</span>
								<span>{spotlightPost.readTime}</span>
							</p>
							<p className={styles.cardCategory}>{spotlightPost.category}</p>
							<h3 className={styles.spotlightTitle}>{spotlightPost.title}</h3>
							<p className={styles.cardExcerpt}>{spotlightPost.excerpt}</p>
						</div>
					</article>

					<div className={styles.supportingStack}>
						{supportingPosts.map((post) => (
							<article key={post.slug} className={styles.supportingCard} id={post.slug}>
								<div className={styles.supportingMedia}>
									<Image
										src={post.image}
										alt={post.imageAlt}
										fill
										sizes="(max-width: 1023px) 100vw, 28vw"
										className={styles.cardImage}
									/>
								</div>
								<div className={styles.supportingBody}>
									<p className={styles.cardMeta}>
										<span>{post.author}</span>
										<span>{formatDate(post.datePublished)}</span>
									</p>
									<h3 className={styles.supportingTitle}>{post.title}</h3>
									<p className={styles.supportingExcerpt}>{post.excerpt}</p>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>

			<section className={styles.section} aria-labelledby="all-posts-title">
				<div className={styles.sectionHeader}>
					<h2 id="all-posts-title" className={styles.sectionTitle}>
						All posts
					</h2>
				</div>

				<div className={styles.postGrid}>
					{BLOG_POSTS.map((post) => (
						<article key={post.slug} className={styles.postCard}>
							<div className={styles.postMedia}>
								<Image
									src={post.image}
									alt={post.imageAlt}
									fill
									sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
									className={styles.cardImage}
								/>
							</div>
							<div className={styles.cardBody}>
								<p className={styles.cardMeta}>
									<span>{post.author}</span>
									<span>{formatDate(post.datePublished)}</span>
								</p>
								<p className={styles.cardCategory}>{post.category}</p>
								<h3 className={styles.postTitle}>{post.title}</h3>
								<p className={styles.cardExcerpt}>{post.excerpt}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</div>
	);
}