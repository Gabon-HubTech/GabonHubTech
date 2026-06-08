"use client";
import React, { useState } from 'react';

export default function AdminForm({ onSubmit, initialData = {}, fields }) {
    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }} className="space-y-4 bg-tech-dark-lighter p-6 rounded-2xl">
            {fields.map(field => (
                <div key={field.name} className="space-y-1">
                    <label className="text-sm text-gray-400 capitalize">{field.name}</label>
                    <input
                        name={field.name}
                        value={formData[field.name] || ''}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full bg-tech-dark border border-white/10 rounded-xl px-4 py-3 text-white"
                    />
                </div>
            ))}
            <button type="submit" className="bg-tech-blue px-6 py-3 rounded-xl text-white font-bold">
                Enregistrer
            </button>
        </form>
    );
}
