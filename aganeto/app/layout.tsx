import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Lora, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import CookieBanner from "@/components/CookieBanner";
import { ContactModalProvider } from "@/components/ContactModalProvider";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});



export const metadata: Metadata = {
  title: "DCPH Digital - Build Bigger, Build Faster, Pay 60% Less",
  description: "Stop paying European agencies $60,000+ for simple MVPs. Get Indonesian talent with European leadership. 25 years experience, 500+ projects delivered, 3x faster delivery at 40% of local cost.",
  keywords: ["star outsourcing", "software development", "MVP development", "cost savings", "European quality", "Indonesian talent"],
  authors: [{ name: "PT. DCPH Digital Consulting" }],
  openGraph: {
    title: "DCPH Digital - Build Bigger, Build Faster, Pay 60% Less",
    description: "Stop paying European agencies $60,000+ for simple MVPs. Get Indonesian talent with European leadership.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DCPH Digital - Build Bigger, Build Faster, Pay 60% Less",
    description: "Stop paying European agencies $60,000+ for simple MVPs. Get Indonesian talent with European leadership.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${lora.variable} ${mono.variable}`}>
      <body className="bg-background text-foreground antialiased">
        <ContactModalProvider>
          <Header />
          {children}
          <Footer />
          <WhatsAppWidget />
          <CookieBanner />
        </ContactModalProvider>
      </body>
    </html>
  );
}
