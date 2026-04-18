import Head from "next/head";
import SecurityHero from "@/components/security/SecurityHero/SecurityHero";
import SecurityDetails from "@/components/security/SecurityDetails/SecurityDetails";
import SecurityProjects from "@/components/security/SecurityProjects/SecurityProjects";
import SecurityStats from "@/components/security/SecurityStats/SecurityStats";
import SecurityFeatures from "@/components/security/SecurityFeatures/SecurityFeatures";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Security() {
	return (
		<>
			<Head>
				<title>Security Systems — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Explore Mindview security services across CCTV, surveillance, luggage scanners, access control, bollards, and smart security installations for commercial and industrial facilities."
				/>
			</Head>

			<SecurityHero />
			<SecurityDetails />
			<SecurityProjects />
			<SecurityStats />
			<SecurityFeatures />
			<AboutTestimonials />
		</>
	);
}