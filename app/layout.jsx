// Layouts are made differently in 13
// You can use different layouts for different pages

import { Header } from "components/Header";
import { Footer } from "components/Footer";

// Import Inter font from Google Fonts
import { Inter } from "@next/font/google";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import "styles/globals.css";

// This is what you need to do to use imported Inter font
// Keep in mind this font is a variable one
// For correct functionality you then have to use it's classname inside body className
const inter = Inter({
  variable: "--font-inter",
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13</title>
      </head>
      <body
        className={`${inter.variable} flex min-h-screen flex-col justify-between bg-gray-50 font-sans`}
      >
        <Header />
        <main className="mx-auto w-full max-w-7xl py-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
