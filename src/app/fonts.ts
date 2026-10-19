import localFont from "next/font/local";

export const displayFont = localFont({
  src: "./fonts/CormorantGaramond-var.woff2",
  weight: "300 600",
  style: "normal",
  variable: "--font-display",
  display: "swap",
});

export const sansFont = localFont({
  src: "./fonts/Jost-var.woff2",
  weight: "300 500",
  style: "normal",
  variable: "--font-sans",
  display: "swap",
});
