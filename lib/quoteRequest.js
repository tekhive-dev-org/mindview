export const QUOTE_SERVICE_OPTIONS = [
	{ value: "security", label: "Security Systems (CCTV, Access Control, Turnstiles, Scanners, Bollards)" },
	{ value: "automation", label: "Automation (Gates, Doors, Barriers, Garage, Shutter, Sliding, Swing)" },
	{ value: "vertical-transport", label: "Vertical Transport (Elevators, Home Lifts)" },
	{ value: "energy", label: "Energy Solutions (Solar, Inverter, Battery Backup)" },
	{ value: "engineering", label: "Engineering Services (Mechanical, Electrical, Instrumentation)" },
	{ value: "hotel-hospitality", label: "Hotel & Hospitality (Card Locks, Access Devices)" },
	{ value: "vehicle-perimeter", label: "Vehicle & Perimeter Security (Car Trackers, Road Blockers, Spikes)" },
	{ value: "pos-eas", label: "POS & EAS Systems" },
	{ value: "integration", label: "Consultancy & System Integration" },
];

export const PROJECT_TYPE_OPTIONS = [
	{ value: "new-installation", label: "New installation" },
	{ value: "upgrade-modernization", label: "Upgrade or modernization" },
	{ value: "maintenance-support", label: "Maintenance or support" },
	{ value: "inspection-assessment", label: "Inspection or assessment" },
	{ value: "design-consultancy", label: "Design or consultancy" },
];

export const PROPERTY_TYPE_OPTIONS = [
	{ value: "residential", label: "Residential" },
	{ value: "commercial", label: "Commercial" },
	{ value: "industrial", label: "Industrial" },
	{ value: "mixed-use", label: "Mixed-use" },
	{ value: "public-infrastructure", label: "Public infrastructure" },
];

export const SITE_STATUS_OPTIONS = [
	{ value: "planning", label: "Planning stage" },
	{ value: "design-ready", label: "Design ready" },
	{ value: "site-ready", label: "Site ready for installation" },
	{ value: "live-environment", label: "Live environment or active facility" },
];

export const TIMELINE_OPTIONS = [
	{ value: "asap", label: "ASAP" },
	{ value: "within-30-days", label: "Within 30 days" },
	{ value: "1-3-months", label: "1 to 3 months" },
	{ value: "3-6-months", label: "3 to 6 months" },
	{ value: "6-plus-months", label: "6+ months" },
];

export const BUDGET_RANGE_OPTIONS = [
	{ value: "under-5m-ngn", label: "Under NGN 5M" },
	{ value: "5m-15m-ngn", label: "NGN 5M to NGN 15M" },
	{ value: "15m-50m-ngn", label: "NGN 15M to NGN 50M" },
	{ value: "50m-plus-ngn", label: "NGN 50M+" },
	{ value: "undisclosed", label: "Prefer not to disclose yet" },
];

export const CONTACT_METHOD_OPTIONS = [
	{ value: "email", label: "Email" },
	{ value: "phone", label: "Phone call" },
	{ value: "whatsapp", label: "WhatsApp" },
];

export const EMPTY_QUOTE_REQUEST = {
	fullName: "",
	workEmail: "",
	phone: "",
	companyName: "",
	jobTitle: "",
	projectLocation: "",
	services: [],
	projectType: "",
	propertyType: "",
	siteStatus: "",
	timeline: "",
	budgetRange: "",
	preferredContactMethod: "",
	scopeSummary: "",
	consent: false,
	website: "",
};

export const MAX_SCOPE_SUMMARY_LENGTH = 2000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_ALLOWED_REGEX = /^[0-9+()\-\s.]+$/;

function normalizeString(value) {
	if (typeof value !== "string") {
		return "";
	}

	return value.trim().replace(/\s+/g, " ");
}

function normalizeMultilineString(value) {
	if (typeof value !== "string") {
		return "";
	}

	return value
		.replace(/\r\n/g, "\n")
		.split("\n")
		.map((line) => line.trim())
		.join("\n")
		.trim();
}

function getAllowedValues(options) {
	return new Set(options.map((option) => option.value));
}

function normalizeServices(values) {
	if (!Array.isArray(values)) {
		return [];
	}

	const allowedServices = getAllowedValues(QUOTE_SERVICE_OPTIONS);
	return [...new Set(values.map((value) => normalizeString(value)).filter((value) => allowedServices.has(value)))];
}

function isValidEmail(value) {
	return EMAIL_REGEX.test(value);
}

function isValidPhone(value) {
	const digitsOnly = value.replace(/\D/g, "");
	return PHONE_ALLOWED_REGEX.test(value) && digitsOnly.length >= 7 && digitsOnly.length <= 15;
}

function isAllowedOption(value, options) {
	return getAllowedValues(options).has(value);
}

export function validateQuoteRequest(input) {
	const data = {
		fullName: normalizeString(input?.fullName),
		workEmail: normalizeString(input?.workEmail).toLowerCase(),
		phone: normalizeString(input?.phone),
		companyName: normalizeString(input?.companyName),
		jobTitle: normalizeString(input?.jobTitle),
		projectLocation: normalizeString(input?.projectLocation),
		services: normalizeServices(input?.services),
		projectType: normalizeString(input?.projectType),
		propertyType: normalizeString(input?.propertyType),
		siteStatus: normalizeString(input?.siteStatus),
		timeline: normalizeString(input?.timeline),
		budgetRange: normalizeString(input?.budgetRange),
		preferredContactMethod: normalizeString(input?.preferredContactMethod),
		scopeSummary: normalizeMultilineString(input?.scopeSummary),
		consent: Boolean(input?.consent),
		website: normalizeString(input?.website),
	};

	const errors = {};

	if (data.fullName.length < 2 || data.fullName.length > 80) {
		errors.fullName = "Enter the requester full name.";
	}

	if (!isValidEmail(data.workEmail) || data.workEmail.length > 120) {
		errors.workEmail = "Enter a valid work email address.";
	}

	if (!isValidPhone(data.phone)) {
		errors.phone = "Enter a valid phone number including country code if available.";
	}

	if (data.companyName.length < 2 || data.companyName.length > 120) {
		errors.companyName = "Enter the company or organization name.";
	}

	if (data.jobTitle && (data.jobTitle.length < 2 || data.jobTitle.length > 80)) {
		errors.jobTitle = "Job title should be between 2 and 80 characters.";
	}

	if (data.projectLocation.length < 2 || data.projectLocation.length > 120) {
		errors.projectLocation = "Enter the project location or site address.";
	}

	if (data.services.length === 0) {
		errors.services = "Select at least one service category.";
	}

	if (!isAllowedOption(data.projectType, PROJECT_TYPE_OPTIONS)) {
		errors.projectType = "Select the type of project request.";
	}

	if (!isAllowedOption(data.propertyType, PROPERTY_TYPE_OPTIONS)) {
		errors.propertyType = "Select the property or facility type.";
	}

	if (!isAllowedOption(data.siteStatus, SITE_STATUS_OPTIONS)) {
		errors.siteStatus = "Select the current site status.";
	}

	if (!isAllowedOption(data.timeline, TIMELINE_OPTIONS)) {
		errors.timeline = "Select the expected project timeline.";
	}

	if (!isAllowedOption(data.budgetRange, BUDGET_RANGE_OPTIONS)) {
		errors.budgetRange = "Select the expected budget range.";
	}

	if (!isAllowedOption(data.preferredContactMethod, CONTACT_METHOD_OPTIONS)) {
		errors.preferredContactMethod = "Select the preferred contact method.";
	}

	if (data.scopeSummary.length < 30 || data.scopeSummary.length > MAX_SCOPE_SUMMARY_LENGTH) {
		errors.scopeSummary = `Provide a project scope summary between 30 and ${MAX_SCOPE_SUMMARY_LENGTH} characters.`;
	}

	if (!data.consent) {
		errors.consent = "You must confirm that Mindview Automation can contact you about this request.";
	}

	if (data.website) {
		errors.website = "Spam submission detected.";
	}

	return {
		data,
		errors,
		isValid: Object.keys(errors).length === 0,
	};
}