import Head from "next/head";
import AutomationHero from "@/components/automation/AutomationHero/AutomationHero";
import AutomationBooking from "@/components/automation/AutomationBooking/AutomationBooking";
import AutomationAbout from "@/components/automation/AutomationAbout/AutomationAbout";
import AutomationServicesList from "@/components/automation/AutomationServicesList/AutomationServicesList";
import AutomationFeatures from "@/components/automation/AutomationFeatures/AutomationFeatures";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Automation() {
	return (
		<>
			<Head>
				<title>Automation Solutions — Mindview Automation</title>
				<meta
					name="description"
					content="Mindview automation solutions for homes, offices, and industrial sites — automatic gates, sliding doors, swing gates, garage doors, shutter doors, revolving doors, smart home systems, and more."
				/>
			</Head>

			<AutomationHero />
			<AutomationBooking />
			<AutomationServicesList />
			<AutomationAbout />
			<AutomationFeatures />
			<AboutTestimonials />
		</>
	);
}
