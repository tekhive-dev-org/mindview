import { validateQuoteRequest } from "@/lib/quoteRequest";

function createRequestId() {
	const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
	return `RFQ-${Date.now().toString(36).toUpperCase()}-${randomPart}`;
}

export default function handler(req, res) {
	if (req.method !== "POST") {
		res.setHeader("Allow", "POST");
		return res.status(405).json({
			message: "Method not allowed. Use POST for quote requests.",
		});
	}

	const { data, errors, isValid } = validateQuoteRequest(req.body);

	if (data.website) {
		return res.status(202).json({
			status: "accepted",
			message: "If your request is valid, our team will review it shortly.",
		});
	}

	if (!isValid) {
		return res.status(422).json({
			message: "The quote request payload failed validation.",
			errors,
		});
	}

	const requestId = createRequestId();

	return res.status(201).json({
		status: "received",
		requestId,
		submittedAt: new Date().toISOString(),
		message: "Quote request received successfully.",
	});
}