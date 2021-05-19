import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../data/messages';
import { quizzes } from '../data/quizzes';
import { FIRST_QUIZ, NEXT_QUIZ, QUIZ_START } from '../redux/quiz/DispatchTypes';
import { quizState } from '../redux/quiz/QuizReducer';
import { RootStore } from '../redux/store';
import CustomButton from './CustomButton';

interface QuizSummaryProps {
  totalQuestions: number
}

const QuizSummary: React.FC<QuizSummaryProps> = ({ totalQuestions }) => {
  const correctAnswers = useSelector<RootStore, quizState["correctAnswers"]>(state => state.quiz.correctAnswers);
  const currentQuiz = useSelector<RootStore, quizState["currentQuiz"]>((state) => state.quiz.currentQuiz);
  const submittedAnswers = useSelector<RootStore, quizState["submittedAnswers"]>((state) => state.quiz.submittedAnswers);
  const dispatch = useDispatch();

  const handleNext = () => {
    // Check if this is the last quiz:
    if (currentQuiz >= quizzes.length - 1) {
      // if true go to first quiz:
      dispatch({
        type: FIRST_QUIZ
      });
    } else {
      // if false go to next quiz:
      dispatch({
        type: NEXT_QUIZ
      });
    }
    // reset score, currentQuestion and submittedAnswers array:
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
    <div className="flex flex-col h-full sm:h-3/4 justify-around items-center">
      <p className="flex justify-center text-lg sm:text-3xl">You got {correctAnswers} out of {totalQuestions} questions right.</p>
      <p className="text-lg sm:text-2xl">{getMessage()}</p>
      <div className="mt-4">
        <h1 className="text-md sm:text-xl mb-4">You had:</h1>
        {
          quizzes[currentQuiz].questions.map((question, index) => (
            <div className="mb-1 text-sm sm:flex">
              <p className="mr-4">{question.text}:</p>
              <p className={`${submittedAnswers[index] === question.correctAnswer ? 'text-green-400' : 'text-red-400 line-through'}`}>{submittedAnswers[index]}</p>
            </div>
          ))
        }
      </div>
      <div className="flex justify-evenly w-full mt-8 sm:w-3/5">
        <CustomButton onClick={handleNext}>Next Quiz</CustomButton>
        <CustomButton onClick={handleRetake}>Retake Quiz</CustomButton>
      </div>
    </div>
  );
}

export default QuizSummary;