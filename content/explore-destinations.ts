export interface Destination {
  name: string;
  drive: string;
  image: string;
  alt: string;
  /** Google Maps URL — client to supply. Rendered as a plain span until set. */
  mapUrl?: string;
}

// Alt text is assistant-written — replace with client-supplied descriptions when available.
export const DESTINATIONS: Destination[] = [
  {
    name: "Islamabad International Airport",
    drive: "5–10 min",
    image: "/explore-airport.png",
    alt: "Airplane at Islamabad International Airport, just minutes from Cyrus One.",
    mapUrl: "https://maps.app.goo.gl/FpguJUZEFyXn9ZRH7",
  },
  {
    name: "Centaurus Mall",
    drive: "30–35 min",
    image: "/explore-centaurus.png",
    alt: "Centaurus Mall in Islamabad, a shopping and dining destination accessible from Cyrus One.",
    mapUrl: "https://maps.app.goo.gl/sLfeUXAWB2AbCYuk8",
  },
  {
    name: "Pakistan Monument",
    drive: "35–45 min",
    image: "/explore-pak-monument.png",
    alt: "Pakistan Monument in Islamabad, a cultural landmark visitors can explore while staying at Cyrus One.",
    mapUrl: "https://maps.app.goo.gl/QksB4kwq7HcaaFHX9",
  },
  {
    name: "Lok Virsa Museum",
    drive: "30–35 min",
    image: "/explore-lok-virsa.png",
    alt: "Entrance to Lok Virsa Museum in Islamabad, a cultural attraction recommended by Cyrus One.",
    mapUrl: "https://maps.app.goo.gl/6Mh6U83yTpB8h3wo8",
  },
  {
    name: "Faisal Mosque",
    drive: "40–50 min",
    image: "/explore-faisal-mosque.png",
    alt: "Faisal Mosque in Islamabad with the Margalla Hills behind it, a landmark recommended by Cyrus One.",
    mapUrl: "https://maps.app.goo.gl/UrV6o8jfULi9ChcU7",
  },
  {
    name: "Daman-e-Koh",
    drive: "45–55 min",
    image: "/explore-damn-e-koh.png",
    alt: "Panoramic view of Islamabad from Daman-e-Koh in the Margalla Hills, featured in the Cyrus One Islamabad guide.",
    mapUrl: "https://maps.app.goo.gl/QV1veerduzsZa39o7",
  },
  {
    name: "F-6 / F-7",
    drive: "35–45 min",
    image: "/explore-f6-f7.png",
    alt: "Road sign showing Islamabad's F-6 and F-7 sectors, helping Cyrus One guests navigate the city.",
    mapUrl: "https://maps.app.goo.gl/th33QNJM7XDn2thH6",
  },
  {
    name: "Taxila Museum",
    drive: "40–45 min",
    image: "/explore-taxila-museum.png",
    alt: "Entrance to Taxila Museum near Islamabad, a historical attraction recommended in the Cyrus One travel guide.",
    mapUrl: "https://maps.app.goo.gl/oAfBLAEEFPr7fqbU6",
  },
];
