import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Cyrus One by Trivelles",
  description: "Privacy policy for Cyrus One by Trivelles hotel, Islamabad.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: [
      "When you make a booking or enquiry through our website, we may collect the following personal information:",
      "• Full name",
      "• Email address",
      "• Phone number",
      "• Postal address",
      "• Payment details (processed securely and not stored on our servers)",
      "• Check-in and check-out dates",
      "• Number of guests",
      "• Special requests and preferences",
      "We also collect non-personal information such as browser type, device information, and pages visited through standard web analytics tools.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use the information we collect to:",
      "• Process and confirm your reservation",
      "• Communicate with you regarding your booking",
      "• Send booking confirmation and pre-arrival information",
      "• Process cancellation or modification requests",
      "• Improve our website and services",
      "• Comply with legal obligations",
      "We will not use your personal information for marketing purposes without your explicit consent.",
    ],
  },
  {
    title: "3. Sharing of Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties. We may share your information with:",
      "• Our property management system (ORA PMS) to process your reservation",
      "• Payment processors to handle transactions securely",
      "• Legal authorities if required by law",
      "All third-party service providers are contractually obligated to keep your information confidential and use it only for the purpose of providing services to us.",
    ],
  },
  {
    title: "4. Data Retention",
    content: [
      "We retain your personal data for as long as necessary to fulfil the purposes outlined in this policy, including for legal, accounting, or reporting requirements. Booking records are typically retained for a minimum of 7 years in accordance with applicable regulations.",
    ],
  },
  {
    title: "5. Cookies",
    content: [
      "Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device that help us understand how visitors use our site. You can disable cookies through your browser settings; however, some features of the website may not function properly as a result.",
    ],
  },
  {
    title: "6. Data Security",
    content: [
      "We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. While we strive to protect your data, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "7. Your Rights",
    content: [
      "You have the right to:",
      "• Access the personal information we hold about you",
      "• Request correction of inaccurate data",
      "• Request deletion of your personal data, subject to legal obligations",
      "• Withdraw consent for data processing at any time",
      "To exercise any of these rights, please contact us using the details below.",
    ],
  },
  {
    title: "8. Third-Party Links",
    content: [
      "Our website may contain links to third-party websites such as booking platforms (Booking.com, Agoda, Expedia, Trip.com). We are not responsible for the privacy practices of these sites and encourage you to review their respective privacy policies.",
    ],
  },
  {
    title: "9. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
    ],
  },
  {
    title: "10. Contact Us",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy, please contact us:",
      "Cyrus One by Trivelles",
      "Main Boulevard, near Mumtaz City, Airport Enclave Block A",
      "Islamabad, 44000, Pakistan",
      "Email: contact@cyrusonehotel.com",
      "Phone: +92 341-2205252",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header dark />

      <main className="min-h-screen bg-white px-6 md:px-10 lg:px-16 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl md:text-5xl text-neutral-900 mb-4">
            Privacy Policy
          </h1>

          <p className="text-neutral-900 leading-relaxed my-12">
            Cyrus One by Trivelles is committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            safeguard your data when you visit our website or make a booking
            with us.
          </p>

          <div className="flex flex-col gap-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="font-bold text-xl text-neutral-900 mb-4">
                  {section.title}
                </h2>
                <div className="flex flex-col gap-2">
                  {section.content.map((line, i) => (
                    <p
                      key={i}
                      className="text-neutral-900 leading-relaxed text-sm md:text-base"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
