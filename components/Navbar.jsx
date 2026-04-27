"use client";
import { Hexagon, ChevronDown, Calendar, GraduationCap, Laptop, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Bloquer le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Communauté', href: '/#community' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-tech-dark/90 backdrop-blur-md border-b border-white/5">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* LOGO */}
                <Link href="/" className="group z-[60]" onClick={() => setIsMobileMenuOpen(false)}>
                    <div className="flex items-center space-x-3">
                        <Hexagon className="w-8 h-8 text-tech-blue fill-tech-blue/10" />
                        <span className="text-xl font-bold tracking-wider text-white uppercase italic">
                            Gabon <span className="text-tech-blue">HubTech</span>
                        </span>
                    </div>
                </Link>

                {/* NAVIGATION DESKTOP */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:text-tech-blue ${pathname === link.href ? 'text-tech-blue' : 'text-gray-400'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a href="https://www.linkedin.com/company/gabonhubtech/" target="_blank" className="px-5 py-2 border border-tech-blue text-tech-blue text-[10px] font-bold uppercase rounded-sm hover:bg-tech-blue hover:text-white transition-all">
                        Rejoindre
                    </a>
                </div>

                {/* BOUTON BURGER MOBILE */}
                <button
                    className="md:hidden z-[60] p-2 text-white bg-white/5 rounded-lg border border-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* --- MENU MOBILE OVERLAY (LE VRAI FIX) --- */}
                <div className={`fixed inset-0 z-[50] md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>

                    {/* Fond d'obscurcissement total */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />

                    {/* Panneau Latéral (Noir OLED) */}
                    <div className={`absolute right-0 top-0 h-full w-[85%] bg-[#050505] border-l border-white/10 shadow-[-50px_0_100px_rgba(0,0,0,0.9)] transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                        <div className="flex flex-col h-full p-10 pt-32">
                            <span className="text-[10px] font-mono text-tech-blue uppercase tracking-[0.5em] mb-10 border-b border-white/5 pb-4">Menu Principal</span>

                            <div className="space-y-8">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`block text-4xl font-bold uppercase tracking-tighter transition-all ${pathname === link.href ? 'text-tech-blue translate-x-2' : 'text-white/60 hover:text-white'}`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <div className="mt-12 space-y-6 pt-12 border-t border-white/5">
                                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.5em] block mb-4">Ressources</span>

                                <Link href="/events" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg mr-4 group-hover:border-tech-blue/50">
                                        <Calendar className="w-5 h-5 text-tech-blue" />
                                    </div>
                                    <span className="text-lg text-white/80 font-semibold tracking-tight">Événements</span>
                                </Link>

                                <Link href="/formations" className="flex items-center group" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center rounded-lg mr-4 group-hover:border-tech-blue/50">
                                        <GraduationCap className="w-5 h-5 text-tech-blue" />
                                    </div>
                                    <span className="text-lg text-white/80 font-semibold tracking-tight">GHT Academy</span>
                                </Link>
                            </div>

                            {/* Bouton CTA en bas */}
                            <div className="mt-auto">
                                <a
                                    href="https://www.linkedin.com/company/gabonhubtech/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full py-5 bg-tech-blue text-white text-center font-bold uppercase tracking-widest rounded-xl shadow-[0_10px_40px_rgba(10,102,194,0.2)] block active:scale-95 transition-all"
                                >
                                    Rejoindre le Hub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}