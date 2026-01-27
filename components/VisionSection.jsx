"use client"

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionSection() {
  return (
    <section className="py-24 bg-tech-dark relative overflow-hidden">
      {/* Grille d'arrière-plan */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#0A66C2 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            className="relative border-y border-tech-blue/30 py-16"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-tech-dark px-4 text-tech-blue font-mono text-sm uppercase tracking-widest">
              Notre Vision
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              "Bâtir un écosystème numérique gabonais{' '}
              <span className="text-tech-blue">fort</span>,{' '}
              <span className="text-tech-blue">inclusif</span> et{' '}
              <span className="text-tech-blue">compétitif</span>, capable de
              rayonner en Afrique et dans le monde."
            </h2>

            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-tech-dark px-4 text-tech-blue/50">
              ◆
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}