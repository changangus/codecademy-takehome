import React, { useState } from 'react';
import { iQuestion } from '../types/Question';
import shuffleAnswers from '../utils/shuffleAnswers';
import CustomButton from './CustomButton';
export interface QuestionProps {
  question: iQuestion
}

const Question: React.FC<QuestionProps> = ({question: {text, correctAnswer, incorrectAnswers}}) => {
    let [submitted, setSubmitted] = useState<boolean>(false);
    let [submittedAnswer, setSubmittedAnswer] = useState<string>('');

    const shuffledAnswers = shuffleAnswers([correctAnswer, ...incorrectAnswers]);
    const clickedButton = document.getElementById(submittedAnswer);
    if(clickedButton && submittedAnswer !== correctAnswer){
      clickedButton.style.border = '4px solid red';
      clickedButton.style.background = 'pink';
      clickedButton.style.textDecoration = 'line-through';
    }  
    return (
        <div>
          <h1 className="text-lg sm:text-3xl">{text}</h1>
          <form className="flex flex-col">
            {shuffledAnswers.map(answer => (
              <input 
                className={`text-xl my-4 p-2 rounded-xl bg-gray-100 cursor-pointer ${submitted && answer === correctAnswer ? 'border-solid border-4 border-green-400 bg-green-200' : 'focus:bg-red-200'}`}
                key={answer}
                id={answer}
                type="button"
                name="answer"
                value={answer}
                onClick={(e:any) => {
                  setSubmittedAnswer(e.target.value) 
                  setSubmitted(true)
                  console.log(answer)
                }}
                disabled={submitted}
                />  
            ))}
          </form> 
          {submitted &&
          <div>
            <CustomButton>Next Question</CustomButton>
          </div> 
          }
        </div>
    );
}

export default React.memo(Question);