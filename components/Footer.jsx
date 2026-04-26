"use client";
import React from 'react';
import { Hexagon, Linkedin, Twitter, Facebook, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-tech-dark-lighter py-12 border-t border-white/5 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo et Slogan */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-3">
              <div className="relative">
                <Hexagon className="w-6 h-6 text-tech-blue fill-tech-blue/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[8px] font-bold text-white">GHT</span>
                </div>
              </div>
              <span className="text-xl font-bold tracking-wider text-white uppercase">
                Gabon <span className="text-tech-blue">HubTech</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              L'épicentre de l'innovation technologique au Gabon. Ensemble, bâtissons l'avenir numérique.
            </p>
          </div>

          {/* Liens Sociaux */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-tech-blue hover:bg-tech-blue/10 transition-all border border-white/10">
                <Linkedin size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-tech-blue hover:bg-tech-blue/10 transition-all border border-white/10">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-tech-blue hover:bg-tech-blue/10 transition-all border border-white/10">
                <Facebook size={20} />
              </a>
            </div>
            
            {/* Bouton retour en haut */}
            <button 
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-xs font-mono text-tech-blue hover:text-white transition-colors group"
            >
              <span className="tracking-widest">RETOUR EN HAUT</span>
              <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Ligne de séparation et Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-600 font-mono text-[10px] tracking-[0.2em]">
            © {new Date().getFullYear()} GABON HUBTECH // L'INNOVATION SANS LIMITES
          </span>
          
          <div className="flex space-x-6 text-[10px] font-mono text-gray-600">
            <a href="#" className="hover:text-tech-blue transition-colors">POLITIQUE DE CONFIDENTIALITÉ</a>
            <a href="#" className="hover:text-tech-blue transition-colors">MENTIONS LÉGALES</a>
          </div>
        </div>
      </div>
      
      {/* Petit effet décoratif en arrière-plan */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-tech-blue/5 blur-[80px] -z-10 pointer-events-none"></div>
    </footer>
  );
}