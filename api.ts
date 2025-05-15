// Types for API
import { Category, getCategoryById } from './categories';
import { fallbackQuestions, defaultFallbackQuestions } from './fallback-questions';

export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface ApiResponse {
  response_code: number;
  results: Question[];
}

/**
 * Fetches trivia questions from the Open Trivia Database API
 * @param amount Number of questions to fetch
 * @param categoryId Category ID from our app (optional)
 * @param difficulty Difficulty level: easy, medium, hard (optional)
 * @param type Question type: multiple, boolean (optional)
 */
export async function fetchQuizQuestions(
  amount = 10,
  categoryId?: string,
  difficulty?: 'easy' | 'medium' | 'hard',
  type?: 'multiple' | 'boolean'
): Promise<Question[]> {
  try {
    // Get more questions than needed if filtering by programming language
    const fetchAmount = categoryId && categoryId !== 'random' ? Math.min(amount * 3, 50) : amount;
    
    // Determine OpenTrivia category ID
    let openTriviaId: number | undefined;
    let searchTerms: string[] | undefined;
    
    if (categoryId && categoryId !== 'random') {
      const category = getCategoryById(categoryId);
      if (category) {
        openTriviaId = category.openTriviaId;
        searchTerms = category.searchTerms;
      }
    } else if (categoryId === 'random') {
      // Use random tech category
      const techCategories = [18, 30]; // Science: Computers, Science: Gadgets
      const randomCategoryIndex = Math.floor(Math.random() * techCategories.length);
      openTriviaId = techCategories[randomCategoryIndex];
    }

    let url = `https://opentdb.com/api.php?amount=${fetchAmount}`;
    
    if (openTriviaId) url += `&category=${openTriviaId}`;
    if (difficulty) url += `&difficulty=${difficulty}`;
    if (type) url += `&type=${type}`;
    
    console.log("Fetching from URL:", url);
    
    try {
      const response = await fetch(url);
      
      // Check for rate limiting (429 error)
      if (response.status === 429) {
        console.log("Rate limit hit, using fallback questions");
        return useFallbackQuestions(categoryId, amount);
      }
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      
      console.log("API Response code:", data.response_code);
      console.log("Questions received:", data.results.length);
      
      if (data.response_code !== 0) {
        console.log(`API Error code: ${data.response_code}, using fallback questions`);
        return useFallbackQuestions(categoryId, amount);
      }

      if (data.results.length === 0) {
        console.log("No questions received from API, using fallback questions");
        return useFallbackQuestions(categoryId, amount);
      }

      let results = data.results;

      // Filter questions by programming language if search terms are provided
      if (searchTerms && searchTerms.length > 0) {
        console.log("Filtering by search terms:", searchTerms);
        const filteredResults = results.filter(question => {
          const lowerQuestion = question.question.toLowerCase();
          const lowerCategory = question.category.toLowerCase();

          // Check if question contains any of the search terms
          return searchTerms.some(term => 
            lowerQuestion.includes(term.toLowerCase()) || 
            lowerCategory.includes(term.toLowerCase())
          );
        });
        
        console.log("Questions after filtering:", filteredResults.length);
        
        // If we have filtered results, use them, otherwise use all results
        if (filteredResults.length > 0) {
          results = filteredResults;
        } else {
          console.log("No matches found for search terms, using all questions");
        }
      }

      // Limit to requested amount
      return results.slice(0, amount);
    } catch (error) {
      console.error('Error fetching quiz questions:', error);
      console.log("Using fallback questions due to error");
      return useFallbackQuestions(categoryId, amount);
    }
  } catch (error) {
    console.error('Error in fetchQuizQuestions:', error);
    return useFallbackQuestions(categoryId, amount);
  }
}

/**
 * Gets fallback questions when the API is unavailable or rate limited
 */
function useFallbackQuestions(categoryId?: string, amount = 10): Question[] {
  console.log(`Using fallback questions for category: ${categoryId || 'random'}`);
  
  if (categoryId && fallbackQuestions[categoryId.toLowerCase()]) {
    return fallbackQuestions[categoryId.toLowerCase()].slice(0, amount);
  }
  
  return defaultFallbackQuestions.slice(0, amount);
}

/**
 * Gets all categories from the Open Trivia Database
 */
export async function fetchCategories() {
  try {
    const response = await fetch('https://opentdb.com/api_category.php');
    const data = await response.json();
    return data.trivia_categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

/**
 * Tech categories in Open Trivia DB (for reference)
 * 18: Science: Computers
 * 30: Science: Gadgets
 */
export const TECH_CATEGORIES = [18, 30]; 