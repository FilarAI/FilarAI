'use client';

import React, { useEffect, useRef, useState } from 'react';

export const BackgroundCanvas = () => {
  const [grainDataUrl, setGrainDataUrl] = useState('');
  
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      const imageData = ctx.createImageData(200, 200);
      for (let i = 0; i < imageData.data.length; i += 4) {
        const v = Math.floor(Math.random() * 255);
        imageData.data[i] = v;
        imageData.data[i + 1] = v;
        imageData.data[i + 2] = v;
        imageData.data[i + 3] = 255;
      }
      ctx.putImageData(imageData, 0, 0);
      setGrainDataUrl(canvas.toDataURL());
    }
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
      {/* Layer 1 & 2: Grid Lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="100%" height="100%" patternUnits="userSpaceOnUse">
            {/* Vertical Lines (12 lines) */}
            {[...Array(13)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={`${(i / 12) * 100}%`}
                y1="0"
                x2={`${(i / 12) * 100}%`}
                y2="100%"
                stroke="var(--bg-4)"
                strokeWidth="1"
                strokeOpacity="0.5"
              />
            ))}
            
            {/* Special Red Accent Line at 66% */}
            <line
              x1="66%"
              y1="0"
              x2="66%"
              y2="100%"
              stroke="var(--red)"
              strokeWidth="1"
              strokeOpacity="0.06"
            />

            {/* Horizontal Lines (6 lines) */}
            {[...Array(7)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={`${(i / 6) * 100}%`}
                x2="100%"
                y2={`${(i / 6) * 100}%`}
                stroke="var(--bg-4)"
                strokeWidth="1"
                strokeOpacity="0.25"
              />
            ))}
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Layer 3: Red Radial Glow */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 55% at 62% 35%, rgba(217, 48, 37, 0.13) 0%, transparent 65%)'
        }}
      />

      {/* Layer 4: Grain Texture */}
      {grainDataUrl && (
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${grainDataUrl})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 200px',
            opacity: 0.035,
            mixBlendMode: 'overlay'
          }}
        />
      )}
    </div>
  );
};
