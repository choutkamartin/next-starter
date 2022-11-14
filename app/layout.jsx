import { Header } from "components/Header";
import { Inter, Bebas_Neue } from "@next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "styles/globals.css";
import { Footer } from "components/Footer";

const inter = Inter({
  variable: "--font-inter",
});

const bebas = Bebas_Neue({
  weight: "400",
});

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <title>Next.js 13</title>
      </head>
      <body className={`${inter.variable} font-sans flex flex-col justify-between min-h-screen bg-gray-50`}>
        <Header />
        <main className="mx-auto w-full max-w-5xl py-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
