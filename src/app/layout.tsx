import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bellavista.vercel.app"),
  title: {
    default: "Bella Vista | Authentic Italian Restaurant",
    template: "%s | Bella Vista",
  },
  description:
    "Experience authentic Italian cuisine crafted with passion. Reserve your table and enjoy handcrafted dishes in an elegant atmosphere.",
  keywords: [
    "Italian Restaurant",
    "Fine Dining",
    "Restaurant",
    "Italian Food",
    "Pizza",
    "Pasta",
    "Bella Vista",
    "Reservation",
  ],
  authors: [
    {
      name: "William Santana",
    },
  ],
  creator: "William Santana",
  openGraph: {
    title: "Bella Vista",
    description:
      "Authentic Italian dining experience with handcrafted cuisine.",
    url: "https://bellavista.vercel.app",
    siteName: "Bella Vista",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1257,
        height: 649,
        alt: "Bella Vista Restaurant",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://bellavista.vercel.app",
  },
  verification: {
    google: "...", // Google Indexing
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          id="restaurant-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Bella Vista",
              servesCuisine: "Italian",
              telephone: "+1 555-123-4567",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Bella Vista Avenue",
              },
            }),
          }}
        />
        ;
      </body>
    </html>
  );
}
