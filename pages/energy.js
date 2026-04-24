import Head from "next/head";
import EnergyHero from "@/components/energy/EnergyHero/EnergyHero";
import EnergySolutionsBanner from "@/components/energy/EnergySolutionsBanner/EnergySolutionsBanner";
import EnergyItems from "@/components/energy/EnergyItems/EnergyItems";
import EnergyStats from "@/components/energy/EnergyStats/EnergyStats";
import EnergyFeatures from "@/components/energy/EnergyFeatures/EnergyFeatures";
import EnergyProcess from "@/components/energy/EnergyProcess/EnergyProcess";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Energy() {
	return (
		<>
			<Head>
				<title>Energy Solutions — Mindview Automation</title>
				<meta
					name="description"
					content="Explore Mindview Automation energy solutions across solar power systems, inverter and battery backup, hybrid energy infrastructure, and energy reliability services for homes and facilities."
				/>
			</Head>

			<EnergyHero />
			<EnergySolutionsBanner />
			<EnergyItems />
			<EnergyStats />
			<EnergyFeatures />
			<EnergyProcess />
			<AboutTestimonials />
		</>
	);
}