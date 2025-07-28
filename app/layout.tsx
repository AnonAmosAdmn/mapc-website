import type { Metadata } from "next";
import React from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Monad Ape Punks Club",
  description: "Monad Ape Punks Club (MAPC) - A limited-edition NFT collection blending the rebellious spirit of CryptoPunks with the alpha energy of Bored Apes, powered by Monad's ultra-fast, low-cost blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Monad Ape Punks Club</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black`}>
        <Theme 
          appearance="dark" 
          accentColor="indigo" 
          grayColor="slate" 
          radius="full"
          style={{ 
            backgroundColor: '#000000',
            minHeight: '100vh',
            color: '#ffffff' // Ensure text contrast
          }}
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            {children}
            <Footer/>
          </div>
        </Theme>
      </body>
    </html>
  );
}