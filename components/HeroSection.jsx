"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Zap, Globe, Hexagon } from 'lucide-react';
import CodeDecoration from './CodeDecoration';
import DotMatrixBackground from './DotMatrixBackground';
import GridOverlay from './GridOverlay';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-tech-dark overflow-hidden flex items-center">
      <GridOverlay />
      <DotMatrixBackground />

      {/* Extraits de code décoratifs */}
      <CodeDecoration text="<gabon_hubtech />" top="15%" left="5%" delay={0.5} />
      <CodeDecoration text="{ innovation: true }" bottom="20%" left="10%" delay={0.7} />
      <CodeDecoration text="// digital_inclusion" top="25%" right="8%" delay={0.9} />
      <CodeDecoration text="await future()" bottom="15%" right="15%" delay={1.1} />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-tech-dark-lighter/20 to-transparent transform skew-x-[-12deg] origin-top translate-x-1/3 pointer-events-none border-l border-tech-blue/10" />

      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contenu de gauche */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center space-x-2 mb-6">
              <span className="h-[1px] w-8 bg-tech-blue"></span>
              <span className="text-tech-blue font-mono text-sm tracking-widest uppercase">
                Écosystème Tech Gabonais
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tighter">
              Unir les talents, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tech-blue to-tech-blue-secondary">
                former et innover
              </span>{' '}
              <br />
              pour le numérique.
            </h1>

            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg border-l-2 border-tech-blue/30 pl-6">
              Hub initiateur du numérique au Gabon, au service de l'inclusion
              digitale et de l'innovation locale.
            </p>

            {/* Boutons Corrigés */}
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative px-8 py-4 bg-tech-blue text-white font-bold uppercase tracking-widest rounded-sm text-center flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full"></div>
                <span className="relative flex items-center">
                  Rejoindre la communauté
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-tech-blue text-tech-blue font-bold uppercase tracking-widest hover:bg-tech-blue/10 transition-colors rounded-sm text-center flex items-center justify-center"
              >
                Collaborer avec nous
              </motion.a>
            </div>
          </motion.div>

          {/* Visuel de droite */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[500px]"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-tech-blue/10 rounded-full blur-[100px] animate-pulse" />

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] border border-tech-blue/10 rounded-full"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-tech-dark p-3 border border-tech-blue/30 rounded-xl shadow-[0_0_20px_rgba(10,102,194,0.2)]">
                <Cpu className="w-6 h-6 text-tech-blue" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-tech-dark p-3 border border-tech-blue/30 rounded-xl shadow-[0_0_20px_rgba(10,102,194,0.2)]">
                <Zap className="w-6 h-6 text-tech-blue" />
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] border border-dashed border-tech-blue/20 rounded-full"
            >
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-tech-dark p-3 border border-tech-blue/30 rounded-xl shadow-[0_0_20px_rgba(10,102,194,0.2)]">
                <Globe className="w-6 h-6 text-tech-blue" />
              </div>
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 bg-tech-blue/20 blur-2xl rounded-full"></div>
              <Hexagon className="w-20 h-20 text-tech-blue fill-tech-blue/5 animate-pulse" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}