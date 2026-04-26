"use client";
import { Hexagon, ChevronDown, Calendar, GraduationCap, Laptop } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Communauté', href: '/#community' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 bg-tech-dark/80 backdrop-blur-md border-b border-tech-blue/20">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="group">
                    <div className="flex items-center space-x-3">
                        <div className="relative">
                            <Hexagon className="w-8 h-8 text-tech-blue fill-tech-blue/10 group-hover:fill-tech-blue/30 transition-all" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-[10px] font-bold text-white">GHT</span>
                            </div>
                        </div>
                        <span className="text-xl font-bold tracking-wider text-white uppercase hidden sm:block">
                            Gabon <span className="text-tech-blue">HubTech</span>
                        </span>
                    </div>
                </Link>

                {/* Liens de Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {/* Lien Accueil dynamique */}
                    <Link
                        href="/"
                        className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-tech-blue ${pathname === '/' ? 'text-tech-blue' : 'text-tech-accent/70'}`}
                    >
                        Accueil
                    </Link>

                    {/* Dropdown Services */}
                    <div
                        className="relative py-7"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="flex items-center space-x-1 text-sm font-medium uppercase tracking-widest text-tech-accent/70 hover:text-tech-blue transition-colors">
                            <span>Services</span>
                            <ChevronDown size={14} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Menu du Dropdown avec animation fluide */}
                        <div className={`absolute top-full left-0 w-64 bg-tech-dark-lighter border border-white/10 rounded-xl p-2 shadow-2xl backdrop-blur-xl transition-all duration-300 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                            <Link href="/events" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                <div className="p-2 bg-tech-blue/20 rounded-md text-tech-blue">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue">Événements</div>
                                    <div className="text-[10px] text-gray-500 uppercase italic">Meetups & Hackathons</div>
                                </div>
                            </Link>

                            <Link href="/formations" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                <div className="p-2 bg-tech-blue/20 rounded-md text-tech-blue">
                                    <GraduationCap size={18} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue">Formations</div>
                                    <div className="text-[10px] text-gray-500 uppercase italic">HubTech Academy</div>
                                </div>
                            </Link>

                            <div className="border-t border-white/5 mt-2 pt-2">
                                <Link href="/#services" className="flex items-center space-x-3 p-3 hover:bg-tech-blue/10 rounded-lg group transition-colors">
                                    <div className="p-2 bg-gray-500/20 rounded-md text-gray-400">
                                        <Laptop size={18} />
                                    </div>
                                    <div className="text-sm font-bold text-white group-hover:text-tech-blue italic">Tous les services</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Autres Liens filtrés */}
                    {navLinks.filter(l => l.name !== 'Accueil').map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-tech-blue ${pathname === link.href ? 'text-tech-blue' : 'text-tech-accent/70'}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Bouton CTA LinkedIn corrigé */}
                <a
                    href="https://www.linkedin.com/company/gabonhubtech/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden md:block px-6 py-2 border border-tech-blue text-tech-blue text-xs font-bold uppercase rounded-full hover:bg-tech-blue hover:text-white transition-all shadow-[0_0_15px_rgba(10,102,194,0.1)] active:scale-95"
                >
                    Rejoindre
                </a>
            </div>
        </nav>
    );
}