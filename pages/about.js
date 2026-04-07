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
				<title>About — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Learn about Mindview Digital Solutions — bridging the gap between vision and solution."
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
