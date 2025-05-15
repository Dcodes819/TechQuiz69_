import { Question } from './api';

// Fallback questions to use when the API rate limit is hit
export const fallbackQuestions: Record<string, Question[]> = {
  "javascript": [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which JavaScript framework was created by Facebook?",
      correct_answer: "React",
      incorrect_answers: ["Angular", "Vue", "Ember"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does the 'DOM' stand for in JavaScript?",
      correct_answer: "Document Object Model",
      incorrect_answers: ["Data Object Model", "Document Oriented Model", "Digital Ordinance Model"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which symbol is used for single line comments in JavaScript?",
      correct_answer: "//",
      incorrect_answers: ["/* */", "#", "$$"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which method is used to add an element at the end of an array in JavaScript?",
      correct_answer: "push()",
      incorrect_answers: ["append()", "add()", "insert()"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What is a closure in JavaScript?",
      correct_answer: "A function that has access to variables in its outer lexical environment",
      incorrect_answers: ["A way to close browser windows", "A method to terminate a loop", "A data structure similar to arrays"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these is NOT a JavaScript data type?",
      correct_answer: "Float",
      incorrect_answers: ["Number", "String", "Boolean"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What will '2' + 2 evaluate to in JavaScript?",
      correct_answer: "'22'",
      incorrect_answers: ["4", "NaN", "TypeError"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What method is used to schedule a function to run after a specific delay in JavaScript?",
      correct_answer: "setTimeout",
      incorrect_answers: ["setDelay", "wait", "pause"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the purpose of 'use strict' in JavaScript?",
      correct_answer: "To enable strict mode",
      incorrect_answers: ["To import external libraries", "To optimize code performance", "To declare global variables"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What is the purpose of the JavaScript 'Promise' object?",
      correct_answer: "To handle asynchronous operations",
      incorrect_answers: ["To protect code from errors", "To ensure a function returns a value", "To create private variables"]
    }
  ],
  "python": [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What is the correct way to create a function in Python?",
      correct_answer: "def myFunction():",
      incorrect_answers: ["function myFunction():", "create myFunction():", "func myFunction():"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What does PEP 8 refer to in Python?",
      correct_answer: "Style Guide for Python Code",
      incorrect_answers: ["Python Enhancement Proposal", "Python Error Protocol", "Python Execution Path"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these is NOT a Python data type?",
      correct_answer: "char",
      incorrect_answers: ["str", "int", "list"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "How do you create a comment in Python?",
      correct_answer: "#",
      incorrect_answers: ["//", "/*", "<!-- -->"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the output of 'print(3 * '7')' in Python?",
      correct_answer: "777",
      incorrect_answers: ["21", "Error", "3*7"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What is a decorator in Python?",
      correct_answer: "A function that takes another function and extends its behavior",
      incorrect_answers: ["A class attribute", "A type of loop", "A built-in module"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which Python module would you use to work with regular expressions?",
      correct_answer: "re",
      incorrect_answers: ["regex", "pyregex", "regexp"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the difference between a tuple and a list in Python?",
      correct_answer: "Tuples are immutable",
      incorrect_answers: ["Lists are immutable", "Tuples can only store strings", "Lists can only contain numbers"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "hard",
      question: "What is a generator in Python?",
      correct_answer: "A function that returns an iterator",
      incorrect_answers: ["A function that generates random numbers", "A way to create new objects", "A tool for code generation"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the output of 'print(type(lambda x: x))' in Python?",
      correct_answer: "<class 'function'>",
      incorrect_answers: ["<class 'lambda'>", "<class 'procedure'>", "<class 'code'>"]
    }
  ],
  "random": [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What was the first commerically available computer processor?",
      correct_answer: "Intel 4004",
      incorrect_answers: ["Intel 486SX", "TMS 1000", "AMD AM386"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "How many cores does the Intel i7-6950X have?",
      correct_answer: "10",
      incorrect_answers: ["12", "8", "4"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the name of the default theme that is installed with Windows XP?",
      correct_answer: "Luna",
      incorrect_answers: ["Neptune", "Bliss", "Aero"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What was the name of the security vulnerability found in Bash in 2014?",
      correct_answer: "Shellshock",
      incorrect_answers: ["Heartbleed", "Bashbug", "Stagefright"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "Which of these is not a key value of Agile software development?",
      correct_answer: "Comprehensive documentation",
      incorrect_answers: ["Individuals and interactions", "Customer collaboration", "Responding to change"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "How fast is USB 3.1 Gen 2 theoretically?",
      correct_answer: "10 Gb/s",
      incorrect_answers: ["5 Gb/s", "8 Gb/s", "1 Gb/s"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In computing, what does MIDI stand for?",
      correct_answer: "Musical Instrument Digital Interface",
      incorrect_answers: ["Musical Interface of Digital Instruments", "Modular Interface of Digital Instruments", "Musical Instrument Data Interface"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "In programming, what do you call functions with the same name but different parameters?",
      correct_answer: "Overloading",
      incorrect_answers: ["Overriding", "Abstracting", "Inheriting"]
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "medium",
      question: "What is the main CPU is the Sega Mega Drive / Sega Genesis?",
      correct_answer: "Motorola 68000",
      incorrect_answers: ["Zilog Z80", "Yamaha YM2612", "Intel 8088"]
    }
  ]
};

// Default fallback for categories that don't have specific fallback questions
export const defaultFallbackQuestions = fallbackQuestions.random; 