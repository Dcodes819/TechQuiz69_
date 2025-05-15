'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface WaveTextProps {
  text: string;
  className?: string;
  waveClassName?: string;
  delay?: number;
  duration?: number;
  hover?: boolean;
  containerRef?: React.RefObject<HTMLElement>;
}

export function WaveText({
  text,
  className,
  waveClassName,
  delay = 0.05,
  duration = 0.2,
  hover = false,
  containerRef,
}: WaveTextProps) {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const textContainer = textRef.current;
    if (!textContainer) return;

    const letters = textContainer.querySelectorAll('span');
    
    // Apply initial styles
    letters.forEach((letter, index) => {
      letter.style.transitionProperty = 'transform';
      letter.style.transitionTimingFunction = 'ease-in-out';
      letter.style.transitionDuration = `${duration}s`;
      letter.style.transitionDelay = `${index * delay}s`;
    });

    if (!hover) {
      // Auto-animate if hover is false
      const animate = () => {
        let active = false;
        
        setInterval(() => {
          letters.forEach((letter) => {
            if (active) {
              letter.style.transform = 'translateY(0px)';
            } else {
              letter.style.transform = 'translateY(-12px)';
            }
          });
          
          active = !active;
        }, 2000); // Toggle every 2 seconds
      };
      
      animate();
    } else {
      // Hover animation - use the parent container if provided, otherwise use the text container
      const container = containerRef?.current || textContainer;
      
      const handleMouseEnter = () => {
        letters.forEach((letter) => {
          letter.style.transform = 'translateY(-12px)';
        });
      };
      
      const handleMouseLeave = () => {
        letters.forEach((letter) => {
          letter.style.transform = 'translateY(0px)';
        });
      };

      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [delay, duration, hover, containerRef]);

  return (
    <div ref={textRef} className={cn("inline-block", className)}>
      {text.split('').map((char, index) => (
        <span 
          key={`${char}-${index}`} 
          className={cn("inline-block", waveClassName)}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
} 