import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Animated particle background using Canvas
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    // Create particles
    for (let i = 0; i < 150; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((particle2, j) => {
          if (i === j) return;
          const dx = particle.x - particle2.x;
          const dy = particle.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${0.1 * (1 - distance / 120)})`;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  );
}

// Floating geometric shapes
function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rotating wireframe cube */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-32 h-32"
        animate={{ 
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: 'linear' 
        }}
        style={{ perspective: '500px', transformStyle: 'preserve-3d' }}
      >
        <div className="relative w-full h-full" style={{ transformStyle: 'preserve-3d' }}>
          {/* Cube faces */}
          {[
            { transform: 'translateZ(64px)', opacity: 0.2 },
            { transform: 'translateZ(-64px)', opacity: 0.2 },
            { transform: 'rotateY(90deg) translateZ(64px)', opacity: 0.15 },
            { transform: 'rotateY(-90deg) translateZ(64px)', opacity: 0.15 },
            { transform: 'rotateX(90deg) translateZ(64px)', opacity: 0.1 },
            { transform: 'rotateX(-90deg) translateZ(64px)', opacity: 0.1 },
          ].map((face, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-[#d4af37]"
              style={{ 
                transform: face.transform, 
                opacity: face.opacity,
                backfaceVisibility: 'visible',
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating ring */}
      <motion.div
        className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full border-2 border-white/10"
        animate={{
          y: [0, -20, 0],
          rotateX: [0, 45, 0],
          rotateZ: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ transformStyle: 'preserve-3d' }}
      />

      {/* Glowing orb */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-[#d4af37]"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          boxShadow: '0 0 40px 10px rgba(212, 175, 55, 0.3)',
        }}
      />

      {/* Diamond shape */}
      <motion.div
        className="absolute top-1/3 left-1/4"
        animate={{
          rotate: [0, 360],
          y: [0, -15, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="w-16 h-16 border border-[#d4af37]/30 rotate-45" />
      </motion.div>

      {/* Gradient circles */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%)',
        }}
      />
    </div>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      {/* Particle canvas */}
      <ParticleCanvas />
      
      {/* Floating shapes */}
      <FloatingShapes />
      
      {/* Radial gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.8) 70%)',
        }}
      />
    </div>
  );
}
