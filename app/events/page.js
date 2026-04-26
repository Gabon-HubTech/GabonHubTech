import React from 'react';
import HexagonCard from '@/components/HexagonCard'; 
import DotMatrixBackground from '@/components/DotMatrixBackground';

const UPCOMING_EVENTS = [
  {
    id: 1,
    title: "Masterclass Next.js 14",
    status: "À venir",
    location: "Google Meet",
    description: "Maîtrisez le développement fullstack moderne avec l'App Router et les Server Actions.",
    icon: "Layout"
  },
  {
    id: 2,
    title: "Analyse de Données & IA",
    status: "À venir",
    location: "Live Workshop",
    description: "Introduction à la Data Science : extraire de la valeur des données pour les entreprises gabonaises.",
    icon: "Database" // Icône pour la Data
  },
  {
    id: 3,
    title: "Initiation au Pentesting",
    status: "À venir",
    location: "Espace Virtuel",
    description: "Comprendre les bases de la cybersécurité offensive et sécuriser les applications web.",
    icon: "ShieldAlert" // Icône pour le Pentesting
  },
  {
    id: 4,
    title: "Web Performance & SEO",
    status: "À venir",
    location: "En ligne",
    description: "Techniques avancées pour rendre vos sites ultra-rapides et visibles sur Google.",
    icon: "Zap"
  },
  {
    id: 5,
    title: "Sécurité des Réseaux",
    status: "À venir",
    location: "Communauté Discord",
    description: "Atelier pratique sur la détection des vulnérabilités et la protection des infrastructures.",
    icon: "Lock" // Autre icône pour la sécu
  }
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
      <DotMatrixBackground />

      <div className="container mx-auto px-6 relative z-10">
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-white mb-4 tracking-tight uppercase">
            Événements <span className="text-tech-blue italic">Tech Hub</span>
          </h1>
          <div className="h-1 w-24 bg-tech-blue mx-auto mb-6"></div>
          <p className="text-tech-accent/70 max-w-2xl mx-auto text-lg leading-relaxed">
            Explorez le <span className="text-white font-bold">Développement</span>, 
            la <span className="text-white font-bold">Data</span> et 
            la <span className="text-white font-bold">Cybersécurité</span>.
          </p>
        </header>

        {/* Grille d'événements centrée */}
        <div className="flex flex-wrap justify-center gap-12 mt-10">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="transition-transform duration-500 hover:-translate-y-3">
              <HexagonCard 
                title={event.title}
                subtitle={event.status}
                description={event.description}
                iconName={event.icon}
              />
            </div>
          ))}
        </div>

        {/* Pied de page de la section */}
        <footer className="mt-24 text-center border-t border-white/5 pt-12">
          <p className="text-tech-accent/40 mb-6 font-mono text-xs uppercase tracking-[0.3em]">
            Le savoir n'a de valeur que s'il est partagé
          </p>
          <button className="px-10 py-4 bg-tech-blue/10 border border-tech-blue/40 text-tech-blue hover:bg-tech-blue hover:text-white transition-all rounded-xl font-bold uppercase tracking-widest text-xs">
            Proposer un atelier thématique
          </button>
        </footer>
      </div>
    </main>
  );
}