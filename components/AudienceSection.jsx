"use client"

import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Briefcase,
  Building,
  Globe,
  GraduationCap,
  Building2,
} from 'lucide-react';

const audiences = [
  {
    label: 'Jeunes Talents',
    icon: User,
  },
  {
    label: 'Étudiants',
    icon: GraduationCap,
  },
  {
    label: 'Professionnels',
    icon: Briefcase,
  },
  {
    label: 'PME & Startups',
    icon: Building,
  },
  {
    label: 'Grandes Entreprises',
    icon: Building2,
  },
  {
    label: 'Institutions',
    icon: Globe,
  },
];

export default function AudienceSection() {
  return (
    <section className="py-20 bg-tech-dark relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            À qui s'adresse{' '}
            <span className="text-tech-blue">Gabon HubTech</span> ?
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {audiences.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.05,
              }}
              className="group flex items-center space-x-3 bg-tech-dark-lighter/50 border border-white/10 px-6 py-3 rounded-full hover:border-tech-blue hover:bg-tech-blue/10 transition-all duration-300 cursor-default"
            >
              <item.icon className="w-5 h-5 text-gray-400 group-hover:text-tech-blue transition-colors" />
              <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}