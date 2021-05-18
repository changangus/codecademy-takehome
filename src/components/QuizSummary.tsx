import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../data/messages';
import { NEXT_QUIZ, QUIZ_START } from '../redux/quiz/DispatchTypes';
import { quizState } from '../redux/quiz/QuizReducer';
import { RootStore } from '../redux/store';
import CustomButton from './CustomButton';

interface QuizSummaryProps {
  totalQuestions: number
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ totalQuestions }) => {
  const correctAnswers = useSelector<RootStore, quizState["correctAnswers"]>(state => state.quiz.correctAnswers);
  const dispatch = useDispatch();

  const handleNext = () => {
    dispatch({
      type: NEXT_QUIZ
    });
    dispatch({
      type: QUIZ_START
    });
  };

  const handleRetake = () => {
    dispatch({
      type: QUIZ_START
    })
  };

  return (
    <div className="flex flex-col h-3/4 justify-around items-center">
      <p className="flex justify-center text-lg sm:text-3xl">You got {correctAnswers} out of {totalQuestions} questions right.</p>
      <p className="text-lg sm:text-2xl">{getMessage()}</p>
      <div className="flex justify-evenly w-full sm:w-3/5">
        <CustomButton onClick={handleNext}>Next Quiz</CustomButton>
        <CustomButton onClick={handleRetake}>Retake Quiz</CustomButton>
      </div>
    </div>
  );
}

export default QuizSummary;