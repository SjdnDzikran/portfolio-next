import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lexendMega = localFont({
  src: "../../public/fonts/Lexend_Mega/LexendMega-VariableFont_wght.ttf",
  variable: "--font-lexend-mega",
});

const spaceMono = localFont({
  src: [
    {
      path: "../../public/fonts/Space_Mono/SpaceMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Space_Mono/SpaceMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Space_Mono/SpaceMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/Space_Mono/SpaceMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Dzikran Azka Sajidan - Software Engineer",
  description: "The portfolio of Dzikran Azka Sajidan, a passionate software engineer specializing in mobile app development.",
  keywords: ["portfolio", "software engineer", "mobile app developer", "flutter", "dart"],
  authors: [{ name: "Dzikran Azka Sajidan" }],
  openGraph: {
    title: "Dzikran Azka Sajidan - Software Engineer",
    description: "The portfolio of Dzikran Azka Sajidan, a passionate software engineer specializing in mobile app development.",
    url: "https://your-domain.com",
    siteName: "Dzikran Azka Sajidan's Portfolio",
    // images: [
    //   {
    //     url: "https://your-domain.com/og-image.png", // Path to your OG image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dzikran Azka Sajidan - Software Engineer",
    description: "The portfolio of Dzikran Azka Sajidan, a passionate software engineer specializing in mobile app development.",
    creator: "@sjdn_dzikran",
    // images: ["https://your-domain.com/og-image.png"], // Path to your OG image
  },
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon.ico", sizes: "any", rel: "shortcut icon" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${lexendMega.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
