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
				<title>Automation Solutions — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Smart automation solutions for homes and businesses — home automation, industrial automation, gate and door systems, and more."
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
