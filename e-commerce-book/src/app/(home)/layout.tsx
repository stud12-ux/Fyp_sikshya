import type { Metadata } from "next";
// layout.tsx
import { Nunito } from "next/font/google";

import "../globals.css";
import { twMerge } from "tailwind-merge";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import Link from "next/link";
import ToastProvider from "@/components/ToastProvider";

const jakarta =Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Sikshya",
    template: "%s | Sikshya",
  },
  description:
    "Sikshya – Where books find new homes, and knowledge never goes to waste.",
  icons: {
    icon: "/Sikshya.png", // Path to your favicon
    apple: "/Sikshya.png", // Path to your apple touch icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(jakarta.variable, "antialiased font-sans")}>
        <Header />
        {children}
        <ToastProvider />
        <Footer />
        <div className="bg-[#03213C]">
          <div className="flex lg:flex-row flex-col container items-center justify-between  w-full py-3 lg:px-0 px-4 ">
            <p className="text-primary text-xs md:text-sm text-center lg:px-0 px-10">
              © 2022 Arihant. All Rights Reserved.
    
            </p>
            <div className="flex items-center text-primary gap-4">
              <Link href={"/"} className="hover:underline text-xs md:text-sm">
                Terms of Service
              </Link>
              <div className="size-2 rounded-full bg-primary"></div>
              <Link href={"/privacy-policy"} className="hover:underline text-xs md:text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
