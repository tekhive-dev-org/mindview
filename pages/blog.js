import Head from "next/head";
import BlogJournal, { BLOG_POSTS } from "@/components/blog/BlogJournal/BlogJournal";

const BLOG_URL = "https://mindview.com/blog";
const BLOG_TITLE = "Mindview Journal | Stories, Notes and Updates";
const BLOG_DESCRIPTION =
	"Read the Mindview Journal for clean, short updates and insights from across Mindview projects and services.";
const SOCIAL_IMAGE = "https://mindview.com/assets/images/mindviewHero.webp";

export default function BlogPage() {
	const structuredData = {
		"@context": "https://schema.org",
		"@type": "Blog",
		name: "Mindview Journal",
		description: BLOG_DESCRIPTION,
		url: BLOG_URL,
		publisher: {
			"@type": "Organization",
			name: "Mindview",
			url: "https://mindview.com",
			logo: {
				"@type": "ImageObject",
				url: "https://mindview.com/mindviewLogo0.png",
			},
		},
		blogPost: BLOG_POSTS.map((post) => ({
			"@type": "BlogPosting",
			headline: post.title,
			description: post.excerpt,
			datePublished: post.datePublished,
			author: {
				"@type": "Person",
				name: post.author,
			},
			image: [`https://mindview.com${post.image}`],
			keywords: [post.category, "Mindview", "technology insights"],
			mainEntityOfPage: BLOG_URL,
		})),
	};

	return (
		<>
			<Head>
				<title>{BLOG_TITLE}</title>
				<meta name="description" content={BLOG_DESCRIPTION} />
				<meta name="robots" content="index,follow,max-image-preview:large" />
				<link rel="canonical" href={BLOG_URL} />
				<meta name="keywords" content="Mindview blog, security systems blog, automation insights, engineering services articles, energy solutions journal, vertical transport updates" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content={BLOG_TITLE} />
				<meta property="og:description" content={BLOG_DESCRIPTION} />
				<meta property="og:url" content={BLOG_URL} />
				<meta property="og:site_name" content="Mindview" />
				<meta property="og:image" content={SOCIAL_IMAGE} />
				<meta property="og:image:alt" content="Mindview journal overview with technology project imagery" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content={BLOG_TITLE} />
				<meta name="twitter:description" content={BLOG_DESCRIPTION} />
				<meta name="twitter:image" content={SOCIAL_IMAGE} />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
				/>
			</Head>

			<BlogJournal />
		</>
	);
}