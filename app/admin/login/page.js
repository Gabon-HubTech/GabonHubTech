'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        // Dans une vraie application, utilise un système d'auth robuste.
        // Ici, on compare avec une variable d'environnement.
        if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD) {
            localStorage.setItem('admin_auth', 'true');
            router.push('/admin/dashboard');
        } else {
            setError(true);
        }
    };

    return (
        <div className="min-h-screen bg-tech-dark flex items-center justify-center">
            <form onSubmit={handleLogin} className="bg-white/[0.02] p-10 rounded-3xl border border-white/5 w-full max-w-md">
                <h1 className="text-2xl font-bold text-white mb-6">Admin Login</h1>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-tech-dark border border-white/10 rounded-xl px-5 py-4 text-white mb-4"
                    placeholder="Mot de passe"
                />
                {error && <p className="text-red-400 mb-4">Mot de passe incorrect</p>}
                <button type="submit" className="w-full bg-tech-blue py-4 rounded-xl text-white font-bold uppercase tracking-widest">
                    Connexion
                </button>
            </form>
        </div>
    );
}
