"use client"

import React from 'react';
import { Users, GraduationCap, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';
import HexagonCard from './HexagonCard';

const missions = [
  {
    title: 'Unir',
    description:
      "Rassembler les talents numériques du Gabon et les acteurs de l'écosystème.",
    icon: Users,
  },
  {
    title: 'Former',
    description:
      'Former aux compétences numériques les plus demandées (IA, développement, data, cybersécurité…).',
    icon: GraduationCap,
  },
  {
    title: 'Innover',
    description: 'Co-créer des solutions numériques adaptées aux défis locaux.',
    icon: Lightbulb,
  },
];

export default function MissionSection() {
  return (
    <section className="py-24 bg-tech-dark relative overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-tech-blue/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
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
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Notre <span className="text-tech-blue">Mission</span>
          </motion.h2>
          <div className="w-20 h-1 bg-tech-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8">
          {missions.map((mission, index) => (
            <HexagonCard key={mission.title} {...mission} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </section>
  );
}