import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactCards from "@/components/contact/ContactCards/ContactCards";
import ContactForm from "@/components/contact/ContactForm/ContactForm";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Request a Quote — Mindview Automation</title>
				<meta
					name="description"
					content="Request a project quote from Mindview Automation for security, automation, engineering, energy, and vertical transport solutions."
				/>
			</Head>

			<ContactHero />
			<ContactCards />
			<ContactForm />
		</>
	);
}
