import { useState } from "react";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import GroupsRounded from "@mui/icons-material/GroupsRounded";
import styles from "./ContactForm.module.css";

const SERVICE_OPTIONS = [
	"Engineering",
	"Automation",
	"Security Systems",
	"Vertical Transport & Access",
	"Energy Solutions",
	"Consultancy & Integration",
];

const BUDGET_OPTIONS = ["1-4m", "4-10m", "10-25m", "25m+"];

const BENEFITS = [
	{
		icon: <AccessTimeRounded />,
		title: "Fast Response",
		desc: "We respond to all inquiries within 24 hours on business days.",
	},
	{
		icon: <VerifiedRounded />,
		title: "Certified Experts",
		desc: "Our engineers hold industry-recognized certifications and training.",
	},
	{
		icon: <GroupsRounded />,
		title: "Dedicated Support",
		desc: "A project manager is assigned to your account from day one.",
	},
	{
		icon: <CheckCircleRounded />,
		title: "End-to-End Delivery",
		desc: "From consultation to commissioning — we handle everything.",
	},
];

export default function ContactForm() {
	const [form, setForm] = useState({
		fullName: "",
		companyName: "",
		service: "",
		budget: "",
		phone: "",
		description: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.grid}>
					{/* ---- Form Column ---- */}
					<form className={styles.form} onSubmit={handleSubmit}>
						<h2 className={styles.title}>Get Your Quote</h2>
						<p className={styles.subtitle}>
							We try to respond to quotes as quickly as possible.
						</p>

						<div className={styles.row}>
							<div className={styles.field}>
								<label className={styles.label}>Full name</label>
								<input
									type="text"
									name="fullName"
									placeholder="Enter your name"
									value={form.fullName}
									onChange={handleChange}
									className={styles.input}
								/>
							</div>
							<div className={styles.field}>
								<label className={styles.label}>Company name</label>
								<input
									type="text"
									name="companyName"
									placeholder="Enter company name"
									value={form.companyName}
									onChange={handleChange}
									className={styles.input}
								/>
							</div>
						</div>

						<div className={styles.field}>
							<label className={styles.label}>Services Needed</label>
							<select
								name="service"
								value={form.service}
								onChange={handleChange}
								className={styles.select}
							>
								<option value="" disabled>
									Select a service
								</option>
								{SERVICE_OPTIONS.map((s) => (
									<option key={s} value={s}>
										{s}
									</option>
								))}
							</select>
						</div>

						<div className={styles.field}>
							<label className={styles.label}>Budget Range</label>
							<select
								name="budget"
								value={form.budget}
								onChange={handleChange}
								className={styles.select}
							>
								<option value="" disabled>
									Select budget range
								</option>
								{BUDGET_OPTIONS.map((b) => (
									<option key={b} value={b}>
										{b}
									</option>
								))}
							</select>
						</div>

						<div className={styles.field}>
							<label className={styles.label}>Phone number</label>
							<input
								type="tel"
								name="phone"
								placeholder="(555) 000-0000"
								value={form.phone}
								onChange={handleChange}
								className={styles.input}
							/>
						</div>

						<div className={styles.field}>
							<label className={styles.label}>Project Description</label>
							<div className={styles.textareaWrap}>
								<textarea
									name="description"
									placeholder="Leave us a message"
									value={form.description}
									onChange={handleChange}
									className={styles.textarea}
									maxLength={200}
									rows={4}
								/>
								<span className={styles.charCount}>
									{form.description.length}/200
								</span>
							</div>
						</div>

						<button type="submit" className={styles.submitBtn}>
							Send Message
						</button>
					</form>

					{/* ---- Sidebar Column ---- */}
					<aside className={styles.sidebar}>
						<div className={styles.sidebarCard}>
							<h3 className={styles.sidebarTitle}>Why Work With Us</h3>
							<p className={styles.sidebarDesc}>
								We combine deep technical expertise with a client-first
								approach to deliver solutions that last.
							</p>

							<ul className={styles.benefitsList}>
								{BENEFITS.map((b) => (
									<li key={b.title} className={styles.benefitItem}>
										<span className={styles.benefitIcon}>{b.icon}</span>
										<div>
											<h4 className={styles.benefitTitle}>{b.title}</h4>
											<p className={styles.benefitDesc}>{b.desc}</p>
										</div>
									</li>
								))}
							</ul>
						</div>

						<div className={styles.statsCard}>
							<div className={styles.stat}>
								<span className={styles.statNumber}>150+</span>
								<span className={styles.statLabel}>Projects Delivered</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>98%</span>
								<span className={styles.statLabel}>Client Satisfaction</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>10+</span>
								<span className={styles.statLabel}>Years Experience</span>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
