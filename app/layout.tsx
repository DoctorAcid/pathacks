import type { Metadata } from "next";
import { DM_Sans, Poppins, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["200"],
});

export const metadata: Metadata = {
  title: "Pathacks.com",
  description: "Your Launchpad to Innovation Unleash Your Digital Potential",
  keywords: "keyword1, keyword2, keyword3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-full ${dmSans.variable} ${poppins.variable} ${pixelifySans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
