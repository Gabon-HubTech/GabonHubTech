"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Globe, Zap, Heart, MessageSquare } from 'lucide-react';

const PILLARS = [
  { label: "Réseau Professionnel", value: "LinkedIn", icon: <Linkedin size={20} /> },
  { label: "Collaboration", value: "Open Source", icon: <Github size={20} /> },
  { label: "Espace Virtuel", value: "100% Online", icon: <Globe size={20} /> },
];

export default function CommunitySection() {
  return (
    <section id="community" className="py-24 bg-tech-dark-lighter/20 relative overflow-hidden">
      {/* Effet de lumière diffuse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/5 blur-[120px] rounded-full -z-10"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Texte et Valeurs */}
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-tech-blue/10 border border-tech-blue/20 text-tech-blue text-[10px] font-mono tracking-widest uppercase mb-6"
            >
              <Zap size={12} />
              <span>En pleine croissance</span>
            </motion.div>

            <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">
              Bâtir le futur <br />
              <span className="text-tech-blue italic text-3xl md:text-5xl">Ensemble & à distance</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Gabon HubTech réunit les talents de la diaspora et les passionnés locaux au sein d'un écosystème virtuel unique. Pas besoin de bureaux physiques pour innover.
            </p>

            {/* Cartes de Piliers (Remplace les stats) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PILLARS.map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-tech-dark border border-white/5 hover:border-tech-blue/30 transition-colors"
                >
                  <div className="text-tech-blue mb-3">{pillar.icon}</div>
                  <div className="text-lg font-bold text-white mb-1">{pillar.value}</div>
                  <div className="text-[9px] text-gray-500 uppercase tracking-widest font-mono">{pillar.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Visuel interactif */}
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-3 gap-4 p-6 bg-tech-blue/5 rounded-[2rem] border border-tech-blue/10 rotate-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-tech-dark-lighter rounded-2xl border border-white/5 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-tech-blue/20 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                    <MessageSquare size={20} className="text-white" />
                  </div>
                  <div className="w-full h-full flex items-center justify-center text-tech-accent/10 font-bold text-xl select-none">
                    GHT
                  </div>
                </div>
              ))}
            </div>
            
            {/* Badge flottant LinkedIn */}
            <motion.a 
              href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true" // Ton lien LinkedIn
              target="_blank"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 md:-right-8 p-5 bg-tech-blue rounded-2xl shadow-2xl flex items-center space-x-3 hover:bg-tech-blue-secondary transition-colors cursor-pointer"
            >
              <Linkedin className="text-white" size={24} />
              <div>
                <p className="text-white font-bold text-xs uppercase tracking-tighter">Suivez-nous</p>
                <p className="text-white/70 text-[10px] font-mono">Sur LinkedIn</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}