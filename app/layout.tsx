import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Header/Sidebar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cergydentiste.fr"), // Correction ajoutée ici
  title: {
    default: "Dr Barek - Dentiste à Cergy",
    template: "%s | Dentiste Cergy",
  },
  description:
    "Cabinet dentaire moderne à Cergy. Implants, orthodontie et urgences dentaires. Prendre rendez-vous en ligne.",

  openGraph: {
    title: "Dr Barek - Chirurgien Dentiste à Cergy ",
    description:
      "Cabinet équipé des dernières technologies dentaires au cœur de Cergy.",
    images: [
      {
        url: "/banniere-square.jpg",
        width: 400,
        height: 400,
        type: "image/jpeg",
      },

      {
        url: "/banniere-optimised.jpg",
        width: 1200,
        height: 630,
      },
    ],

    url: "https://www.cergydentiste.fr",
    siteName: "DR Barek - Cabinet dentaire à Cergy",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "//banniere-optimised.jpg",
        width: 1200,
        height: 600,
        alt: "Cabinet Dentaire du Dr Barek à Cergy",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.cergydentiste.fr",
  },

  other: {
    "geo.region": "FR-95",
    "geo.placename": "Cergy",
    "place:location:latitude": "49.033885",
    "place:location:longitude": "2.074565",
  },
};

export const viewport: Viewport = {
  // Typage corrigé
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Version plus moderne que "no"
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#e8d6c4" },
    { media: "(prefers-color-scheme: dark)", color: "#e8d6c4" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "DentalClinic",
    name: "Cabinet Dentaire Cergy",
    image: "https://www.cergydentiste.fr/banniere.png",
    priceRange: "€€-€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "10 Square Columbia",
      addressLocality: "Cergy",
      postalCode: "95000",
      addressCountry: "FR",
    },
    telephone: "+33 1 84 24 46 99",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "21:00",
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://exemple.com/twitter-image.png"
        />
        <meta
          name="twitter:image:alt"
          content="Dr Barek - La solution pour une belle dentition"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={` font-MuktaRegular text-[#3F3f3f] bg-[#e8d6c4]`}>
        <Sidebar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
