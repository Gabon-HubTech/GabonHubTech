"use client";
import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import AdminForm from '@/components/AdminForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminEvents() {
    const [events, setEvents] = useState([]);

    useEffect(() => { loadEvents(); }, []);

    const loadEvents = async () => {
        const result = await apiFetch('/api/events');
        setEvents(result.data);
    };

    const handleSave = async (data) => {
        if (data._id) {
            await apiFetch(`/api/events/${data._id}`, { method: 'PUT', body: JSON.stringify(data) });
        } else {
            await apiFetch('/api/events', { method: 'POST', body: JSON.stringify(data) });
        }
        loadEvents();
    };

    const handleDelete = async (id) => {
        await apiFetch(`/api/events/${id}`, { method: 'DELETE' });
        loadEvents();
    };

    return (
        <div className="p-10 bg-tech-dark min-h-screen text-white">
            <div className="flex items-center mt-10 mb-6">
                <Link href="/admin/dashboard" className="mr-4 text-tech-blue hover:text-white transition-colors">
                    <ArrowLeft size={32} />
                </Link>
                <h1 className="text-3xl">Gestion Événements</h1>
            </div>
            <AdminForm 
                fields={[{name: 'title', required: true}, {name: 'description', required: true}, {name: 'location', required: true}]} 
                onSubmit={handleSave} 
            />
            <div className="mt-10 space-y-4">
                {events.map(ev => (
                    <div key={ev._id} className="flex justify-between bg-white/[0.05] p-4 rounded-xl">
                        {ev.title}
                        <button onClick={() => handleDelete(ev._id)} className="text-red-400">Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
