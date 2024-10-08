import { DM_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Footer from "./footer/page";




const poppins = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Add the weights you need here
});
export const metadata = {
  title: "LeadGen Nav",
  description: "We build Outbound Systems That sells for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico" /></head>
      <body className={poppins.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}