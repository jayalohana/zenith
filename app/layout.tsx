import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
});
export const metadata: Metadata = {
  title: "Zenith",
  description: "An AI powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
        {children} .
      </body>
    </html>
  );
}
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//daily
//dasiu
//daily
//dasiu
//daily
