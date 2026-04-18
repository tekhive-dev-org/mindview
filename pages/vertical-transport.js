import Head from "next/head";
import VerticalHero from "@/components/verticalTransport/VerticalHero/VerticalHero";
import VerticalSolutionsBanner from "@/components/verticalTransport/VerticalSolutionsBanner/VerticalSolutionsBanner";
import VerticalItems from "@/components/verticalTransport/VerticalItems/VerticalItems";
import VerticalStats from "@/components/verticalTransport/VerticalStats/VerticalStats";
import VerticalFeatures from "@/components/verticalTransport/VerticalFeatures/VerticalFeatures";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function VerticalTransport() {
	return (
		<>
			<Head>
				<title>Vertical Transport & Access — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Explore Mindview vertical transport and access solutions across elevators, escalators, moving walkways, lift modernization, and access infrastructure for commercial and public spaces."
				/>
			</Head>

			<VerticalHero />
			<VerticalSolutionsBanner />
			<VerticalItems />
			<VerticalStats />
			<VerticalFeatures />
			<AboutTestimonials />
		</>
	);
}