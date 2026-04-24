import Head from "next/head";
import AboutHero from "@/components/about/AboutHero/AboutHero";
import AboutMission from "@/components/about/AboutMission/AboutMission";
import AboutVision from "@/components/about/AboutVision/AboutVision";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";
import AboutCTA from "@/components/about/AboutCTA/AboutCTA";

export default function About() {
	return (
		<>
			<Head>
				<title>About — Mindview Automation</title>
				<meta
					name="description"
					content="Learn about Mindview Automation, a technical systems company delivering security, automation, engineering, energy, and vertical transport solutions for homes, facilities, and industrial environments."
				/>
			</Head>

			<AboutHero />
			<AboutMission />
			<AboutVision />
			<AboutTestimonials />
			<AboutCTA />
		</>
	);
}
