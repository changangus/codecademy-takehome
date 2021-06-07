import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
import Question from '../components/Question';
import QuizSummary from '../components/QuizSummary';
import { RESET_QUESTION_SUBMITTED, SET_SUBMITTED_ANSWER } from '../redux/question/DispatchTypes';
import { questionState } from '../redux/question/QuestionReducer';
import { INCREMENT_SCORE, QUIZ_FINISHED, NEXT_QUESTION, ADD_TO_SUBMITTED_ANSWERS } from '../redux/quiz/DispatchTypes';
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
    // Add to submittedAnswers array:
    dispatch({
      type: ADD_TO_SUBMITTED_ANSWERS,
      payload: submittedAnswer
    });
    // Check answer:
    if (isCorrect) {
      dispatch({
        type: INCREMENT_SCORE
      });
    }
    dispatch({
      type: RESET_QUESTION_SUBMITTED
    });
    dispatch({
      type: SET_SUBMITTED_ANSWER,
      payload: ''
    });
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
    <div className="flex flex-col h-full" >
      <div className="flex flex-col justify-around h-4/5 sm:h-3/5 mt-2 sm:mt-14">
        <h1 className="flex justify-center text-xl mb-4 sm:text-5xl w-full">{title}</h1>
        {
          isQuizFinished ?
            <QuizSummary totalQuestions={questions.length} />
            : <Question question={questions[currentQuestion]} currentQuestion={currentQuestion} isSubmitted={isSubmitted} submittedAnswer={submittedAnswer} />
        }
      </div>
      {
        isSubmitted &&
        <div className="flex flex-col items-center justify-center">
          <p className="text-lg mt-1 sm:my-4" data-testid="question-response">{isCorrect ? 'Correct!' : 'Incorrect...'} </p>
          <CustomButton onClick={handleClick}>Next</CustomButton>
        </div>
      }
    </div>
  );
}

export default Quiz;