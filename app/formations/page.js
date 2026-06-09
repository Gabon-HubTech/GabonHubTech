"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronRight, Mail } from 'lucide-react';
import DotMatrixBackground from '@/components/DotMatrixBackground';
import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export default function FormationsPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const result = await apiFetch('/api/formations');
                if (result.success) {
                    setCourses(result.data);
                }
            } catch (error) {
                console.error("Erreur chargement formations:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchCourses();
    }, []);

    return (
        <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
            <DotMatrixBackground />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center space-x-2 text-tech-blue mb-4"
                    >
                        <BookOpen size={20} />
                        <span className="font-mono text-sm tracking-[0.3em] uppercase">Academy</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
                        Propulse ta <span className="text-tech-blue italic">Carrière</span>
                    </h1>
                    <p className="text-tech-accent/60 text-lg leading-relaxed">
                        Des programmes intensifs conçus avec les experts du Gabon pour maîtriser les technologies les plus demandées du marché.
                    </p>
                </div>

                {/* Grille de Formations */}
                {loading ? (
                    <p className="text-white">Chargement des formations...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-tech-dark-lighter/50 border border-white/10 p-8 rounded-2xl hover:border-tech-blue/50 transition-all duration-500"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${course.color || 'from-blue-500 to-cyan-400'} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`} />

                                <div className="text-tech-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <BookOpen className="w-8 h-8" />
                                </div>

                                <div className="flex items-center space-x-2 mb-3">
                                    <span className="text-[10px] font-mono px-2 py-1 bg-tech-blue/10 text-tech-blue border border-tech-blue/20 rounded">
                                        {course.level}
                                    </span>
                                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                                        {course.duration}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-tech-blue transition-colors">
                                    {course.title}
                                </h3>

                                <div className="text-gray-400 text-sm mb-4">
                                    {course.description && course.description.length > 100 ? `${course.description.substring(0, 100)}...` : course.description}
                                </div>

                                <Link 
                                    href={`/formations/${course._id || course.id}`}
                                    className="flex items-center space-x-2 text-sm font-bold text-white/40 group-hover:text-white transition-colors"
                                >
                                    <span>VOIR LE PROGRAMME</span>
                                    <ChevronRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}
