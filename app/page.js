import Image from "next/image";
import { Hexagon } from 'lucide-react'
import HeroSection from '@/components/HeroSection';
import  AboutSection  from "@/components/AboutSection";
import  MissionSection  from "@/components/MissionSection";
import  ActionsSection  from "@/components/ActionsSection";
import  AudienceSection  from "@/components/AudienceSection";
import  VisionSection  from "@/components/VisionSection";
import  CTASection  from "@/components/CTASection";


export default function Home() {
  return (
    <div className="min-h-screen bg-tech-dark text-white font-sans selection:bg-tech-blue selection:text-white">
      {/* Barre de navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-tech-dark/90 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Hexagon className="w-8 h-8 text-tech-blue fill-tech-blue/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">GH</span>
              </div>
            </div>
            <span className="text-lg font-bold tracking-wide text-white">
              Gabon <span className="text-tech-blue">HubTech</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-sm font-mono text-gray-400 hover:text-tech-blue transition-colors"
            >
              /FORMATIONS
            </a>
            <a
              href="#"
              className="text-sm font-mono text-gray-400 hover:text-tech-blue transition-colors"
            >
              /COMMUNAUTÉ
            </a>
            <a
              href="#"
              className="text-sm font-mono text-gray-400 hover:text-tech-blue transition-colors"
            >
              /CONTACT
            </a>
            <button className="px-4 py-2 border border-tech-blue/50 text-tech-blue text-sm font-mono hover:bg-tech-blue hover:text-white transition-all rounded-sm">
              REJOINDRE
            </button>
          </div>
        </div>
      </nav>

      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <ActionsSection />
        <AudienceSection />
        <VisionSection />
        <CTASection />

        {/* Pied de page */}
        <footer className="bg-tech-dark-lighter py-12 border-t border-white/5">
          <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                <Hexagon className="w-5 h-5 text-tech-blue" />
                <span className="text-xl font-bold tracking-wider text-white">
                  Gabon HubTech
                </span>
              </div>
              <p className="text-gray-500 text-sm mt-2">
                Ensemble, construisons le numérique gabonais de demain.
              </p>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-tech-blue transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-tech-blue transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-tech-blue transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-8 pt-8 border-t border-white/5 text-center">
            <span className="text-gray-600 font-mono text-xs">
              © {new Date().getFullYear()} GABON HUBTECH // TOUS DROITS
              RÉSERVÉS
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}