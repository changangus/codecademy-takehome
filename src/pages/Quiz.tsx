import React from 'react';
import Question from '../components/Question';
import { iQuiz } from '../types/Quiz';
interface QuizProps {
  quiz: iQuiz
}

const Quiz: React.FC<QuizProps> = ({quiz: {title, questions}}) => {
    return (
        <div className="flex flex-col justify-between h-3/4 sm:h-2/4 mt-4 sm:mt-14">
          <h1 className="flex justify-center text-xl sm:text-5xl w-full">{title}</h1>
          <Question question={questions[0]} />
        </div>
    );
}

export default Quiz;