"use client"

import React from 'react';

export default function GridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
      {/* Lignes horizontales */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, #0A66C2 1px, transparent 1px)',
          backgroundSize: '100% 40px',
        }}
      />
      {/* Lignes verticales */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0A66C2 1px, transparent 1px)',
          backgroundSize: '40px 100%',
        }}
      />
      {/* Dégradé radial pour le rendre subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-tech-dark/0 via-tech-dark/50 to-tech-dark" />
    </div>
  );
}