import { Resend } from "resend";
import { validateQuoteRequest } from "@/lib/quoteRequest";
import { createQuoteRequestEmail } from "@/lib/quoteRequestEmail";

function createRequestId() {
	const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
	return `RFQ-${Date.now().toString(36).toUpperCase()}-${randomPart}`;
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

function getResponseEmailConfig() {
	return {
		from: process.env.RESEND_FROM_EMAIL || "Mindview <quotes@mindviewautomation.com>",
		to: process.env.RESEND_QUOTE_TO_EMAIL || "mindviewauto@gmail.com",
	};
}

export default async function handler(req, res) {
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
	const submittedAt = new Date().toISOString();

	if (!resend) {
		return res.status(500).json({
			message: "Quote request email service is not configured on the server.",
		});
	}

	const emailConfig = getResponseEmailConfig();
	const emailPayload = createQuoteRequestEmail({
		data,
		requestId,
		submittedAt,
	});

	let sendResult;
	try {
		sendResult = await resend.emails.send({
			from: emailConfig.from,
			to: emailConfig.to,
			subject: emailPayload.subject,
			html: emailPayload.html,
			text: emailPayload.text,
			replyTo: data.workEmail,
		});
	} catch (error) {
		console.error("[quote-requests] Resend threw an exception:", error);
		return res.status(502).json({
			message: "Quote request could not be delivered right now. Please try again shortly.",
		});
	}

	if (sendResult?.error) {
		console.error("[quote-requests] Resend API error:", JSON.stringify(sendResult.error));
		return res.status(502).json({
			message: "Quote request could not be delivered right now. Please try again shortly.",
		});
	}

	return res.status(201).json({
		status: "received",
		requestId,
		submittedAt,
		message: "Quote request received successfully.",
	});
}