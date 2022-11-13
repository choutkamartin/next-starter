import { Header } from "components/Header";
import { Inter } from "@next/font/google";
import "styles/globals.css";

const inter = Inter({
  variable: "--font-inter",
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        <main className="mx-auto max-w-5xl py-24">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
