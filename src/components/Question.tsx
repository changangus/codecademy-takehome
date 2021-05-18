import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SUBMITTED_ANSWER } from '../redux/question/DispatchTypes';
import { questionState } from '../redux/question/QuestionReducer';
import { NEXT_QUESTION, QUIZ_FINISHED, INCREMENT_SCORE } from '../redux/quiz/DispatchTypes';
import { RootStore } from '../redux/store';
import { iQuestion } from '../types/Question';
import shuffleAnswers from '../utils/shuffleAnswers';
export interface QuestionProps {
  question: iQuestion
  currentQuestion: number
}

const Question: React.FC<QuestionProps> = ({ question: { text, correctAnswer, incorrectAnswers }, currentQuestion}) => {
  const submittedAnswer = useSelector<RootStore, questionState["submittedAnswer"]>(state => state.question.submittedAnswer);
  const isSubmitted = useSelector<RootStore, questionState["isSubmitted"]>(state => state.question.isSubmitted);
  let [answers, setAnswers] = useState<string[]>([])
  const dispatch = useDispatch();
  const isCorrect = submittedAnswer === correctAnswer;

  useEffect(() => {
    const shuffledAnswers = shuffleAnswers([correctAnswer, ...incorrectAnswers]);
    setAnswers(shuffledAnswers)
  }, [correctAnswer, incorrectAnswers]);

  const handleClick = () => {
    dispatch({
      type: SET_SUBMITTED_ANSWER
    })
  }

  const clickedButton = document.getElementById(submittedAnswer);
  if (clickedButton && !isCorrect) {
    clickedButton.style.border = '2px solid red';
    clickedButton.style.background = 'pink';
    clickedButton.style.textDecoration = 'line-through';
  }
  return (
    <div>
      <h1 className="text-lg mb-4 sm:text-3xl">{currentQuestion + 1}. {text}</h1>
      <form className="flex flex-col">
        {answers.map(answer => (
          <input
            className={`text-xl my-4 p-2 rounded-xl bg-gray-100 border-solid border-gray-500 border-2 transition-all cursor-pointer ${isSubmitted && answer === correctAnswer ? 'border-solid border-2 border-green-400 bg-green-200' : ''}`}
            key={answer}
            id={answer}
            type="button"
            name="answer"
            value={answer}
            onClick={(e: any) => {
              
              console.log(answer)
            }}
            disabled={isSubmitted}
          />
        ))}
      </form>
    </div>
  );
}

export default Question;