import { Question } from './api';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Shuffles an array using the Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Returns an array of all answers (correct and incorrect) shuffled
 */
export function getAllAnswers(question: Question): string[] {
  return shuffleArray([question.correct_answer, ...question.incorrect_answers]);
}

/**
 * Decode HTML entities in a string (client-side only)
 */
export function decodeHTML(html: string): string {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return html
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }
  
  // Client-side decoding
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

/**
 * Safe implementation of atob that works in both client and server components
 */
export function safeAtob(str: string): string {
  try {
    if (typeof window !== 'undefined') {
      return window.atob(str);
    } else {
      return Buffer.from(str, 'base64').toString('binary');
    }
  } catch (e) {
    console.error('Error decoding base64:', e);
    return str; // Return original string if decoding fails
  }
}

/**
 * Combines multiple className values into a single string using clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 