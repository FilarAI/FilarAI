'use client';

import React from 'react';

const AnimatedGradient = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none bg-[#080808] overflow-hidden">
      <style>{`
        @keyframes orb1 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(8%, -6%) scale(1.1); }
          66%  { transform: translate(-5%, 8%) scale(0.95); }
          100% { transform: translate(0%, 0%) scale(1); }
        }

        @keyframes orb2 {
          0%   { transform: translate(0%, 0%) scale(1); }
          33%  { transform: translate(-8%, 6%) scale(0.9); }
          66%  { transform: translate(6%, -8%) scale(1.1); }
          100% { transform: translate(0%, 0%) scale(1); }
        }

        .orb-1 {
          position: absolute;
          width: 60vw;
          height: 60vh;
          top: -10%;
          right: -5%;
          background: radial-gradient(ellipse, rgba(217,48,37,0.12) 0%, transparent 70%);
          animation: orb1 12s ease-in-out infinite;
          filter: blur(40px);
        }

        .orb-2 {
          position: absolute;
          width: 50vw;
          height: 50vh;
          bottom: 10%;
          left: -10%;
          background: radial-gradient(ellipse, rgba(217,48,37,0.07) 0%, transparent 70%);
          animation: orb2 16s ease-in-out infinite;
          filter: blur(60px);
        }
      `}</style>
      <div className="orb-1" />
      <div className="orb-2" />
    </div>
  );
};

export default AnimatedGradient;
