import Head from "next/head";
import ContactHero from "@/components/contact/ContactHero/ContactHero";
import ContactCards from "@/components/contact/ContactCards/ContactCards";
import ContactForm from "@/components/contact/ContactForm/ContactForm";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Contact Us — Mindview Digital Solutions</title>
				<meta
					name="description"
					content="Get in touch with Mindview — request a quote, chat with our team, or visit our office."
				/>
			</Head>

			<ContactHero />
			<ContactCards />
			<ContactForm />
		</>
	);
}
