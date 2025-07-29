import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import ReactLenis from "lenis/react";

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});


export const metadata: Metadata = {
  title: "rainworks.club",
  description: "A student-led and student-governed team working to solve the issues of tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lato.variable} antialiased overflow-x-hidden`}
      >
        <ReactLenis root />
        {children}
      </body>
    </html>
  );
}
