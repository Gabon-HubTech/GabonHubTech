"use client"

import React, { useEffect, useRef } from 'react';

export default function DotMatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const dots = [];

    const spacing = 30;

    // Initialiser les points
    for (let x = 0; x < width; x += spacing) {
      for (let y = 0; y < height; y += spacing) {
        if (Math.random() > 0.7) {
          // Créer seulement quelques points pour un look technique éparse
          dots.push({
            x,
            y,
            alpha: Math.random() * 0.5,
            speed: 0.005 + Math.random() * 0.01,
          });
        }
      }
    }

    let animationFrameId;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      dots.forEach((dot) => {
        dot.alpha += dot.speed;
        if (dot.alpha >= 0.6 || dot.alpha <= 0.1) {
          dot.speed = -dot.speed;
        }

        // Mis à jour pour utiliser le bleu de la marque #0A66C2 (rgb: 10, 102, 194)
        ctx.fillStyle = `rgba(10, 102, 194, ${dot.alpha})`;
        ctx.fillRect(dot.x, dot.y, 2, 2); // Points carrés pour un effet technique
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
}