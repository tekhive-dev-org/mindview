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
					content="Mindview is a professional security, safety, and automation technology company. We supply, install, program, and integrate all kinds of access devices — CCTV, turnstiles, boom barriers, access control, hotel card locks, car trackers, metal detectors, luggage scanners, bollards, road blockers, and more."
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