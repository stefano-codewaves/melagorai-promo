import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Melagorai - Registrati per il tuo sconto",
  description: "Registrati e ottieni il 10% di sconto sul tuo primo ordine di prodotti Melagorai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
