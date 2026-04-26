"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-tech-dark to-tech-dark-lighter relative overflow-hidden">
      {/* Effet de lueur en arrière-plan */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-tech-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-10 tracking-tighter"
        >
          Prêt à propulser le <span className="text-tech-blue">numérique</span> gabonais ?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          {/* Bouton LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/company/gabonhubtech/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-10 py-4 bg-tech-blue text-white font-bold uppercase tracking-widest rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(10,102,194,0.3)] hover:bg-tech-blue-secondary transition-all"
          >
            Rejoindre la communauté
            <ArrowRight className="ml-2 w-5 h-5" />
          </motion.a>

          {/* Bouton Contact (Link interne Next.js) */}
          <Link href="/contact" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest rounded-full flex items-center justify-center hover:bg-white/5 transition-all"
            >
              <Mail className="mr-2 w-5 h-5 text-tech-blue" />
              Nous contacter
            </motion.a>
          </Link>
        </motion.div>

        <p className="mt-12 text-gray-500 font-mono text-xs uppercase tracking-[0.4em]">
          Innovate // Collaborate // Elevate
        </p>
      </div>
    </section>
  );
}