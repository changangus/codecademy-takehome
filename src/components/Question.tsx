import React from 'react';
import shuffleAnswers from '../utils/shuffleAnswers';
import CustomButton from './CustomButton';

interface QuestionProps {
  text: string,
  correctAnswer: string,
  incorrectAnswers: string[]
}

const Question: React.FC<QuestionProps> = ({text, correctAnswer, incorrectAnswers}) => {

    let shuffledAnswers = shuffleAnswers([correctAnswer, ...incorrectAnswers]);
  
    return (
        <div>
          <h1>{text}</h1>
          <ol>
            {shuffledAnswers.map(answer => (
              <li>{answer}</li>
            ))}
          </ol>
          <CustomButton>Next</CustomButton>
        </div>
    );
}

export default Question;