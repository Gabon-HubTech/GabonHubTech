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
  title: "Gabon HubTech | La Communauté des Passionnés de Technologie",
  description: "Rejoignez Gabon HubTech, l'écosystème dynamique des professionnels, étudiants et passionnés de tech au Gabon et dans la diaspora.",
  keywords: ["Tech Gabon", "Gabon HubTech", "Innovation", "Communauté Digitale", "Développement", "Libreville"],
  openGraph: {
    title: "Gabon HubTech",
    description: "Bâtissons ensemble l'avenir numérique du Gabon.",
    url: "https://gabonhubtech.netlify.app",
    siteName: "Gabon HubTech",
    locale: "fr_GA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabon HubTech",
    description: "Rejoignez la révolution tech gabonaise.",
  },
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