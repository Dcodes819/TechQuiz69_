'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { programmingCategories, techCategories } from '@/lib/categories';
import { WaveText } from '@/app/components/WaveText';
import { RainbowButton } from '@/app/components/RainbowButton';
import { BeamsBackground } from '@/app/components/BeamsBackground';

export default function CategoriesPage() {
  const router = useRouter();
  
  const handleCategorySelect = (categoryId: string) => {
    router.push(`/quiz?category=${categoryId}`);
  };
  
  return (
    <BeamsBackground intensity="medium">
      <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-white mb-4">Choose a Category</h1>
            <p className="text-xl text-gray-300">
              Select a topic to test your knowledge
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Programming Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programmingCategories.map((category) => {
              const buttonRef = useRef<HTMLButtonElement>(null);
              return (
                <button
                  key={category.id}
                  ref={buttonRef}
                  onClick={() => handleCategorySelect(category.id)}
                  className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20 hover:border-primary-500 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl mb-4">{category.icon}</span>
                  <WaveText 
                    text={category.name} 
                    className="text-xl font-semibold text-white"
                    hover={true}
                    duration={0.3}
                    containerRef={buttonRef}
                  />
                </button>
              );
            })}
          </div>
          
          <h2 className="text-2xl font-bold text-gray-200 mb-6">Technology Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {techCategories.map((category) => {
              const buttonRef = useRef<HTMLButtonElement>(null);
              return (
                <button
                  key={category.id}
                  ref={buttonRef}
                  onClick={() => handleCategorySelect(category.id)}
                  className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-md rounded-lg shadow-md border border-white/20 hover:border-primary-500 hover:shadow-lg transition-all"
                >
                  <span className="text-4xl mb-4">{category.icon}</span>
                  <WaveText 
                    text={category.name} 
                    className="text-xl font-semibold text-white"
                    hover={true}
                    duration={0.3}
                    containerRef={buttonRef}
                  />
                </button>
              );
            })}
          </div>
          
          <div className="mt-12 text-center">
            <RainbowButton 
              href="/quiz?category=random" 
              className="text-base font-semibold"
            >
              Random Tech Quiz
            </RainbowButton>
          </div>
        </div>
      </div>
    </BeamsBackground>
  );
} 