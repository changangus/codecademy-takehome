import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import Question from '../components/Question';
import QuizSummary from '../components/QuizSummary';
import { QUESTION_NOT_SUBMITTED } from '../redux/question/DispatchTypes';
import { setSubmittedAnswer } from '../redux/question/QuestionActions';
import { questionState } from '../redux/question/QuestionReducer';
import { INCREMENT_SCORE, QUIZ_FINISHED, NEXT_QUESTION } from '../redux/quiz/DispatchTypes';
import { quizState } from '../redux/quiz/QuizReducer';
import { RootStore } from '../redux/store';
import { iQuiz } from '../types/Quiz';
interface QuizProps {
  quiz: iQuiz
}

const Quiz: React.FC<QuizProps> = ({ quiz: { title, questions } }) => {
  const currentQuestion = useSelector<RootStore, quizState["currentQuestion"]>(state => state.quiz.currentQuestion)
  const isQuizFinished = useSelector<RootStore, quizState["isFinished"]>(state => state.quiz.isFinished);
  const submittedAnswer = useSelector<RootStore, questionState["submittedAnswer"]>(state => state.question.submittedAnswer);
  const isSubmitted = useSelector<RootStore, questionState["isSubmitted"]>(state => state.question.isSubmitted);
  const dispatch = useDispatch();
  const totalQuestions = questions.length;
  const isCorrect = submittedAnswer === questions[currentQuestion].correctAnswer;
  
  const handleClick = () => {
    // Check answer:
    if (isCorrect) {
      dispatch({
        type: INCREMENT_SCORE
      });
    }
    dispatch({
      type: QUESTION_NOT_SUBMITTED
    });
    dispatch(setSubmittedAnswer(''));
    // Check if this is the last question:
    if (currentQuestion >= totalQuestions - 1) {
      dispatch({
        type: QUIZ_FINISHED
      })
    } else {
      dispatch({
        type: NEXT_QUESTION
      });
    }
  }
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col justify-around h-3/4 sm:h-3/5 mt-2 sm:mt-14">
        <h1 className="flex justify-center text-xl sm:text-5xl w-full">{title}</h1>
        {isQuizFinished ?
          <QuizSummary totalQuestions={questions.length} />
          : <Question question={questions[currentQuestion]} currentQuestion={currentQuestion} />
        }
      </div>
      {
      isSubmitted && 
      <div className="flex flex-col items-center justify-center">
        <p className="text-lg my-4">{isCorrect ? 'Correct!' : 'Incorrect...'} </p>
        <CustomButton onClick={handleClick}>Next</CustomButton>
      </div>
      }
    </div>

  );
}

export default Quiz;