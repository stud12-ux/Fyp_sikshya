// src/layout.tsx
import "./globals.css"; // or wherever your CSS file is
import { Nunito } from "next/font/google";
import { twMerge } from "tailwind-merge";
export const metadata = {
    title: "My App",
    description: "Your app description",
  };

  const jakarta =Nunito({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800", "900"],
    variable: "--font-sans",
  });
  
  export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="en">
        <body className={twMerge(jakarta.variable, "antialiased font-sans")}>
          {children}
        </body>
      </html>
    );
  }
  