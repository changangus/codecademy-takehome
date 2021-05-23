import React from 'react';
import Quiz from './pages/Quiz';
import { quizzes } from './data/quizzes'
import { useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { quizState } from './redux/quiz/QuizReducer';

const App: React.FC = () => {
  const currentQuiz = useSelector<RootStore, quizState["currentQuiz"]>((state) => state.quiz.currentQuiz)
  return (
    <div className="flex flex-col items-center h-screen mx-6 sm:mx-10 my-4">
      <Quiz quiz={quizzes[currentQuiz]}/>
    </div>
  );
};

export default App;