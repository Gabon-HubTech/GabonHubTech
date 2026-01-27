"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-tech-dark to-tech-dark-lighter relative overflow-hidden">
      {/* Effet de lueur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
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
          className="text-3xl md:text-4xl font-bold text-white mb-8"
        >
          Envie de vous former, de collaborer ou <br /> de rejoindre la
          communauté ?
        </motion.h2>

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
          transition={{
            delay: 0.1,
          }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="px-8 py-4 bg-tech-blue text-white font-bold rounded-sm hover:bg-tech-blue-secondary transition-colors flex items-center justify-center">
            Rejoindre Gabon HubTech
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>

          <button className="px-8 py-4 border border-white/20 text-white font-bold rounded-sm hover:bg-white/5 transition-colors flex items-center justify-center">
            <Mail className="mr-2 w-5 h-5" />
            Nous contacter
          </button>
        </motion.div>
      </div>
    </section>
  );
}