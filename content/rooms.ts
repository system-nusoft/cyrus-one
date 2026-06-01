export interface AmenityCategory {
  category: string;
  items: string[];
}

export interface RoomContent {
  slug: string;
  displayName: string;
  description: string;
  area: string;
  maxGuests: number;
  bedType: string;
  amenities: string[];
  detailedAmenities: AmenityCategory[];
  images: string[];
}

export const roomContent: Record<string, RoomContent> = {
  "Standard Double": {
    slug: "standard-double",
    displayName: "Cyrus One Standard Double",
    description:
      "The double room's kitchenette, which features a refrigerator and an electric kettle, is available for cooking and storing food. The double room offers air conditioning, a seating area, a balcony with city views as well as a private bathroom featuring a shower. The unit offers 1 bed.",
    area: "25",
    maxGuests: 2,
    bedType: "1 Double Bed",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Air conditioning", "Fan", "Linen", "Wake up service/Alarm clock", "Socket near the bed", "Electric kettle", "Patio", "Seating area", "Wardrobe or closet", "Telephone", "Ironing facilities", "Heating", "Flat-screen TV", "Refrigerator", "Clothes rack", "Upper floors accessible by elevator"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/standard-double/1.webp", "/images/rooms/standard-double/2.webp", "/images/rooms/standard-double/3.webp", "/images/rooms/standard-double/4.webp", "/images/rooms/standard-double/5.webp", "/images/rooms/standard-double/6.webp", "/images/rooms/standard-double/7.webp", "/images/rooms/standard-double/8.webp", "/images/rooms/standard-double/9.webp", "/images/rooms/standard-double/10.webp"],
  },
  "Deluxe Double": {
    slug: "deluxe-double",
    displayName: "Cyrus One Deluxe Double",
    description:
      "The double room's kitchenette, which has a refrigerator and an electric kettle, is available for cooking and storing food. The spacious double room features air conditioning, a seating area, a balcony with city views as well as a private bathroom boasting a shower. The unit has 1 bed.",
    area: "31",
    maxGuests: 2,
    bedType: "1 Double Bed",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Air conditioning", "Fan", "Linen", "Wake up service/Alarm clock", "Socket near the bed", "Electric kettle", "Patio", "Seating area", "Wardrobe or closet", "Telephone", "Ironing facilities", "Heating", "Flat-screen TV", "Refrigerator", "Clothes rack", "Upper floors accessible by elevator"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/executive-suite/1.webp", "/images/rooms/executive-suite/2.webp", "/images/rooms/executive-suite/3.webp", "/images/rooms/executive-suite/4.webp", "/images/rooms/executive-suite/5.webp", "/images/rooms/executive-suite/6.webp", "/images/rooms/executive-suite/7.webp", "/images/rooms/executive-suite/8.webp", "/images/rooms/executive-suite/9.webp", "/images/rooms/executive-suite/10.webp", "/images/rooms/executive-suite/11.webp", "/images/rooms/executive-suite/12.webp", "/images/rooms/executive-suite/13.webp"],
  },
  "Deluxe Twin": {
    slug: "deluxe-twin",
    displayName: "Cyrus One Deluxe Twin",
    description:
      "The twin room's kitchenette, which has a refrigerator and an electric kettle, is available for cooking and storing food. The spacious twin room features air conditioning, a seating area, a balcony with city views as well as a private bathroom boasting a shower. The unit has 2 beds.",
    area: "34",
    maxGuests: 2,
    bedType: "2 Single Beds",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Kitchenette", "Air conditioning", "Fan", "Linen", "Wake up service/Alarm clock", "Socket near the bed", "Electric kettle", "Patio", "Seating area", "Wardrobe or closet", "Telephone", "Ironing facilities", "Interconnected room(s) available", "Heating", "Flat-screen TV", "Refrigerator", "Clothes rack", "Upper floors accessible by elevator"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/deluxe-twin/1.webp", "/images/rooms/deluxe-twin/2.webp", "/images/rooms/deluxe-twin/3.webp", "/images/rooms/deluxe-twin/4.webp", "/images/rooms/deluxe-twin/5.webp", "/images/rooms/deluxe-twin/6.webp", "/images/rooms/deluxe-twin/7.webp", "/images/rooms/deluxe-twin/8.webp", "/images/rooms/deluxe-twin/9.webp", "/images/rooms/deluxe-twin/10.webp", "/images/rooms/deluxe-twin/11.webp", "/images/rooms/deluxe-twin/12.webp", "/images/rooms/deluxe-twin/13.webp"],
  },
  "Executive Suite": {
    slug: "executive-suite",
    displayName: "Cyrus One Executive Suite",
    description:
      "The air-conditioned suite features 1 bedroom and 1 bathroom with a shower and a hairdryer. The suite's kitchenette, which has a refrigerator and an electric kettle, is available for cooking and storing food. Featuring a balcony with city views, this suite also provides a seating area and a flat-screen TV. The unit offers 1 bed.",
    area: "46",
    maxGuests: 2,
    bedType: "1 Double Bed",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Kitchenette", "Air conditioning", "Fan", "Sofa", "Wake up service/Alarm clock", "Linen", "Electric kettle", "Socket near the bed", "Patio", "Tile/marble floor", "Wake-up service", "Seating Area", "Wardrobe or closet", "TV", "Refrigerator", "Telephone", "Ironing facilities", "Interconnected room(s) available", "Heating", "Flat-screen TV", "Upper floors accessible by elevator", "Clothes rack", "Single-room air conditioning for guest accommodation"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/deluxe-double/1.webp", "/images/rooms/deluxe-double/2.webp", "/images/rooms/deluxe-double/3.webp", "/images/rooms/deluxe-double/4.webp", "/images/rooms/deluxe-double/5.webp", "/images/rooms/deluxe-double/6.webp", "/images/rooms/deluxe-double/7.webp", "/images/rooms/deluxe-double/8.webp", "/images/rooms/deluxe-double/9.webp", "/images/rooms/deluxe-double/10.webp", "/images/rooms/deluxe-double/11.webp", "/images/rooms/deluxe-double/12.webp", "/images/rooms/deluxe-double/13.webp", "/images/rooms/deluxe-double/14.webp", "/images/rooms/deluxe-double/15.webp", "/images/rooms/deluxe-double/16.webp", "/images/rooms/deluxe-double/17.webp", "/images/rooms/deluxe-double/18.webp", "/images/rooms/deluxe-double/19.webp", "/images/rooms/deluxe-double/20.webp", "/images/rooms/deluxe-double/21.webp"],
  },
  "3 Bed Executive": {
    slug: "3-bed-executive",
    displayName: "Cyrus One 3 Bed Executive",
    description:
      "The spacious apartment features 2 bedrooms and 2 bathrooms with a shower and free toiletries. The apartment's kitchenette, which has a refrigerator, is available for cooking and storing food. The air-conditioned apartment provides a flat-screen TV, a seating area, a wardrobe, an electric kettle as well as city views. The unit offers 3 beds.",
    area: "80",
    maxGuests: 4,
    bedType: "2 Single + 1 Double Bed",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Kitchenette", "Air conditioning", "Fan", "Sofa", "Wake up service/Alarm clock", "Linen", "Electric kettle", "Socket near the bed", "Patio", "Tile/marble floor", "Wake-up service", "Seating Area", "Wardrobe or closet", "TV", "Refrigerator", "Telephone", "Ironing facilities", "Interconnected room(s) available", "Heating", "Flat-screen TV", "Upper floors accessible by elevator", "Clothes rack", "Single-room air conditioning for guest accommodation"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/3-bed-executive/1.webp"],
  },
  "2 Bed Suite": {
    slug: "2-bed-suite",
    displayName: "Cyrus One 2 Bed Executive Suite",
    description:
      "This spacious apartment includes 1 living room, 2 separate bedrooms and 2 bathrooms with a shower and free toiletries. The apartment's kitchenette, which has a refrigerator, is available for cooking and storing food. The air-conditioned apartment offers a flat-screen TV, a seating area, a wardrobe, an electric kettle as well as city views. The unit has 2 beds.",
    area: "78",
    maxGuests: 4,
    bedType: "2 Double Beds",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Kitchenette", "Air conditioning", "Fan", "Sofa", "Wake up service/Alarm clock", "Linen", "Electric kettle", "Socket near the bed", "Patio", "Tile/marble floor", "Wake-up service", "Seating Area", "Wardrobe or closet", "TV", "Refrigerator", "Telephone", "Ironing facilities", "Interconnected room(s) available", "Heating", "Flat-screen TV", "Upper floors accessible by elevator", "Clothes rack", "Single-room air conditioning for guest accommodation"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/2-bed-suite/1.webp"],
  },
  "2 Bed Presendential Suites": {
    slug: "2-bed-presidential-suite",
    displayName: "Cyrus One 2 Bed Presidential Suite",
    description:
      "This spacious apartment is comprised of 2 living rooms, 2 separate bedrooms and 2 bathrooms with a shower and free toiletries. The apartment's kitchenette, which features a refrigerator, is available for cooking and storing food. The air-conditioned apartment offers a flat-screen TV, a seating area, a wardrobe, an electric kettle as well as city views. The unit offers 2 beds.",
    area: "92",
    maxGuests: 4,
    bedType: "2 Double Beds",
    amenities: ["Private kitchenette", "Private bathroom", "Balcony", "Landmark view", "City view", "Air conditioning", "Patio", "Flat-screen TV", "Free WiFi"],
    detailedAmenities: [
      { category: "Private Kitchenette", items: ["Refrigerator", "Electric kettle"] },
      { category: "Private Bathroom", items: ["Free toiletries", "Slippers", "Toilet", "Hairdryer", "Bath or shower", "Towels/sheets (extra fee)", "Towels", "Toilet paper"] },
      { category: "View", items: ["Landmark view", "City view"] },
      { category: "Facilities", items: ["Balcony", "Kitchenette", "Air conditioning", "Fan", "Sofa", "Wake up service/Alarm clock", "Linen", "Electric kettle", "Socket near the bed", "Patio", "Tile/marble floor", "Wake-up service", "Seating Area", "Wardrobe or closet", "TV", "Refrigerator", "Telephone", "Ironing facilities", "Interconnected room(s) available", "Heating", "Flat-screen TV", "Upper floors accessible by elevator", "Clothes rack", "Single-room air conditioning for guest accommodation"] },
      { category: "Accessibility", items: ["Entire unit wheelchair accessible", "Baby safety gates"] },
      { category: "Smoking Policy", items: ["No smoking"] },
    ],
    images: ["/images/rooms/2-bed-presidential-suite/1.webp"],
  },
};
