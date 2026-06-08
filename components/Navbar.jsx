"use client";
import { Hexagon, Calendar, GraduationCap, Menu, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <nav className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-tech-blue/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 z-50">
                    <Hexagon className="w-8 h-8 text-tech-blue fill-tech-blue/10" />
                    <span className="text-xl font-bold tracking-wider text-white uppercase">
                        Gabon <span className="text-tech-blue">HubTech</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/" className={`text-sm font-medium uppercase tracking-widest ${pathname === '/' ? 'text-tech-blue' : 'text-gray-300 hover:text-white'}`}>Accueil</Link>
                    <Link href="/events" className={`text-sm font-medium uppercase tracking-widest ${pathname === '/events' ? 'text-tech-blue' : 'text-gray-300 hover:text-white'}`}>Événements</Link>
                    <Link href="/formations" className={`text-sm font-medium uppercase tracking-widest ${pathname === '/formations' ? 'text-tech-blue' : 'text-gray-300 hover:text-white'}`}>Formations</Link>
                    <Link href="/contact" className={`text-sm font-medium uppercase tracking-widest ${pathname === '/contact' ? 'text-tech-blue' : 'text-gray-300 hover:text-white'}`}>Contact</Link>
                </div>

                {/* Mobile Burger */}
                <button className="md:hidden z-50 p-2 text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={28} className="text-tech-blue" /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <>
                            <motion.div 
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className="fixed inset-0 bg-black/80 z-40" 
                                onClick={() => setIsMobileMenuOpen(false)} 
                            />
                            <motion.div 
                                initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                                className="fixed right-0 top-0 h-full w-[85%] bg-tech-dark z-50 border-l border-tech-blue/20 p-10 flex flex-col"
                            >
                                <div className="mt-20 flex flex-col space-y-8">
                                    <Link href="/" className="text-3xl font-bold text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Accueil</Link>
                                    <Link href="/events" className="text-3xl font-bold text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Événements</Link>
                                    <Link href="/formations" className="text-3xl font-bold text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Formations</Link>
                                    <Link href="/contact" className="text-3xl font-bold text-white uppercase" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
