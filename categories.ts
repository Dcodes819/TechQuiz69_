// Define programming language category mappings
// Using OpenTrivia DB category 18 (Science: Computers) with search terms for filtering

export interface Category {
  id: string;
  name: string;
  icon: string;
  openTriviaId: number;
  searchTerms: string[];
}

export const programmingCategories: Category[] = [
  { 
    id: 'python', 
    name: 'Python', 
    icon: '🐍', 
    openTriviaId: 18, 
    searchTerms: ['python', 'django', 'flask', 'pandas']
  },
  { 
    id: 'javascript', 
    name: 'JavaScript', 
    icon: '📜', 
    openTriviaId: 18, 
    searchTerms: ['javascript', 'js', 'node', 'react', 'angular', 'vue']
  },
  { 
    id: 'java', 
    name: 'Java', 
    icon: '☕', 
    openTriviaId: 18, 
    searchTerms: ['java', 'spring', 'hibernate', 'jvm']
  },
  { 
    id: 'csharp', 
    name: 'C#', 
    icon: '🔷', 
    openTriviaId: 18, 
    searchTerms: ['c#', 'csharp', '.net', 'dotnet', 'asp.net']
  },
  { 
    id: 'cpp', 
    name: 'C++', 
    icon: '⚙️', 
    openTriviaId: 18, 
    searchTerms: ['c++', 'cpp', 'stl']
  },
  { 
    id: 'php', 
    name: 'PHP', 
    icon: '🐘', 
    openTriviaId: 18, 
    searchTerms: ['php', 'laravel', 'symfony', 'wordpress']
  },
  { 
    id: 'ruby', 
    name: 'Ruby', 
    icon: '💎', 
    openTriviaId: 18, 
    searchTerms: ['ruby', 'rails', 'ruby on rails']
  },
  { 
    id: 'swift', 
    name: 'Swift', 
    icon: '🦅', 
    openTriviaId: 18, 
    searchTerms: ['swift', 'ios', 'xcode', 'apple']
  },
  { 
    id: 'go', 
    name: 'Go', 
    icon: '🐹', 
    openTriviaId: 18, 
    searchTerms: ['golang', 'go']
  },
  { 
    id: 'rust', 
    name: 'Rust', 
    icon: '🦀', 
    openTriviaId: 18, 
    searchTerms: ['rust', 'cargo']
  }
];

// Additional tech categories
export const techCategories: Category[] = [
  { 
    id: 'databases',
    name: 'Databases', 
    icon: '🗄️', 
    openTriviaId: 18, 
    searchTerms: ['sql', 'mysql', 'postgresql', 'mongodb', 'database', 'nosql'] 
  },
  { 
    id: 'networking', 
    name: 'Networking', 
    icon: '🌐', 
    openTriviaId: 18, 
    searchTerms: ['tcp/ip', 'network', 'http', 'dns', 'routing'] 
  },
  { 
    id: 'security', 
    name: 'Security', 
    icon: '🔒', 
    openTriviaId: 18, 
    searchTerms: ['security', 'encryption', 'hashing', 'authentication'] 
  },
  { 
    id: 'devops', 
    name: 'DevOps', 
    icon: '🔄', 
    openTriviaId: 18, 
    searchTerms: ['devops', 'docker', 'kubernetes', 'ci/cd', 'jenkins'] 
  }
];

// All categories combined
export const allCategories: Category[] = [...programmingCategories, ...techCategories];

// Get category by ID
export function getCategoryById(id: string): Category | undefined {
  return allCategories.find(category => category.id === id);
}

// Get Open Trivia DB categories IDs
export const TECH_CATEGORIES = [18, 30]; // Science: Computers, Science: Gadgets 