import type { OraAvailabilityResponse } from "./types";

export async function fetchRoomAvailability(
  fromDate: string,
  toDate: string
): Promise<OraAvailabilityResponse> {
  const apiUrl = process.env.ORA_PMS_API_URL;
  const hotelId = process.env.ORA_PMS_HOTEL_ID;

  if (!apiUrl || !hotelId) {
    throw new Error("ORA PMS environment variables are not configured");
  }

  const response = await fetch(
    `${apiUrl}/rooms/category-availability-rates`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ HotelId: hotelId, FromDate: fromDate, ToDate: toDate }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `ORA PMS API error: ${response.status} ${response.statusText}`
    );
  }

  return response.json() as Promise<OraAvailabilityResponse>;
}
