import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { environment } from "./global/utils/environment";

import Navbar from "./global/components/navbar/navbar";
import Footer from "./global/components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: environment.site_name,
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

          <Footer pageName={environment.site_name} developer={environment.developer_name} email={environment.email}/>
        </div>
      </body>
    </html>
  );
}
