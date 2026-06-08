import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const HOTEL_EMAIL = "contact@cyrusonehotel.com";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      firstName: string;
      lastName?: string;
      email: string;
      phone?: string;
      message: string;
    };

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    sgMail.setApiKey(apiKey);

    const html = `
      <h2>New Contact Inquiry — Cyrus One Hotel</h2>
      <p><strong>Name:</strong> ${body.firstName}${body.lastName ? ` ${body.lastName}` : ""}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      ${body.phone ? `<p><strong>Phone:</strong> ${body.phone}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-line">${body.message}</p>
    `;

    await sgMail.send({
      to: HOTEL_EMAIL,
      from: HOTEL_EMAIL,
      replyTo: body.email,
      subject: `Contact Inquiry — ${body.firstName}${body.lastName ? ` ${body.lastName}` : ""}`,
      html,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
