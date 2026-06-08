"use client";
import React, { useState, useEffect } from 'react';
import { apiFetch } from '@/lib/api';
import AdminForm from '@/components/AdminForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AdminFormations() {
    const [formations, setFormations] = useState([]);

    useEffect(() => { loadFormations(); }, []);

    const loadFormations = async () => {
        const result = await apiFetch('/api/formations');
        setFormations(result.data);
    };

    const handleSave = async (data) => {
        if (data._id) {
            await apiFetch(`/api/formations/${data._id}`, { method: 'PUT', body: JSON.stringify(data) });
        } else {
            await apiFetch('/api/formations', { method: 'POST', body: JSON.stringify(data) });
        }
        loadFormations();
    };

    const handleDelete = async (id) => {
        await apiFetch(`/api/formations/${id}`, { method: 'DELETE' });
        loadFormations();
    };

    return (
        <div className="p-10 bg-tech-dark min-h-screen text-white">
            <Link href="/admin/dashboard" className="flex items-center text-tech-blue hover:text-white mb-6 transition-colors">
                <ArrowLeft className="mr-2" /> Retour au Dashboard
            </Link>
            <h1 className="text-3xl mb-6">Gestion Formations</h1>
            <AdminForm 
                fields={[
                    {name: 'title', required: true}, 
                    {name: 'level', required: true}, 
                    {name: 'duration', required: true},
                    {name: 'description', required: false}
                ]} 
                onSubmit={handleSave} 
            />
            <div className="mt-10 space-y-4">
                {formations.map(f => (
                    <div key={f._id} className="flex justify-between bg-white/[0.05] p-4 rounded-xl">
                        {f.title}
                        <button onClick={() => handleDelete(f._id)} className="text-red-400">Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
