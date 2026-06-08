"use client";
import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { apiFetch } from '@/lib/api';
import DotMatrixBackground from '@/components/DotMatrixBackground';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FormationDetailPage() {
    const { id } = useParams();
    const [formation, setFormation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFormation = async () => {
            try {
                const result = await apiFetch('/api/formations');
                const foundFormation = result.data.find(f => f._id === id);
                setFormation(foundFormation);
            } catch (error) {
                console.error("Erreur:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFormation();
    }, [id]);

    if (loading) return <div className="text-white p-20">Chargement...</div>;
    if (!formation) return <div className="text-white p-20">Formation non trouvée.</div>;

    return (
        <main className="min-h-screen bg-tech-dark pt-32 pb-20 relative overflow-hidden">
            <DotMatrixBackground />
            <div className="container mx-auto px-6 relative z-10">
                <Link href="/formations" className="flex items-center text-tech-blue hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2" /> Retour aux formations
                </Link>
                <h1 className="text-5xl font-bold text-white mb-4">{formation.title}</h1>
                <div className="flex items-center space-x-4 mb-6">
                    <span className="text-sm font-mono px-3 py-1 bg-tech-blue/10 text-tech-blue border border-tech-blue/20 rounded">
                        {formation.level}
                    </span>
                    <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                        {formation.duration}
                    </span>
                </div>
                <p className="text-gray-300 text-lg max-w-3xl">{formation.description}</p>
            </div>
        </main>
    );
}
