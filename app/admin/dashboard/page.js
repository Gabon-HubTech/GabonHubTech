"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { apiFetch } from '@/lib/api';

export default function AdminDashboard() {
    const router = useRouter();
    const [stats, setStats] = useState({ events: 0, formations: 0 });

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('admin_auth');
        if (!isAuthenticated) {
            router.push('/admin/login');
        } else {
            loadStats();
        }
    }, [router]);

    const loadStats = async () => {
        const events = await apiFetch('/api/events');
        const formations = await apiFetch('/api/formations');
        setStats({ 
            events: events.data.length, 
            formations: formations.data.length 
        });
    };

    return (
        <div className="min-h-screen bg-tech-dark p-10 mt-10">
            <h1 className="text-4xl font-bold text-white mb-10">Dashboard Admin</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="p-8 border border-tech-blue rounded-3xl bg-tech-blue/5 text-white">
                    <h2 className="text-lg text-gray-400">Total Événements</h2>
                    <p className="text-5xl font-bold">{stats.events}</p>
                </div>
                <div className="p-8 border border-tech-blue rounded-3xl bg-tech-blue/5 text-white">
                    <h2 className="text-lg text-gray-400">Total Formations</h2>
                    <p className="text-5xl font-bold">{stats.formations}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Link href="/admin/events" className="p-10 border border-tech-blue rounded-3xl text-white hover:bg-tech-blue/20 transition-all">
                    <h2 className="text-2xl font-bold">Gérer les Événements</h2>
                </Link>
                <Link href="/admin/formations" className="p-10 border border-tech-blue rounded-3xl text-white hover:bg-tech-blue/20 transition-all">
                    <h2 className="text-2xl font-bold">Gérer les Formations</h2>
                </Link>
            </div>
            <button 
                onClick={() => { localStorage.removeItem('admin_auth'); router.push('/admin/login'); }}
                className="mt-10 text-red-400 underline"
            >
                Déconnexion
            </button>
        </div>
    );
}
