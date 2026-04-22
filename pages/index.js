import Head from "next/head";
import Hero from "@/components/home/Hero/Hero";
import WhatWeDo from "@/components/home/WhatWeDo/WhatWeDo";
import Partners from "@/components/home/Partners/Partners";
import Projects from "@/components/home/Projects/Projects";
import ExpertsBanner from "@/components/home/ExpertsBanner/ExpertsBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";
import RecentWorkCarousel from "@/components/shared/RecentWorkCarousel/RecentWorkCarousel";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mindview — From Mindview To Solutions</title>
				<meta
					name="description"
					content="Mindview delivers integrated security, automation, access control, screening, energy, and elevator solutions for homes, businesses, hotels, and industrial facilities."
				/>
			</Head>

			<Hero />
			<WhatWeDo />
			<Projects />
			<RecentWorkCarousel />
			<ExpertsBanner />
			<WhyChooseUs />
			<AboutTestimonials />
			<Partners />
		</>
	);
}
