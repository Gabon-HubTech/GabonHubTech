"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import DotMatrixBackground from '@/components/DotMatrixBackground';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EventDetailPage() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const result = await apiFetch('/api/events');
                // Temporaire : on filtre côté client car l'API GET /api/events/:id n'existe pas encore
                const foundEvent = result.data.find(e => e._id === id);
                setEvent(foundEvent);
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id]);

    if (loading) return <div className="text-white p-20">Chargement...</div>;
    if (!event) return <div className="text-white p-20">Événement non trouvé.</div>;

    return (
        <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
            <DotMatrixBackground />
            <div className="container mx-auto px-6 relative z-10">
                <Link href="/events" className="flex items-center text-tech-blue hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2" /> Retour aux événements
                </Link>
                <h1 className="text-5xl font-bold text-white mb-4">{event.title}</h1>
                <p className="text-tech-blue font-mono uppercase tracking-widest mb-6">{event.status} - {event.location}</p>
                <p className="text-gray-300 text-lg max-w-3xl">{event.description}</p>
            </div>
        </main>
    );
}
