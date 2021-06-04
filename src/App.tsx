import React from 'react';
import Quiz from './pages/Quiz';
import { quizzes } from './data/quizzes'
import { useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { quizState } from './redux/quiz/QuizReducer';
import shuffle from './utils/shuffleAnswers';
import { iQuestion } from './types/Question';

const App: React.FC = () => {
  const currentQuiz = useSelector<RootStore, quizState["currentQuiz"]>((state) => state.quiz.currentQuiz)
  return (
    <div className="flex flex-col items-center h-screen mx-6 sm:mx-10 my-4">
      <Quiz title={quizzes[currentQuiz].title} questions={shuffle(quizzes[currentQuiz].questions) as iQuestion[]}/>
    </div>
  );
};

export default App;