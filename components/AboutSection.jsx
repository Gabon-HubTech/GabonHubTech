"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="py-20 bg-tech-dark relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            className="relative bg-tech-dark-lighter/30 border border-tech-blue/20 p-8 md:p-12 rounded-lg backdrop-blur-sm"
          >
            {/* Coins décoratifs */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-tech-blue"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-tech-blue"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-tech-blue"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-tech-blue"></div>

            <div className="text-center">
              <h2 className="text-tech-blue font-mono text-sm tracking-widest uppercase mb-4">
                / QUI SOMMES-NOUS ?
              </h2>
              <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
                <strong className="text-tech-blue font-bold">
                  Gabon HubTech
                </strong>{' '}
                est un hub initiateur dédié au développement du numérique au
                Gabon. Nous rassemblons talents, entreprises et institutions
                pour construire un écosystème numérique
                <span className="text-tech-blue-secondary"> inclusif</span>,
                <span className="text-tech-blue-secondary"> structuré</span> et
                à<span className="text-tech-blue-secondary"> fort impact</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}