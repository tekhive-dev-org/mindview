import Head from "next/head";
import ServicesHero from "@/components/services/ServicesHero/ServicesHero";
import ServicesItems from "@/components/services/ServicesItems/ServicesItems";
import ServicesEngineeringBanner from "@/components/services/ServicesEngineeringBanner/ServicesEngineeringBanner";
import ServicesStats from "@/components/services/ServicesStats/ServicesStats";
import ServicesFeatures from "@/components/services/ServicesFeatures/ServicesFeatures";
import ServicesProcess from "@/components/services/ServicesProcess/ServicesProcess";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Engineering() {
	return (
		<>
			<Head>
				<title>Engineering Services — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Explore Mindview engineering services across mechanical, electrical, instrumentation, and operations support for industrial and commercial environments."
				/>
			</Head>

			<ServicesHero />
			<ServicesEngineeringBanner />
			<ServicesItems />
			<ServicesStats />
			<ServicesFeatures />
			<ServicesProcess />
			<AboutTestimonials />
		</>
	);
}