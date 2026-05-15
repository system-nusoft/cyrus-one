import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const SENDER_EMAIL = "contact@cyrusonehotel.com";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Email service not configured" }, { status: 503 });
  }
  sgMail.setApiKey(apiKey);

  try {
    const body = await req.json() as {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      reason: string;
      type: "modify" | "cancel";
    };

    const subject = body.type === "cancel"
      ? `Booking Cancellation Request — ${body.firstName} ${body.lastName}`
      : `Booking Modification Request — ${body.firstName} ${body.lastName}`;

    const html = `
      <h2>${body.type === "cancel" ? "Booking Cancellation" : "Booking Modification"} Request</h2>
      <p><strong>Name:</strong> ${body.firstName} ${body.lastName}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Phone:</strong> ${body.phoneNumber}</p>
      <p><strong>Reason:</strong></p>
      <p>${body.reason}</p>
    `;

    await sgMail.send({
      to: SENDER_EMAIL,
      from: SENDER_EMAIL,
      replyTo: body.email,
      subject,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("SendGrid error:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
