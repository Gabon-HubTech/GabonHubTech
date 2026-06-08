"use client";
import React, { useState, useEffect } from 'react';

export default function AdminForm({ onSubmit, initialData = {}, fields }) {
    const [formData, setFormData] = useState(initialData);

    useEffect(() => {
        setFormData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validation spécifique pour la description
        if (formData.description && (formData.description.length < 90 || formData.description.length > 110)) {
            alert(`La description doit faire entre 90 et 110 caractères. Elle fait actuellement ${formData.description.length} caractères.`);
            return;
        }

        onSubmit(formData);
        setFormData({}); // Reset form
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-tech-dark-lighter p-6 rounded-2xl">
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
                {formData._id ? "Mettre à jour" : "Créer"}
            </button>
        </form>
    );
}
