"use client";
import React, { useState, useEffect } from 'react';
import HexagonCard from '@/components/HexagonCard'; 
import DotMatrixBackground from '@/components/DotMatrixBackground';
import { apiFetch } from '@/lib/api';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const result = await apiFetch('/api/events');
        if (result.success) {
          setEvents(result.data);
        }
      } catch (error) {
        console.error("Erreur chargement événements:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

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

        {loading ? (
          <p className="text-white text-center">Chargement des événements...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-12 mt-10">
            {events.map((event) => (
              <div key={event._id} className="transition-transform duration-500 hover:-translate-y-3">
                <HexagonCard 
                  id={event._id}
                  title={event.title}
                  subtitle={event.status}
                  description={event.description}
                  iconName={event.icon}
                />
              </div>
            ))}
          </div>
        )}

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