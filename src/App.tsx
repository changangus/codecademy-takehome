import React from 'react';
import ReactDOM from 'react-dom';
import Quiz from './pages/Quiz';
import { quizzes } from './data/quizzes'

const App: React.FC = () => {
  return (
    <div className="flex flex-col items-center h-screen m-10">
      <Quiz quiz={quizzes[0]}/>
    </div>
  );
};

export default App;