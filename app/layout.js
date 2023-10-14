import "./globals.css";
import { Roboto, Roboto_Condensed } from "next/font/google";
import Link from "next/link";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Lucrerealty",
  description: "Lucrerealty clone app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header />
        <main className="mb-[7vh]">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
