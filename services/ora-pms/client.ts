import type { OraAvailabilityResponse, OraRoomCategory } from "./types";

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

  const data = await response.json() as OraAvailabilityResponse;
  const byCategory = new Map<string, { website?: OraRoomCategory; roFlexi?: OraRoomCategory }>();
  for (const room of data.Data) {
    const entry = byCategory.get(room.CategoryId) ?? {};
    if (room.PlanName === "WEBSITE RATE") entry.website = room;
    else entry.roFlexi = room;
    byCategory.set(room.CategoryId, entry);
  }
  const merged = Array.from(byCategory.values())
    .filter((e) => e.website)
    .map((e) => ({ ...e.website!, roFlexiRate: e.roFlexi?.TotalRate }));
  return { ...data, Data: merged };
}
