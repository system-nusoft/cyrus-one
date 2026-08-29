export interface AmenityCategory {
  category: string;
  items: string[];
}

export interface RoomImage {
  src: string;
  alt?: string;
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
  images: RoomImage[];
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
    images: [
      { src: "/images/rooms/standard-double/1.webp", alt: "Bed with a padded headboard and a colorful geometric runner in the Cyrus One Standard Double, a 25 sqm room near Islamabad International Airport." },
      { src: "/images/rooms/standard-double/2.webp", alt: "Close-up of the bed and wall-mounted air conditioning unit in the Cyrus One Standard Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/standard-double/3.webp", alt: "Bedside nightstand with a telephone beside the bed in the Cyrus One Standard Double, with an armchair in the foreground near Islamabad Airport." },
      { src: "/images/rooms/standard-double/4.webp", alt: "Close-up of the bed's geometric-patterned runner and pillow in the Cyrus One Standard Double, with a lit candle on the nightstand behind." },
      { src: "/images/rooms/standard-double/5.webp", alt: "Kitchenette with a mini fridge, sink, and electric kettle in the Cyrus One Standard Double, part of the hotel's in-room amenities." },
      { src: "/images/rooms/standard-double/6.webp", alt: "Dressing area with a mirror and armchair beside the kitchenette in the Cyrus One Standard Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/standard-double/7.webp", alt: "Dressing table with fresh orchids and a mirror in the Cyrus One Standard Double, with the kitchenette visible in the background." },
      { src: "/images/rooms/standard-double/8.webp", alt: "Kitchenette sink close-up with potted plants and a tea and coffee tray in the Cyrus One Standard Double at Cyrus One Hotel." },
      { src: "/images/rooms/standard-double/9.webp", alt: "Nightstand detail with a lit candle, telephone, and tissue box in the Cyrus One Standard Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/standard-double/10.webp", alt: "Close-up of a welcome tray with mugs, glasses, and tea and coffee sachets in the Cyrus One Standard Double kitchenette, Islamabad." },
      { src: "/images/rooms/standard-double/11.webp", alt: "Bathroom in the Cyrus One Standard Double featuring a sink, hairdryer, and handheld shower near Islamabad International Airport." },
    ],
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
    images: [
      { src: "/images/rooms/deluxe-double/1.webp", alt: "Bed with a padded headboard and wood-paneled accents in the Cyrus One Deluxe Double, a 31 sqm room near Islamabad International Airport." },
      { src: "/images/rooms/deluxe-double/2.webp", alt: "Double bed dressed in white linens with a colorful geometric runner in the Cyrus One Deluxe Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-double/3.webp", alt: "Close-up of the pillows and padded headboard in the Cyrus One Deluxe Double, showing the room's warm wood-toned finishes in Islamabad." },
      { src: "/images/rooms/deluxe-double/4.webp", alt: "Bedside table with a telephone and fresh flowers beside the bed in the Cyrus One Deluxe Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-double/5.webp", alt: "Nightstand detail with a lit candle and small succulent in the Cyrus One Deluxe Double, part of this Islamabad hotel room's decor." },
      { src: "/images/rooms/deluxe-double/6.webp", alt: "Kitchenette with cabinetry, a mini fridge, and wall-mounted TV in the Cyrus One Deluxe Double near Islamabad International Airport." },
      { src: "/images/rooms/deluxe-double/7.webp", alt: "Kettle and a framed Bauhaus print above a wooden bench in the Cyrus One Deluxe Double kitchenette at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-double/8.webp", alt: "Kitchenette sink with fresh flowers and a kettle on the counter in the Cyrus One Deluxe Double, part of the hotel's amenities." },
      { src: "/images/rooms/deluxe-double/9.webp", alt: "Welcome tray with tea bags and glassware in the Cyrus One Deluxe Double kitchenette, ready for arriving guests at Cyrus One Hotel." },
      { src: "/images/rooms/deluxe-double/10.webp", alt: "Wardrobe and mirrored dressing table reflecting the bed in the Cyrus One Deluxe Double, a 31 sqm room near Islamabad Airport." },
      { src: "/images/rooms/deluxe-double/11.webp", alt: "Bedside phone and a vase of flowers against a wood-paneled wall in the Cyrus One Deluxe Double at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-double/12.webp", alt: "Bathroom sink with a towel rail and toiletries in the Cyrus One Deluxe Double, part of this Islamabad hotel room's amenities." },
      { src: "/images/rooms/deluxe-double/13.webp", alt: "Cyrus One-branded hand and body wash beside potted greenery in the Cyrus One Deluxe Double bathroom at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-double/14.webp", alt: "Bathroom in the Cyrus One Deluxe Double featuring a sink, hairdryer, towels, and patterned tile flooring near Islamabad Airport." },
    ],
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
    images: [
      { src: "/images/rooms/deluxe-twin/1.webp", alt: "Twin beds with tan padded headboards and a wooden center panel in the Cyrus One Deluxe Twin, a 34 sqm room near Islamabad Airport." },
      { src: "/images/rooms/deluxe-twin/2.webp", alt: "Two single beds face the entrance in the Cyrus One Deluxe Twin, each dressed with a colorful geometric bed runner in Islamabad." },
      { src: "/images/rooms/deluxe-twin/3.webp", alt: "Twin beds and a built-in window seat in the Cyrus One Deluxe Twin, part of this hotel room's layout near Islamabad International Airport." },
      { src: "/images/rooms/deluxe-twin/4.webp", alt: "Dressing nook with a Cyrus One wall clock, Bauhaus print, and mirror in the Cyrus One Deluxe Twin at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-twin/5.webp", alt: "Close-up of the twin beds and sheer curtains in the Cyrus One Deluxe Twin, showing the room's geometric-patterned bed runners." },
      { src: "/images/rooms/deluxe-twin/6.webp", alt: "Kitchenette with a sink, kettle, and Cyrus One wall clock in the Cyrus One Deluxe Twin, part of the hotel's in-room amenities." },
      { src: "/images/rooms/deluxe-twin/7.webp", alt: "Dressing table with an orchid, mirror, and wooden bench in the Cyrus One Deluxe Twin at Cyrus One Hotel near Islamabad Airport." },
      { src: "/images/rooms/deluxe-twin/8.webp", alt: "Kitchenette and dressing area side by side in the Cyrus One Deluxe Twin, featuring a Bauhaus print and fresh orchids on display." },
      { src: "/images/rooms/deluxe-twin/9.webp", alt: "Wall-mounted TV and kitchenette beside the twin beds in the Cyrus One Deluxe Twin, a room designed for two guests in Islamabad." },
      { src: "/images/rooms/deluxe-twin/10.webp", alt: "Electric kettle and welcome tray with cups and glasses on the counter in the Cyrus One Deluxe Twin kitchenette at Cyrus One Hotel." },
      { src: "/images/rooms/deluxe-twin/11.webp", alt: "Potted greenery on the bathroom counter in the Cyrus One Deluxe Twin, part of this Islamabad hotel room's thoughtful details." },
      { src: "/images/rooms/deluxe-twin/12.webp", alt: "Bathroom sink with potted plants and toiletries in the Cyrus One Deluxe Twin, part of the hotel's amenities near Islamabad Airport." },
      { src: "/images/rooms/deluxe-twin/13.webp", alt: "Cyrus-branded hairdryer mounted beside folded white towels in the Cyrus One Deluxe Twin bathroom at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/deluxe-twin/14.webp", alt: "Bathroom in the Cyrus One Deluxe Twin featuring a handheld shower, sink, and patterned tile flooring near Islamabad International Airport." },
    ],
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
    images: [
      { src: "/images/rooms/executive-suite/1.webp", alt: "Bed with a padded headboard and bedside lamps in the Cyrus One Executive Suite, a 46 sqm suite near Islamabad International Airport." },
      { src: "/images/rooms/executive-suite/2.webp", alt: "Close-up of a geometric-patterned pillow resting against the striped pillows in the Cyrus One Executive Suite at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/3.webp", alt: "Dressing table with a lit candle and fresh flowers in the Cyrus One Executive Suite, with an armchair in the foreground near Islamabad Airport." },
      { src: "/images/rooms/executive-suite/4.webp", alt: "Bed with a padded headboard and warm bedside lighting in the Cyrus One Executive Suite at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/5.webp", alt: "Close-up of the dressing table with a candle and fresh flowers in the Cyrus One Executive Suite, part of the hotel's in-room decor." },
      { src: "/images/rooms/executive-suite/6.webp", alt: "Bed with a padded headboard and bedside lamps in the Cyrus One Executive Suite, a 46 sqm room near Islamabad International Airport." },
      { src: "/images/rooms/executive-suite/7.webp", alt: "Close-up of white pillows and a geometric accent cushion on the bed in the Cyrus One Executive Suite at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/8.webp", alt: "Sofa and curated wall art in the Cyrus One Executive Suite's living area, with fresh orchids and a coffee table set with candles." },
      { src: "/images/rooms/executive-suite/9.webp", alt: "Bright living room in the Cyrus One Executive Suite with floor-to-ceiling curtains opening onto a private balcony in Islamabad." },
      { src: "/images/rooms/executive-suite/10.webp", alt: "Cream sofa and armchair beneath framed wall art in the Cyrus One Executive Suite, part of this Islamabad hotel's living space." },
      { src: "/images/rooms/executive-suite/11.webp", alt: "Private balcony with a small table and chairs off the Cyrus One Executive Suite, overlooking the surrounding Islamabad neighborhood." },
      { src: "/images/rooms/executive-suite/12.webp", alt: "Upholstered sofa with wood trim and fresh orchids in the Cyrus One Executive Suite living room at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/13.webp", alt: "Living room with a ceiling fan, sheer curtains, and a wall-mounted TV in the Cyrus One Executive Suite near Islamabad Airport." },
      { src: "/images/rooms/executive-suite/14.webp", alt: "Sofa with layered cushions and framed wall art in the Cyrus One Executive Suite, offering a relaxed lounge space for hotel guests." },
      { src: "/images/rooms/executive-suite/15.webp", alt: "Wooden side table with an orchid beside the sofa in the Cyrus One Executive Suite's living area at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/16.webp", alt: "Balcony seating with a potted orchid overlooking the neighborhood from the Cyrus One Executive Suite at Cyrus One Hotel, Islamabad." },
      { src: "/images/rooms/executive-suite/17.webp", alt: "Kitchenette with cabinetry, a kettle, and wall art in the Cyrus One Executive Suite, offering guests a private cooking space." },
      { src: "/images/rooms/executive-suite/18.webp", alt: "Welcome tray with water, tea, coffee, and glassware in the Cyrus One Executive Suite kitchenette, ready for arriving hotel guests." },
      { src: "/images/rooms/executive-suite/19.webp", alt: "Cyrus-branded hairdryers mounted beside the bathroom mirror in the Cyrus One Executive Suite at Cyrus One Hotel in Islamabad." },
      { src: "/images/rooms/executive-suite/20.webp", alt: "Bathroom sink, mirror, and electrical fittings in the Cyrus One Executive Suite, part of this Islamabad hotel apartment's amenities." },
      { src: "/images/rooms/executive-suite/21.webp", alt: "Folded towels on a chrome rack in the Cyrus One Executive Suite bathroom, part of the hotel's in-room amenities in Islamabad." },
      { src: "/images/rooms/executive-suite/22.webp", alt: "Bathroom in the Cyrus One Executive Suite featuring a handheld shower, sink, and patterned tile flooring near Islamabad Airport." },
    ],
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
    images: [{ src: "/images/rooms/3-bed-executive/1.webp" }],
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
    images: [{ src: "/images/rooms/2-bed-suite/1.webp" }],
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
    images: [
      { src: "/images/rooms/2-bed-presidential-suite/1.webp", alt: "Bedroom view in the Cyrus One 2 Bed Presidential Suite showing floor-to-ceiling curtains and a patterned accent pillow near Islamabad Airport." },
      { src: "/images/rooms/2-bed-presidential-suite/2.webp", alt: "King bed with bedside lamps and wall-mounted air conditioning in the Cyrus One 2 Bed Presidential Suite, a spacious apartment in Islamabad." },
      { src: "/images/rooms/2-bed-presidential-suite/3.webp", alt: "Close-up of the padded headboard and bedside lighting in the Cyrus One 2 Bed Presidential Suite, a spacious hotel apartment in Islamabad." },
      { src: "/images/rooms/2-bed-presidential-suite/4.webp", alt: "Bright bedroom in the Cyrus One 2 Bed Presidential Suite with sheer curtains and a colorful bed runner, near Islamabad International Airport." },
      { src: "/images/rooms/2-bed-presidential-suite/5.webp", alt: "Living area in the Cyrus One 2 Bed Presidential Suite with a flat-screen TV, console table, and mini fridge for guest convenience." },
      { src: "/images/rooms/2-bed-presidential-suite/6.webp", alt: "Lounge seating and wall art in the Cyrus One 2 Bed Presidential Suite's second living room, part of this spacious Islamabad hotel apartment." },
      { src: "/images/rooms/2-bed-presidential-suite/7.webp", alt: "Private kitchenette and doorway into the bedroom in the Cyrus One 2 Bed Presidential Suite, a spacious apartment-style hotel room in Islamabad." },
      { src: "/images/rooms/2-bed-presidential-suite/8.webp", alt: "Cream sofa and curated wall art in the Cyrus One 2 Bed Presidential Suite's second living room, part of the hotel's apartment-style layout." },
      { src: "/images/rooms/2-bed-presidential-suite/9.webp", alt: "Work desk and mirrored wall in the Cyrus One 2 Bed Presidential Suite bedroom, offering a quiet corner near Islamabad International Airport." },
      { src: "/images/rooms/2-bed-presidential-suite/10.webp", alt: "Electric kettle and snacks provided in the Cyrus One 2 Bed Presidential Suite kitchenette, part of the hotel's in-room amenities in Islamabad." },
      { src: "/images/rooms/2-bed-presidential-suite/11.webp", alt: "Bathroom in the Cyrus One 2 Bed Presidential Suite with a rain shower area, sink, and patterned tile flooring in this Islamabad hotel apartment." },
    ],
  },
};
