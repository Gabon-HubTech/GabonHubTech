import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Police pour les titres
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

// Police pour le texte
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata = {
  title: "gabon hubtech",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[#121212] text-gray-200`}>
        <Navbar />
        {children} {/* C'est ici que s'affichera le contenu de tes pages */}
        <Footer />      </body>
    </html>
  );
}