import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

// Mia V1 Test

// describe('Quiz App', () => {
//   test('renders first quiz question', () => {
//     render(<App />);
//     expect(screen.getByText(/question 1/i)).toBeInTheDocument();
//   });

//   test('allows selecting an answer', () => {
//     render(<App />);
//     const answerBtn = screen.getByText(/a/i);
//     fireEvent.click(answerBtn);
//     expect(answerBtn).toHaveStyle('background-color:'); // could be green/red if styled
//   });

//   test('shows final grade after finishing quiz', () => {
//     render(<App />);
    
//     // Simulate answering 5 questions
//     for (let i = 0; i < 5; i++) {
//       const answerBtn = screen.getByText(/a/i); // or choose correct answer text
//       fireEvent.click(answerBtn);
//       const nextBtn = screen.getByText(/next/i);
//       fireEvent.click(nextBtn);
//     }

//     expect(screen.getByText(/your score/i)).toBeInTheDocument();
//   });
// });

// Mia V2 Test
// mock localStorage
// beforeEach(() => {
//     localStorage.clear();
//     localStorage.setItem(
//       'user',
//       JSON.stringify({
//         name: 'Luna',
//         email: 'luna@example.com',
//         password: 'moonlight123',
//       })
//     );
//   });
  
//   describe('App - User Greeting', () => {
//     test('displays user name from localStorage', () => {
//       render(<App />);
//       expect(screen.getByText(/hi, luna/i)).toBeInTheDocument();
//     });
//   });

//   test('does not display user greeting if no user in localStorage', () => {
//     localStorage.clear();
//     render(<App />);
//     const greeting = screen.queryByText(/hi, /i);
//     expect(greeting).not.toBeInTheDocument();
//   });

//   test('renders quiz title', () => {
//     render(<App />);
//     expect(
//       screen.getByText(/one question at a time - react quiz/i)
//     ).toBeInTheDocument();
//   });
  