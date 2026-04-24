import Head from "next/head";
import AllServicesHero from "@/components/allServices/AllServicesHero/AllServicesHero";
import AllServicesCatalog from "@/components/allServices/AllServicesCatalog/AllServicesCatalog";
import ServicesProcess from "@/components/services/ServicesProcess/ServicesProcess";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";
import RecentWorkCarousel from "@/components/shared/RecentWorkCarousel/RecentWorkCarousel";

export default function Services() {
	return (
		<>
			<Head>
				<title>All Services — Mindview Automation</title>
				<meta
					name="description"
					content="Explore all Mindview Automation services across engineering, automation, security systems, vertical transport, energy solutions, and integration support."
				/>
			</Head>

			<AllServicesHero />
			<AllServicesCatalog />
			<RecentWorkCarousel
				variant="light"
				title="Recent Work Across Our Service Lines"
				description="These recent project snapshots show how Mindview Automation delivers security systems, automation, access devices, and integrated engineering support across different client environments."
				ctaLabel="Request Similar Work"
			/>
			<ServicesProcess />
			<AboutTestimonials />
		</>
	);
}
