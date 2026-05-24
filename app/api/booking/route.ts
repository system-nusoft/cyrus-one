import { NextRequest, NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

const ORA_API_URL =
  "https://www.smartpmspro.com/smartapi/api/reservation/create-new-Booking";
const HOTEL_ID = process.env.ORA_PMS_HOTEL_ID!;
const HOTEL_EMAIL = "contact@cyrusonehotel.com";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      firstName: string;
      lastName: string;
      email: string;
      phoneNumber: string;
      checkIn: string;
      checkOut: string;
      adults: number;
      children: number;
      country: string;
      city: string;
      address: string;
      notes: string;
      airportPickup?: boolean;
      totalAmount: number;
      noOfRooms: number;
      planId: string;
      categoryId: string;
    };

    const params = new URLSearchParams({
      hotelid: HOTEL_ID,
      firstname: body.firstName,
      lastname: body.lastName,
      email: body.email,
      phoneNumber: body.phoneNumber,
      checkInDate: body.checkIn,
      checkOutDate: body.checkOut,
      total_amount: String(body.totalAmount),
      noofrooms: String(body.noOfRooms),
      planid: body.planId,
      category_id: body.categoryId,
      isShuttleService: body.airportPickup ? "true" : "false",
    });

    const res = await fetch(`${ORA_API_URL}?${params.toString()}`, {
      method: "POST",
    });

    const text = await res.text();
    let data: unknown;
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }

    if (!res.ok) {
      return NextResponse.json(
        { error: "Booking failed", detail: data },
        { status: res.status },
      );
    }

    // Send emails — non-blocking, don't fail the booking if email fails
    const apiKey = process.env.SENDGRID_API_KEY;
    if (apiKey) {
      sgMail.setApiKey(apiKey);

      const adminHtml = `
        <h2>New Booking — Cyrus One Hotel</h2>
        <p><strong>Guest:</strong> ${body.firstName} ${body.lastName}</p>
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phoneNumber}</p>
        <p><strong>Check-in:</strong> ${body.checkIn}</p>
        <p><strong>Check-out:</strong> ${body.checkOut}</p>
        <p><strong>Adults:</strong> ${body.adults} &nbsp; <strong>Children:</strong> ${body.children}</p>
        <p><strong>Rooms:</strong> ${body.noOfRooms}</p>
        <p><strong>Country:</strong> ${body.country} &nbsp; <strong>City:</strong> ${body.city}</p>
        <p><strong>Address:</strong> ${body.address}</p>
        <p><strong>Total Amount:</strong> PKR ${body.totalAmount.toLocaleString("en-PK")}</p>
        ${body.notes ? `<p><strong>Special Requests:</strong> ${body.notes}</p>` : ""}
      `;

      await sgMail.send({
        to: HOTEL_EMAIL,
        from: HOTEL_EMAIL,
        replyTo: body.email,
        subject: `New Booking — ${body.firstName} ${body.lastName} (${body.checkIn} → ${body.checkOut})`,
        html: adminHtml,
      });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Booking API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
