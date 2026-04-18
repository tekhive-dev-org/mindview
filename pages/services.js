import Head from "next/head";
import AllServicesHero from "@/components/allServices/AllServicesHero/AllServicesHero";
import AllServicesCatalog from "@/components/allServices/AllServicesCatalog/AllServicesCatalog";
import ServicesProcess from "@/components/services/ServicesProcess/ServicesProcess";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Services() {
	return (
		<>
			<Head>
				<title>All Services — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Explore all Mindview services across engineering, automation, security systems, vertical transport, energy solutions, and integration support."
				/>
			</Head>

			<AllServicesHero />
			<AllServicesCatalog />
			<ServicesProcess />
			<AboutTestimonials />
		</>
	);
}
