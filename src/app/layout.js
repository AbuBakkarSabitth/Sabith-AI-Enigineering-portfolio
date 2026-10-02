import { Geist } from "next/font/google";
import "./globals.css";
import { site } from "../data/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | AI & Backend Engineering Portfolio`,
  description: site.description,
  openGraph: {
    title: `${site.name} | AI & Backend Engineering Portfolio`,
    description: site.description,
    url: site.url,
    siteName: `${site.shortName}.dev`,
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
