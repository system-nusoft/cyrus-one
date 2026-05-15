import { NextRequest, NextResponse } from "next/server";
import { fetchRoomAvailability } from "@/services/ora-pms/client";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { fromDate: string; toDate: string };
    const { fromDate, toDate } = body;

    if (!fromDate || !toDate) {
      return NextResponse.json(
        { error: "fromDate and toDate are required" },
        { status: 400 }
      );
    }

    const data = await fetchRoomAvailability(fromDate, toDate);
    return NextResponse.json(data);
  } catch (error) {
    console.error("ORA PMS API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch room availability. Please try again." },
      { status: 500 }
    );
  }
}
