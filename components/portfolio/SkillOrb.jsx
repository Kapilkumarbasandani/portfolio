import React from 'react';
import { motion } from 'framer-motion';

export default function SkillOrb({ skill, index, total }) {
  const angle = (index / total) * Math.PI * 2;
  const radius = 140;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.15,
        zIndex: 10,
      }}
      className="absolute flex flex-col items-center justify-center cursor-pointer group"
      style={{
        left: `calc(50% + ${x}px)`,
        top: `calc(50% + ${y}px)`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <motion.div
        className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-white/10 flex items-center justify-center shadow-xl"
        whileHover={{
          boxShadow: '0 0 30px rgba(212,175,55,0.3)',
          borderColor: 'rgba(212,175,55,0.5)',
        }}
      >
        <span className="text-2xl">{skill.icon}</span>
      </motion.div>
      <motion.span
        className="mt-2 text-xs font-medium text-white/60 group-hover:text-[#d4af37] transition-colors whitespace-nowrap"
      >
        {skill.name}
      </motion.span>
      
      {/* Progress Ring */}
      <svg
        className="absolute inset-0 w-20 h-20 -rotate-90 pointer-events-none"
        style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%) rotate(-90deg)' }}
      >
        <circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="rgba(212,175,55,0.2)"
          strokeWidth="2"
        />
        <motion.circle
          cx="40"
          cy="40"
          r="36"
          fill="none"
          stroke="#d4af37"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: skill.level / 100 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.1 }}
          style={{
            strokeDasharray: '226',
            strokeDashoffset: '0',
          }}
        />
      </svg>
    </motion.div>
  );
}
