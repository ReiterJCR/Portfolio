import React, { useEffect, useRef } from 'react';

const StarField = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create stars
    const createStars = (count: number, size: number, opacity: number, duration: string) => {
      const stars = [];
      const container = containerRef.current!;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      const maxOffset = Math.max(containerWidth, containerHeight) * 0.8;

      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.backgroundColor = `hsla(0, 100%, 100%, ${opacity})`;
        star.style.borderRadius = '50%';
        
        // Random position within a larger area than the container
        const x = Math.random() * maxOffset * 2 - maxOffset/2;
        const y = Math.random() * maxOffset * 2 - maxOffset/2;
        star.style.left = `calc(50% + ${x}px)`;
        star.style.top = `calc(50% + ${y}px)`;
        
        // Animation
        star.style.animation = `orbit${Math.floor(Math.random() * 3) + 1} ${duration} linear infinite`;
        container.appendChild(star);
      }
    };

    // Create different star sizes
    createStars(200, 1, 0.8, '120s');  // Small stars
    createStars(100, 2, 0.8, '240s');  // Medium stars
    createStars(50, 3, 0.8, '480s');   // Large stars

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    />
  );
};

export default StarField;