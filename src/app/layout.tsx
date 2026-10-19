import type { Metadata } from "next";
import "./globals.css";
import { displayFont, sansFont } from "./fonts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: {
    default: "Picture Rituals — Wedding Photography in Jamnagar, Gujarat",
    template: "%s | Picture Rituals",
  },
  description:
    "Picture Rituals is a wedding photography and film studio based in Jamnagar, Gujarat. Honest, cinematic storytelling for weddings, receptions, pre-weddings and traditional ceremonies.",
  keywords: [
    "wedding photographer Jamnagar",
    "Gujarat wedding photography",
    "Rajkot wedding photographer",
    "pre-wedding photographer Gujarat",
    "Picture Rituals",
    "Jay Rathod",
  ],
  icons: {
    icon: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Picture Rituals — Luxury Wedding Photography",
    description:
      "Cinematic wedding photography & films from Jamnagar, Gujarat. Led by Jay Rathod.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${sansFont.variable}`}>
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
