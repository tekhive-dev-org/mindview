import Head from "next/head";
import Hero from "@/components/home/Hero/Hero";
import WhatWeDo from "@/components/home/WhatWeDo/WhatWeDo";
import Partners from "@/components/home/Partners/Partners";
import Projects from "@/components/home/Projects/Projects";
import ExpertsBanner from "@/components/home/ExpertsBanner/ExpertsBanner";
import WhyChooseUs from "@/components/home/WhyChooseUs/WhyChooseUs";
import AboutTestimonials from "@/components/about/AboutTestimonials/AboutTestimonials";

export default function Home() {
	return (
		<>
			<Head>
				<title>Mindview — From Mindview To Solutions</title>
				<meta
					name="description"
					content="Mindview digital solutions — where innovation meets opportunity. We bridge the gap."
				/>
			</Head>

			<Hero />
			<WhatWeDo />
			<Projects />
			<ExpertsBanner />
			<WhyChooseUs />
			<AboutTestimonials />
			<Partners />
		</>
	);
}
