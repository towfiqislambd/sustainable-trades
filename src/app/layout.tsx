import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { Toaster } from "react-hot-toast";
import AosProvider from "@/Provider/AosProvider/AosProvider";
import UseSiteSettings from "@/Components/UseSiteSettings/UseSiteSettings";
import QueryProvider from "@/Provider/QueryProvider/QueryProvider";
import AuthProvider from "@/Provider/AuthProvider/AuthProvider";

// Fonts
const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

// Metadata
export const metadata: Metadata = {
  title: "Sustainable Trades",
  description: "An E-commerce Website",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>
        <QueryProvider>
          <AuthProvider>
            <AosProvider>
              <Toaster />
              {/* <UseSiteSettings /> */}
              {children}
            </AosProvider>
            <Toaster />
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
