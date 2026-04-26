"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Linkedin, Globe, CheckCircle, MessageSquare, Users, AlertCircle } from 'lucide-react';
import DotMatrixBackground from '@/components/DotMatrixBackground';

export default function ContactPage() {
    const [status, setStatus] = useState('idle'); // idle, sending, success, error

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // Récupération des données via l'objet FormData
        const formData = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value,
        };

        try {
            // URL de ton API sur Render
            const API_URL = "https://gabon-hubtech-api.onrender.com/api/contact";

            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setStatus('success');
            } else {
                console.error("Erreur API:", result.error);
                setStatus('error');
            }
        } catch (error) {
            console.error("Erreur réseau:", error);
            setStatus('error');
        }
    };

    return (
        <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
            <DotMatrixBackground />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="max-w-3xl mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center space-x-2 text-tech-blue mb-4"
                    >
                        <Globe size={20} className="animate-pulse" />
                        <span className="font-mono text-sm tracking-[0.3em] uppercase">Communauté Digitale</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tighter">
                        Rejoignez le <span className="text-tech-blue italic">Réseau</span>
                    </h1>
                    <p className="text-tech-accent/60 text-lg">
                        Gabon HubTech est une communauté 100% virtuelle. Où que vous soyez dans le monde, connectons-nous pour bâtir l'écosystème tech gabonais.
                    </p>
                </div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="max-w-2xl mx-auto text-center p-16 border border-tech-blue/30 rounded-3xl bg-tech-blue/5 backdrop-blur-md"
                    >
                        <CheckCircle className="w-20 h-20 text-tech-blue mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-white mb-4">Signal Transmis</h2>
                        <p className="text-gray-400 mb-8 text-lg">Votre message a été enregistré et envoyé avec succès. On vous recontacte très vite !</p>
                        <button
                            onClick={() => setStatus('idle')}
                            className="px-8 py-3 border border-tech-blue text-tech-blue rounded-full hover:bg-tech-blue hover:text-white transition-all font-bold text-sm uppercase tracking-widest"
                        >
                            Envoyer un autre signal
                        </button>
                    </motion.div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        {/* Formulaire */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-2/3 w-full"
                        >
                            <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-tech-blue uppercase tracking-[0.2em] ml-2">Votre Nom</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="Identité numérique"
                                            className="w-full bg-tech-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/50 transition-all"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-mono text-tech-blue uppercase tracking-[0.2em] ml-2">Email de contact</label>
                                        <input
                                            required
                                            type="email"
                                            placeholder="votre@email.com"
                                            className="w-full bg-tech-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/50 transition-all"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-mono text-tech-blue uppercase tracking-[0.2em] ml-2">Message</label>
                                    <textarea
                                        required
                                        rows="6"
                                        placeholder="Comment souhaitez-vous contribuer à la communauté ?"
                                        className="w-full bg-tech-dark border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-tech-blue focus:ring-1 focus:ring-tech-blue/50 transition-all resize-none"
                                    ></textarea>
                                </div>

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20"
                                    >
                                        <AlertCircle size={18} />
                                        <p className="text-sm">Une erreur est survenue. Vérifiez votre connexion ou réessayez plus tard.</p>
                                    </motion.div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="group relative px-12 py-4 bg-tech-blue overflow-hidden rounded-xl font-bold text-white transition-all hover:shadow-[0_0_30px_rgba(10,102,194,0.4)] disabled:opacity-50"
                                >
                                    <span className="relative z-10 flex items-center gap-3 tracking-wider uppercase text-sm">
                                        {status === 'sending' ? 'TRANSMISSION...' : 'ENVOYER LE SIGNAL'}
                                        <Send size={18} />
                                    </span>
                                </button>
                            </form>
                        </motion.div>

                        {/* Hub Social */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:w-1/3 w-full space-y-6"
                        >
                            <a
                                href="https://www.linkedin.com/company/gabonhubtech/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-8 rounded-3xl bg-tech-blue/10 border border-tech-blue/30 hover:bg-tech-blue/20 transition-all group"
                            >
                                <Linkedin className="text-tech-blue mb-4 group-hover:scale-110 transition-transform" size={32} />
                                <h4 className="text-white font-bold text-xl mb-2">LinkedIn</h4>
                                <p className="text-gray-400 text-sm mb-4">Suivez nos actualités et connectez-vous avec les membres.</p>
                                <span className="text-tech-blue font-mono text-xs font-bold uppercase tracking-widest">Voir la page →</span>
                            </a>

                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                <Users className="text-tech-blue mb-4" size={28} />
                                <h4 className="text-white font-bold text-lg mb-2">Rejoindre l'équipe</h4>
                                <p className="text-gray-400 text-sm">Nous sommes toujours à la recherche de mentors et de contributeurs passionnés.</p>
                            </div>

                            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
                                <Mail className="text-tech-blue mb-4" size={28} />
                                <h4 className="text-white font-bold text-lg mb-2">Email</h4>
                                <p className="text-gray-400 text-sm italic">contact@gabonhubtech.com</p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </div>
        </main>
    );
}