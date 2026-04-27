"use client";
import { Hexagon, ChevronDown, Calendar, GraduationCap, Laptop, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Fermer le menu mobile si on change de page
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Communauté', href: '/#community' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-tech-blue/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="group z-50">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Hexagon className="w-8 h-8 text-tech-blue fill-tech-blue/10 group-hover:fill-tech-blue/30 transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-white">GHT</span>
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-wider text-white uppercase block">
                            Gabon <span className="text-tech-blue">HubTech</span>
                        </span>
                    </div>
                </Link>

                {/* --- NAVIGATION DESKTOP --- */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-tech-blue ${pathname === '/' ? 'text-tech-blue' : 'text-tech-accent/70'}`}
                    >
                        Accueil
                    </Link>

                    <div
                        className="relative py-7"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="flex items-center space-x-1 text-sm font-medium uppercase tracking-widest text-tech-accent/70 hover:text-tech-blue transition-colors">
                            <span>Services</span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        <div className={`absolute top-full left-0 w-64 bg-tech-dark-lighter border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <Link href="/events" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                <div className="p-2 bg-tech-blue/20 rounded-md text-tech-blue"><Calendar size={18} /></div>
                                <div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue">Événements</div>
                                    <div className="text-[10px] text-gray-500 uppercase italic">Meetups & Hackathons</div>
                                </div>
                            </Link>
                            <Link href="/formations" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                <div className="p-2 bg-tech-blue/20 rounded-md text-tech-blue"><GraduationCap size={18} /></div>
                                <div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue">Formations</div>
                                    <div className="text-[10px] text-gray-500 uppercase italic">HubTech Academy</div>
                                </div>
                            </Link>
                            <div className="border-t border-white/5 mt-2 pt-2">
                                <Link href="/#services" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                    <div className="p-2 bg-gray-500/20 rounded-md text-gray-400"><Laptop size={18} /></div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue italic">Tous les services</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {navLinks.filter(l => l.name !== 'Accueil').map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-tech-blue ${pathname === link.href ? 'text-tech-blue' : 'text-tech-accent/70'}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <a
                        href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-tech-blue text-tech-blue text-xs font-bold uppercase rounded-full hover:bg-tech-blue hover:text-white transition-all active:scale-95"
                    >
                        Rejoindre
                    </a>
                </div>

                {/* --- BOUTON BURGER (MOBILE) --- */}
                <button
                    className="md:hidden z-50 p-2 text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} className="text-tech-blue" /> : <Menu size={28} />}
                </button>

                {/* --- MENU MOBILE OVERLAY --- */}
                <div className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>

                    {/* Fond sombre avec flou intense pour isoler le menu */}
                    <div
                        className={`absolute inset-0 bg-tech-dark/95 backdrop-blur-2xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
                        onClick={() => setIsMobileMenuOpen(false)} // Ferme le menu si on clique sur le fond
                    />

                    {/* Contenu du menu avec un léger dégradé pour l'esthétique */}
                    <div className={`absolute right-0 top-0 h-full w-[80%] max-w-sm bg-gradient-to-b from-tech-dark-lighter to-tech-dark border-l border-white/10 shadow-2xl transition-transform duration-500 ease-out p-10 flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                        <div className="flex flex-col space-y-8 mt-20">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-3xl font-bold uppercase tracking-tighter transition-colors ${pathname === link.href ? 'text-tech-blue' : 'text-white'}`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="pt-8 border-t border-white/10 space-y-6">
                                <p className="text-tech-blue font-mono text-[10px] uppercase tracking-[0.3em]">Expertises</p>

                                <Link href="/events" className="flex items-center space-x-4 group" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="p-2 bg-tech-blue/10 rounded-lg text-tech-blue"><Calendar size={20} /></div>
                                    <span className="text-xl text-tech-accent/80 font-medium">Événements</span>
                                </Link>

                                <Link href="/formations" className="flex items-center space-x-4 group" onClick={() => setIsMobileMenuOpen(false)}>
                                    <div className="p-2 bg-tech-blue/10 rounded-lg text-tech-blue"><GraduationCap size={20} /></div>
                                    <span className="text-xl text-tech-accent/80 font-medium">Academy</span>
                                </Link>
                            </div>
                        </div>

                        {/* Bouton CTA en bas du menu mobile */}
                        <div className="mt-auto pb-10">
                            <a
                                href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-5 bg-tech-blue text-white text-center font-bold uppercase tracking-widest rounded-2xl shadow-[0_10px_30px_rgba(10,102,194,0.3)] block"
                            >
                                Rejoindre le Hub
                            </a>
                            <p className="text-center text-[10px] text-gray-500 mt-6 font-mono uppercase tracking-widest">
                                Gabon HubTech © 2026
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}