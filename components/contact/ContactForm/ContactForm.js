import { useState } from "react";
import CheckCircleRounded from "@mui/icons-material/CheckCircleRounded";
import AccessTimeRounded from "@mui/icons-material/AccessTimeRounded";
import VerifiedRounded from "@mui/icons-material/VerifiedRounded";
import GroupsRounded from "@mui/icons-material/GroupsRounded";
import {
	BUDGET_RANGE_OPTIONS,
	CONTACT_METHOD_OPTIONS,
	EMPTY_QUOTE_REQUEST,
	MAX_SCOPE_SUMMARY_LENGTH,
	PROJECT_TYPE_OPTIONS,
	PROPERTY_TYPE_OPTIONS,
	QUOTE_SERVICE_OPTIONS,
	SITE_STATUS_OPTIONS,
	TIMELINE_OPTIONS,
	validateQuoteRequest,
} from "@/lib/quoteRequest";
import styles from "./ContactForm.module.css";

const BENEFITS = [
	{
		icon: <AccessTimeRounded />,
		title: "Structured Intake",
		desc: "Your request comes in with the commercial and technical details our team needs to review it properly.",
	},
	{
		icon: <VerifiedRounded />,
		title: "Technical Review",
		desc: "Service leads can assess scope, site conditions, and delivery fit before the next conversation.",
	},
	{
		icon: <GroupsRounded />,
		title: "Commercial Alignment",
		desc: "Budget and timeline fields help us route the request to the right team without back-and-forth.",
	},
	{
		icon: <CheckCircleRounded />,
		title: "Clear Next Step",
		desc: "Qualified requests can move straight into a call, site visit, scope clarification, or formal quotation process.",
	},
];

export default function ContactForm() {
	const [form, setForm] = useState(EMPTY_QUOTE_REQUEST);
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState({ type: "idle", message: "" });
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		const { name, type, checked, value } = e.target;
		setForm((current) => ({
			...current,
			[name]:
				name === "services"
					? (value ? [value] : [])
					: type === "checkbox"
						? checked
						: value,
		}));
		setErrors((current) => ({ ...current, [name]: "" }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const validation = validateQuoteRequest(form);

		if (!validation.isValid) {
			setErrors(validation.errors);
			setStatus({
				type: "error",
				message: "Please correct the highlighted fields before submitting your request.",
			});
			return;
		}

		setIsSubmitting(true);
		setStatus({ type: "idle", message: "" });

		try {
			const response = await fetch("/api/quote-requests", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(validation.data),
			});

			const result = await response.json();

			if (!response.ok) {
				if (result.errors) {
					setErrors(result.errors);
				}

				throw new Error(result.message || "Unable to submit quote request right now.");
			}

			setForm(EMPTY_QUOTE_REQUEST);
			setErrors({});
			setStatus({
				type: "success",
				message: `Quote request received. Reference: ${result.requestId}. Our team will review it and respond with the next step.`,
			});
		} catch (error) {
			setStatus({
				type: "error",
				message: error.message || "Something went wrong while sending your request.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				<div className={styles.grid}>
					{/* ---- Form Column ---- */}
					<form className={styles.form} onSubmit={handleSubmit} noValidate>
						<h2 className={styles.title}>Request Your Project Quote</h2>
						<p className={styles.subtitle}>
							Use the form below to submit a complete RFQ. The more specific your
							scope and site information, the faster our team can route the request.
						</p>

						{status.message ? (
							<div
								className={`${styles.statusMessage} ${
									status.type === "success" ? styles.statusSuccess : styles.statusError
								}`}
								role="status"
								aria-live="polite"
							>
								{status.message}
							</div>
						) : null}

						<div className={styles.formSection}>
							<h3 className={styles.sectionTitle}>Requester Details</h3>
							<p className={styles.sectionText}>Tell us who should receive the response and where the project is located.</p>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="fullName" className={styles.label}>Full name</label>
								<input
									id="fullName"
									type="text"
									name="fullName"
									autoComplete="name"
									placeholder="Enter requester full name"
									value={form.fullName}
									onChange={handleChange}
									className={`${styles.input} ${errors.fullName ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.fullName)}
									required
								/>
								{errors.fullName ? <span className={styles.errorText}>{errors.fullName}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="workEmail" className={styles.label}>Work email</label>
								<input
									id="workEmail"
									type="email"
									name="workEmail"
									autoComplete="email"
									placeholder="name@company.com"
									value={form.workEmail}
									onChange={handleChange}
									className={`${styles.input} ${errors.workEmail ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.workEmail)}
									required
								/>
								{errors.workEmail ? <span className={styles.errorText}>{errors.workEmail}</span> : null}
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="phone" className={styles.label}>Phone number</label>
								<input
									id="phone"
									type="tel"
									name="phone"
									autoComplete="tel"
									placeholder="+234 801 234 5678"
									value={form.phone}
									onChange={handleChange}
									className={`${styles.input} ${errors.phone ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.phone)}
									required
								/>
								{errors.phone ? <span className={styles.errorText}>{errors.phone}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="companyName" className={styles.label}>Company name</label>
								<input
									id="companyName"
									type="text"
									name="companyName"
									autoComplete="organization"
									placeholder="Enter company or organization"
									value={form.companyName}
									onChange={handleChange}
									className={`${styles.input} ${errors.companyName ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.companyName)}
									required
								/>
								{errors.companyName ? <span className={styles.errorText}>{errors.companyName}</span> : null}
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="jobTitle" className={styles.label}>Job title</label>
								<input
									id="jobTitle"
									type="text"
									name="jobTitle"
									autoComplete="organization-title"
									placeholder="Facilities Manager, Project Lead, etc."
									value={form.jobTitle}
									onChange={handleChange}
									className={`${styles.input} ${errors.jobTitle ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.jobTitle)}
								/>
								{errors.jobTitle ? <span className={styles.errorText}>{errors.jobTitle}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="projectLocation" className={styles.label}>Project location</label>
								<input
									id="projectLocation"
									type="text"
									name="projectLocation"
									autoComplete="street-address"
									placeholder="City, site address, or region"
									value={form.projectLocation}
									onChange={handleChange}
									className={`${styles.input} ${errors.projectLocation ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.projectLocation)}
									required
								/>
								{errors.projectLocation ? <span className={styles.errorText}>{errors.projectLocation}</span> : null}
							</div>
						</div>

						<div className={styles.formSection}>
							<h3 className={styles.sectionTitle}>Scope Definition</h3>
							<p className={styles.sectionText}>Choose the primary service category and describe the opportunity clearly enough for technical review.</p>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="services" className={styles.label}>Primary service</label>
								<select
									id="services"
									name="services"
									value={form.services[0] || ""}
									onChange={handleChange}
									className={`${styles.select} ${errors.services ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.services)}
									required
								>
									<option value="">Select primary service</option>
									{QUOTE_SERVICE_OPTIONS.map((service) => (
										<option key={service.value} value={service.value}>
											{service.label}
										</option>
									))}
								</select>
								{errors.services ? <span className={styles.errorText}>{errors.services}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="propertyType" className={styles.label}>Property or facility type</label>
								<select
									id="propertyType"
									name="propertyType"
									value={form.propertyType}
									onChange={handleChange}
									className={`${styles.select} ${errors.propertyType ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.propertyType)}
									required
								>
									<option value="">Select property type</option>
									{PROPERTY_TYPE_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.propertyType ? <span className={styles.errorText}>{errors.propertyType}</span> : null}
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="projectType" className={styles.label}>Project type</label>
								<select
									id="projectType"
									name="projectType"
									value={form.projectType}
									onChange={handleChange}
									className={`${styles.select} ${errors.projectType ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.projectType)}
									required
								>
									<option value="">Select project type</option>
									{PROJECT_TYPE_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.projectType ? <span className={styles.errorText}>{errors.projectType}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="siteStatus" className={styles.label}>Site status</label>
								<select
									id="siteStatus"
									name="siteStatus"
									value={form.siteStatus}
									onChange={handleChange}
									className={`${styles.select} ${errors.siteStatus ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.siteStatus)}
									required
								>
									<option value="">Select site status</option>
									{SITE_STATUS_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.siteStatus ? <span className={styles.errorText}>{errors.siteStatus}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="timeline" className={styles.label}>Expected timeline</label>
								<select
									id="timeline"
									name="timeline"
									value={form.timeline}
									onChange={handleChange}
									className={`${styles.select} ${errors.timeline ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.timeline)}
									required
								>
									<option value="">Select timeline</option>
									{TIMELINE_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.timeline ? <span className={styles.errorText}>{errors.timeline}</span> : null}
							</div>
						</div>

						<div className={styles.row}>
							<div className={styles.field}>
								<label htmlFor="budgetRange" className={styles.label}>Budget range</label>
								<select
									id="budgetRange"
									name="budgetRange"
									value={form.budgetRange}
									onChange={handleChange}
									className={`${styles.select} ${errors.budgetRange ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.budgetRange)}
									required
								>
									<option value="">Select budget range</option>
									{BUDGET_RANGE_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.budgetRange ? <span className={styles.errorText}>{errors.budgetRange}</span> : null}
							</div>
							<div className={styles.field}>
								<label htmlFor="preferredContactMethod" className={styles.label}>Preferred contact method</label>
								<select
									id="preferredContactMethod"
									name="preferredContactMethod"
									value={form.preferredContactMethod}
									onChange={handleChange}
									className={`${styles.select} ${errors.preferredContactMethod ? styles.controlInvalid : ""}`}
									aria-invalid={Boolean(errors.preferredContactMethod)}
									required
								>
									<option value="">Select contact method</option>
									{CONTACT_METHOD_OPTIONS.map((option) => (
										<option key={option.value} value={option.value}>
											{option.label}
										</option>
									))}
								</select>
								{errors.preferredContactMethod ? <span className={styles.errorText}>{errors.preferredContactMethod}</span> : null}
							</div>
						</div>

						<div className={styles.field}>
							<label htmlFor="scopeSummary" className={styles.label}>Project scope summary</label>
							<p className={styles.helperText}>Include the problem to solve, site condition, expected deliverables, and any live-environment constraints.</p>
							<div className={styles.textareaWrap}>
								<textarea
									id="scopeSummary"
									name="scopeSummary"
									placeholder="Describe the requested system, current site situation, key issues, required outputs, and any deadlines."
									value={form.scopeSummary}
									onChange={handleChange}
									className={`${styles.textarea} ${errors.scopeSummary ? styles.controlInvalid : ""}`}
									maxLength={MAX_SCOPE_SUMMARY_LENGTH}
									rows={6}
									aria-invalid={Boolean(errors.scopeSummary)}
									required
								/>
								<span className={styles.charCount}>
									{form.scopeSummary.length}/{MAX_SCOPE_SUMMARY_LENGTH}
								</span>
							</div>
							{errors.scopeSummary ? <span className={styles.errorText}>{errors.scopeSummary}</span> : null}
						</div>

						<input
							type="text"
							name="website"
							value={form.website}
							onChange={handleChange}
							tabIndex="-1"
							autoComplete="off"
							className={styles.honeypot}
							aria-hidden="true"
						/>

						<label className={styles.consentRow}>
							<input
								type="checkbox"
								name="consent"
								checked={form.consent}
								onChange={handleChange}
								className={styles.consentInput}
								required
							/>
							<span className={styles.consentText}>
								I confirm that Mindview can contact me about this quote request and that the information provided is accurate.
							</span>
						</label>
						{errors.consent ? <span className={styles.errorText}>{errors.consent}</span> : null}

						<button type="submit" className={styles.submitBtn}>
							{isSubmitting ? "Submitting Request..." : "Submit Quote Request"}
						</button>
					</form>

					{/* ---- Sidebar Column ---- */}
					<aside className={styles.sidebar}>
						<div className={styles.sidebarCard}>
							<h3 className={styles.sidebarTitle}>What Happens Next</h3>
							<p className={styles.sidebarDesc}>
								This form is structured for commercial and technical intake, so your request can move faster once it reaches the right team.
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
								<span className={styles.statNumber}>24h</span>
								<span className={styles.statLabel}>Initial response target</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>500+</span>
								<span className={styles.statLabel}>Projects delivered</span>
							</div>
							<div className={styles.stat}>
								<span className={styles.statNumber}>6</span>
								<span className={styles.statLabel}>Core service lines</span>
							</div>
						</div>
					</aside>
				</div>
			</div>
		</section>
	);
}
