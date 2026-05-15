export interface OraRoomCategory {
  Category: string;
  CategoryId: string;
  LocalPlanId: string;
  AvailableRooms: number;
  TotalRate: number;
  TaxAmount: number;
  TotalRateWithTax: number;
  TaxType: string;
  TaxPercent: number;
  Nights: number;
  Currency: string;
  PlanName: string;
}

export interface OraAvailabilityResponse {
  HotelId: string;
  FromDate: string;
  ToDate: string;
  Nights: number;
  Data: OraRoomCategory[];
}

export interface RoomAvailabilityRequest {
  fromDate: string;
  toDate: string;
}
