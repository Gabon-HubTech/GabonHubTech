"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Rocket, Users } from 'lucide-react';

const SERVICES = [
    {
        title: "HubTech Academy",
        description: "Formations intensives en développement web, mobile et design pour propulser votre carrière.",
        icon: <GraduationCap className="w-10 h-10" />,
        link: "/formations",
        cta: "Découvrir les cours"
    },
    {
        title: "Événements & Meetups",
        description: "Rejoignez nos hackathons et conférences pour networker avec l'élite de la tech gabonaise.",
        icon: <Calendar className="w-10 h-10" />,
        link: "/events",
        cta: "Voir le calendrier"
    },
    {
        title: "Accompagnement Startup",
        description: "Conseil stratégique et technique pour transformer vos idées en produits scalables.",
        icon: <Rocket className="w-10 h-10" />,
        link: "/#contact",
        cta: "Lancer un projet"
    }
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-tech-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase tracking-widest">
                        Nos <span className="text-tech-blue">Piliers</span>
                    </h2>
                    <div className="h-1 w-20 bg-tech-blue mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="p-8 rounded-2xl bg-tech-dark-lighter/30 border border-white/5 hover:border-tech-blue/50 transition-all group"
                        >
                            <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <Link
                                href={service.link}
                                className="inline-flex items-center text-sm font-bold text-tech-blue hover:text-white transition-colors"
                            >
                                {service.cta.toUpperCase()} <span className="ml-2">→</span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}