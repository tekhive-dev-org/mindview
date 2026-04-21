import {
	BUDGET_RANGE_OPTIONS,
	CONTACT_METHOD_OPTIONS,
	PROJECT_TYPE_OPTIONS,
	PROPERTY_TYPE_OPTIONS,
	QUOTE_SERVICE_OPTIONS,
	SITE_STATUS_OPTIONS,
	TIMELINE_OPTIONS,
} from "@/lib/quoteRequest";

const FIELD_LABELS = {
	fullName: "Full name",
	workEmail: "Work email",
	phone: "Phone number",
	companyName: "Company name",
	jobTitle: "Job title",
	projectLocation: "Project location",
	services: "Primary service",
	projectType: "Project type",
	propertyType: "Property type",
	siteStatus: "Site status",
	timeline: "Expected timeline",
	budgetRange: "Budget range",
	preferredContactMethod: "Preferred contact method",
};

const OPTION_LABELS = {
	services: createOptionMap(QUOTE_SERVICE_OPTIONS),
	projectType: createOptionMap(PROJECT_TYPE_OPTIONS),
	propertyType: createOptionMap(PROPERTY_TYPE_OPTIONS),
	siteStatus: createOptionMap(SITE_STATUS_OPTIONS),
	timeline: createOptionMap(TIMELINE_OPTIONS),
	budgetRange: createOptionMap(BUDGET_RANGE_OPTIONS),
	preferredContactMethod: createOptionMap(CONTACT_METHOD_OPTIONS),
};

function createOptionMap(options) {
	return Object.fromEntries(options.map((option) => [option.value, option.label]));
}

function escapeHtml(value) {
	return String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/\"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

function formatValue(field, value) {
	if (Array.isArray(value)) {
		return value
			.map((item) => OPTION_LABELS[field]?.[item] || item)
			.join(", ");
	}

	return OPTION_LABELS[field]?.[value] || value || "Not provided";
}

function formatPhoneHref(value) {
	return String(value || "").replace(/(?!^\+)\D/g, "");
}

function buildDetailRows(data) {
	const fields = [
		"fullName",
		"workEmail",
		"phone",
		"companyName",
		"jobTitle",
		"projectLocation",
		"services",
		"projectType",
		"propertyType",
		"siteStatus",
		"timeline",
		"budgetRange",
		"preferredContactMethod",
	];

	return fields
		.map((field) => {
			const label = escapeHtml(FIELD_LABELS[field]);
			const value = escapeHtml(formatValue(field, data[field]));
			return `
				<tr class="detail-row" style="display: table-row;">
					<td class="dl" style="padding: 0 14px 14px 0; width: 160px; vertical-align: top; font-size: 11px; line-height: 17px; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em;">${label}</td>
					<td class="dv" style="padding: 0 0 14px; font-size: 14px; line-height: 22px; color: #0f172a; font-weight: 500;">${value}</td>
				</tr>`;
		})
		.join("");
}

function buildTextDetails(data) {
	const fields = [
		"fullName",
		"workEmail",
		"phone",
		"companyName",
		"jobTitle",
		"projectLocation",
		"services",
		"projectType",
		"propertyType",
		"siteStatus",
		"timeline",
		"budgetRange",
		"preferredContactMethod",
	];

	return fields
		.map((field) => `${FIELD_LABELS[field]}: ${formatValue(field, data[field])}`)
		.join("\n");
}

export function createQuoteRequestEmail({ data, requestId, submittedAt }) {
	const safeRequestId = escapeHtml(requestId);
	const safeSubmittedAt = escapeHtml(submittedAt);
	const safeSummary = escapeHtml(data.scopeSummary).replace(/\n/g, "<br />");
	const safeCompany = escapeHtml(data.companyName);
	const safeName = escapeHtml(data.fullName);
	const safeEmail = escapeHtml(data.workEmail);
	const safePhone = escapeHtml(data.phone);
	const phoneHref = escapeHtml(formatPhoneHref(data.phone));
	const subject = `New Mindview quote request: ${data.companyName} · ${requestId}`;

	const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <title>${subject}</title>
  <style>
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    @media screen and (max-width: 600px) {
      .outer-pad  { padding: 12px 8px !important; }
      .card       { border-radius: 16px !important; }
      .hdr        { padding: 24px 20px !important; }
      .hdr-h1     { font-size: 22px !important; line-height: 30px !important; }
      .hdr-p      { font-size: 13px !important; }
      .stats-wrap { padding: 20px 16px 4px !important; }
      .stat-td    { display: block !important; width: 100% !important; box-sizing: border-box !important; padding: 0 0 10px 0 !important; }
      .stat-box   { border-radius: 14px !important; padding: 14px 16px !important; }
      .cta-wrap   { padding: 8px 16px 20px !important; }
      .cta-td     { display: block !important; width: 100% !important; box-sizing: border-box !important; padding: 0 0 10px 0 !important; }
      .cta-btn    { border-radius: 12px !important; font-size: 15px !important; }
      .dtl-wrap   { padding: 0 16px 24px !important; }
      .dtl-inner  { padding: 20px 16px 6px !important; border-radius: 16px !important; }
      .dtl-h2     { font-size: 15px !important; }
      .dl         { display: block !important; width: 100% !important; padding: 0 0 3px 0 !important; }
      .dv         { display: block !important; width: 100% !important; padding: 0 0 14px 0 !important; }
      .scope-wrap { padding: 16px !important; }
      .note-wrap  { padding: 0 16px 24px !important; }
      .note-inner { border-radius: 14px !important; padding: 16px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background: #eef2ff; font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="outer-pad" style="background: #eef2ff; padding: 32px 16px;">
    <tr>
      <td align="center">

        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="card" style="max-width: 640px; background: #ffffff; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 56px rgba(15,23,42,0.13);">

          <!-- Header -->
          <tr>
            <td class="hdr" style="padding: 36px 36px 32px; background: linear-gradient(135deg, #0f172a 0%, #004f9c 55%, #0ea5e9 100%);">
              <div style="display: inline-block; padding: 7px 14px; border-radius: 999px; background: rgba(255,255,255,0.15); font-size: 11px; line-height: 16px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #ffffff; margin-bottom: 18px;">Mindview Quote Desk</div>
              <h1 class="hdr-h1" style="margin: 0 0 10px; font-size: 28px; line-height: 36px; font-weight: 800; color: #ffffff;">New quote request received</h1>
              <p class="hdr-p" style="margin: 0; font-size: 15px; line-height: 24px; color: rgba(255,255,255,0.88); max-width: 480px;">A new commercial inquiry has been submitted through the Mindview contact form.</p>
            </td>
          </tr>

          <!-- Stat cards -->
          <tr>
            <td class="stats-wrap" style="padding: 28px 28px 4px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td class="stat-td" style="width: 33.33%; padding-right: 8px; vertical-align: top;">
                    <div class="stat-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px 18px;">
                      <div style="font-size: 10px; line-height: 16px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #64748b; margin-bottom: 7px;">Reference</div>
                      <div style="font-size: 15px; line-height: 22px; font-weight: 800; color: #0f172a; word-break: break-all;">${safeRequestId}</div>
                    </div>
                  </td>
                  <td class="stat-td" style="width: 33.33%; padding: 0 4px; vertical-align: top;">
                    <div class="stat-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px 18px;">
                      <div style="font-size: 10px; line-height: 16px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #64748b; margin-bottom: 7px;">Requester</div>
                      <div style="font-size: 15px; line-height: 22px; font-weight: 800; color: #0f172a;">${safeName}</div>
                    </div>
                  </td>
                  <td class="stat-td" style="width: 33.33%; padding-left: 8px; vertical-align: top;">
                    <div class="stat-box" style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 16px 18px;">
                      <div style="font-size: 10px; line-height: 16px; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: #64748b; margin-bottom: 7px;">Submitted</div>
                      <div style="font-size: 13px; line-height: 20px; font-weight: 700; color: #0f172a;">${safeSubmittedAt}</div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- CTA buttons -->
          <tr>
            <td class="cta-wrap" style="padding: 16px 28px 24px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td class="cta-td" style="padding-right: 8px;">
                    <a class="cta-btn" href="mailto:${safeEmail}" style="display: block; text-align: center; padding: 14px 20px; border-radius: 14px; background: #004f9c; color: #ffffff; font-size: 14px; line-height: 20px; font-weight: 700; text-decoration: none;">Reply by email</a>
                  </td>
                  <td class="cta-td" style="padding-left: 8px;">
                    <a class="cta-btn" href="tel:${phoneHref}" style="display: block; text-align: center; padding: 14px 20px; border-radius: 14px; background: #e0f2fe; color: #075985; font-size: 14px; line-height: 20px; font-weight: 700; text-decoration: none;">Call requester</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Qualification details -->
          <tr>
            <td class="dtl-wrap" style="padding: 0 28px 28px;">
              <div style="border: 1px solid #e2e8f0; border-radius: 20px; overflow: hidden;">
                <div class="dtl-inner" style="padding: 22px 22px 6px;">
                  <h2 class="dtl-h2" style="margin: 0 0 16px; font-size: 16px; line-height: 22px; font-weight: 800; color: #0f172a;">Qualification details</h2>
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                    ${buildDetailRows(data)}
                  </table>
                </div>
                <div class="scope-wrap" style="padding: 20px 22px; border-top: 1px solid #e2e8f0; background: #f8fafc;">
                  <div style="font-size: 11px; line-height: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.09em; color: #64748b; margin-bottom: 10px;">Scope summary</div>
                  <div style="font-size: 14px; line-height: 24px; color: #334155;">${safeSummary}</div>
                </div>
              </div>
            </td>
          </tr>

          <!-- Footer note -->
          <tr>
            <td class="note-wrap" style="padding: 0 28px 32px;">
              <div class="note-inner" style="padding: 18px 22px; border-radius: 16px; background: #f8fafc; border: 1px solid #e2e8f0; font-size: 13px; line-height: 22px; color: #475569;">
                This email was generated from the Mindview website. Replying routes back to <strong style="color: #0f172a;">${safeName}</strong> at <a href="mailto:${safeEmail}" style="color: #004f9c; text-decoration: none;">${safeEmail}</a>.
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

	const text = [
		`New Mindview quote request`,
		`Reference: ${requestId}`,
		`Submitted at: ${submittedAt}`,
		"",
		buildTextDetails(data),
		"",
		"Scope summary:",
		data.scopeSummary,
	].join("\n");

	return { subject, html, text };
}