import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IS_QUESTIONSUBMITTED, SET_SUBMITTED_ANSWER } from '../redux/question/DispatchTypes';
import { iQuestion } from '../types/Question';
import shuffle from '../utils/shuffleAnswers';
export interface QuestionProps {
  question: iQuestion
  currentQuestion: number
  submittedAnswer: string,
  isSubmitted: boolean
}

const Question: React.FC<QuestionProps> = ({ question: { text, correctAnswer, incorrectAnswers }, currentQuestion, isSubmitted, submittedAnswer }) => {
  let [answers, setAnswers] = useState<string[]>([]);
  const dispatch = useDispatch();
 
  useEffect(() => {
    console.log(currentQuestion)
    const shuffledAnswers = shuffle([correctAnswer, ...incorrectAnswers]);
    setAnswers(shuffledAnswers as string[])
  }, [correctAnswer, incorrectAnswers, currentQuestion]);

  return (
    <div>
      <h1 className="text-lg mb-4 sm:text-3xl">{currentQuestion + 1}. {text}</h1>
      <form className="flex flex-col">
        {answers.map(answer => (
          <input
            className={`text-md sm:text-xl my-4 p-2 rounded-xl bg-gray-100 border-solid border-gray-500 border-2 transition-all cursor-pointer ${isSubmitted && answer === correctAnswer ? 'border-green-400 bg-green-200' : ''} ${isSubmitted && answer !== correctAnswer && answer === submittedAnswer ? 'border-red-400 bg-red-200 line-through' : ''}`}
            key={answer}
            id={answer}
            data-testid={`${answer} answer`}
            type="button"
            name="answer"
            value={answer}
            onClick={() => {
              dispatch({
                type: SET_SUBMITTED_ANSWER,
                payload: answer
              })
              dispatch({
                type: IS_QUESTIONSUBMITTED
              });
            }}
            disabled={isSubmitted}
          />
        ))}
      </form>
    </div>
  );
}

export default Question;