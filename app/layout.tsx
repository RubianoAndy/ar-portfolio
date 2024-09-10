import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./global/components/navbar/navbar";
import Footer from "./global/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar/>
          
          <div className="flex-grow pt-20">
            {children}
          </div>

          <Footer pageName={process.env.NEXT_PUBLIC_SITE_NAME || 'undefined'} developer={process.env.NEXT_PUBLIC_DEVELOPER_NAME || 'undefined'} email={process.env.NEXT_PUBLIC_EMAIL || 'default@example.com'}/>
        </div>
      </body>
    </html>
  );
}
