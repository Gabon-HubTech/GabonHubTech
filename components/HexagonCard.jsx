"use client";
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import Link from 'next/link';

export default function HexagonCard({ title, subtitle, description, iconName, id }) {
  const Icon = LucideIcons[iconName] || LucideIcons.Calendar;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative w-72 h-80 flex items-center justify-center group"
    >
      <div className="absolute inset-0 bg-tech-blue/10 group-hover:bg-tech-blue/20 transition-colors duration-300 clip-hexagon border-2 border-tech-blue/30 shadow-[0_0_15px_rgba(10,102,194,0.2)]" />

      <div className="relative z-10 text-center p-6 flex flex-col items-center">
        <div className="mb-4 text-tech-blue">
          <Icon size={40} />
        </div>
        <h3 className="text-white font-bold text-xl mb-1">{title}</h3>
        <p className="text-tech-blue text-sm mb-3 font-mono">{subtitle}</p>
        <p className="text-tech-accent/60 text-sm leading-tight">
            {description && description.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>

        <Link href={`/events/${id}`} className="mt-4 text-xs font-bold text-tech-blue uppercase tracking-widest hover:text-white transition-colors">
          En savoir plus →
        </Link>
      </div>
    </motion.div>
  );
}
