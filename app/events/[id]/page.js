"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import DotMatrixBackground from '@/components/DotMatrixBackground';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function EventDetailPage() {
    const params = useParams();
    const id = params?.id;
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) return;
        
        const fetchEvent = async () => {
            try {
                setLoading(true);
                setError(null);
                const result = await apiFetch('/api/events');
                
                // On utilise == pour éviter les problèmes de type (String vs ObjectID)
                const foundEvent = result.data.find(e => e._id == id);
                
                if (foundEvent) {
                    setEvent(foundEvent);
                } else {
                    setError("Événement introuvable.");
                }
            } catch (err) {
                console.error("Erreur de chargement:", err);
                setError("Erreur lors du chargement des détails.");
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, [id]);

    if (loading) return <div className="text-white p-20 text-center">Chargement en cours...</div>;
    if (error) return <div className="text-red-400 p-20 text-center">{error} (ID: {id})</div>;

    return (
        <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
            <DotMatrixBackground />
            <div className="container mx-auto px-6 relative z-10">
                <Link href="/events" className="flex items-center text-tech-blue hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2" /> Retour aux événements
                </Link>
                <h1 className="text-5xl font-bold text-white mb-4">{event.title}</h1>
                <p className="text-tech-blue font-mono uppercase tracking-widest mb-6">{event.status} - {event.location}</p>
                <p className="text-gray-300 text-lg max-w-3xl leading-relaxed">{event.description}</p>
            </div>
        </main>
    );
}
