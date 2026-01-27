"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Code, Network, ArrowUpRight } from 'lucide-react';

const actions = [
  {
    title: 'Formations & Bootcamps',
    icon: BookOpen,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    title: 'Communauté de Talents',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Hackathons & Projets',
    icon: Code,
    color: 'from-orange-500 to-yellow-400',
  },
  {
    title: 'Mise en Relation',
    icon: Network,
    color: 'from-green-500 to-emerald-400',
  },
];

export default function ActionsSection() {
  return (
    <section className="py-24 bg-tech-dark-lighter/20 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Nos <span className="text-tech-blue">Actions</span>
            </h2>
            <p className="text-gray-400">
              Des initiatives concrètes pour l'écosystème.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-1 bg-gray-800 mx-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action, index) => (
            <motion.div
              key={index}
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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
              className="group relative bg-tech-dark border border-white/5 hover:border-tech-blue/50 p-6 rounded-xl transition-all duration-300 overflow-hidden"
            >
              {/* Fond dégradé au survol */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-12 h-12 bg-tech-dark-lighter rounded-lg flex items-center justify-center mb-4 group-hover:bg-tech-blue group-hover:text-white transition-colors duration-300">
                  <action.icon className="w-6 h-6 text-tech-blue group-hover:text-white" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-tech-blue transition-colors">
                  {action.title}
                </h3>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1">
                  <ArrowUpRight className="w-5 h-5 text-tech-blue" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}