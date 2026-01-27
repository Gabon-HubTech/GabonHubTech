"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { BoxIcon } from 'lucide-react';

export default function HexagonCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      className="relative group w-full max-w-[320px] mx-auto"
    >
      {/* Conteneur en forme d'hexagone */}
      <div
        className="relative bg-tech-dark-lighter p-1 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(10,102,194,0.2)]"
        style={{
          clipPath:
            'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          aspectRatio: '1/1.15',
        }}
      >
        {/* Bordure/Arrière-plan du contenu intérieur */}
        <div
          className="absolute inset-[2px] bg-tech-dark flex flex-col items-center justify-center p-8 text-center"
          style={{
            clipPath:
              'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
          }}
        >
          {/* Conteneur d'icône lumineux */}
          <div className="mb-6 relative">
            <div className="absolute inset-0 bg-tech-blue blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
            <Icon className="w-12 h-12 text-tech-blue relative z-10" />
          </div>

          <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">{description}</p>

          {/* Lignes décoratives */}
          <div className="absolute bottom-12 w-12 h-[1px] bg-tech-blue/30" />
        </div>
      </div>

      {/* Accents de coins décoratifs à l'extérieur du clip-path */}
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-tech-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#0A66C2]" />
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-tech-blue rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_10px_#0A66C2]" />
    </motion.div>
  );
}