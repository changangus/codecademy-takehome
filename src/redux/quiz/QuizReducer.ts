import {
  QUIZ_FINISHED,
  FIRST_QUIZ,
  INCREMENT_SCORE,
  NEXT_QUIZ,
  NEXT_QUESTION,
  QuizDispatchTypes,
  QUIZ_START,
} from './DispatchTypes';

export interface quizState {
  currentQuiz: number;
  currentQuestion: number;
  correctAnswers: number;
  isFinished: boolean;
  submittedAnswers: string[];
}

export const INITIAL_STATE = {
  currentQuiz: 0,
  currentQuestion: 0,
  correctAnswers: 0,
  isFinished: false,
  submittedAnswers: [],
};

const quizReducer = (
  state: quizState = INITIAL_STATE,
  action: QuizDispatchTypes,
) => {
  switch (action.type) {
    case QUIZ_START:
      return {
        ...state,
        isFinished: false,
        currentQuestion: 0,
        correctAnswers: 0
      };
    case QUIZ_FINISHED:
      return {
        ...state,
        isFinished: true,
      };
    case NEXT_QUIZ:
      return {
        ...state,
        currentQuiz: state.currentQuiz + 1,
      };
    case FIRST_QUIZ:
      return {
        ...state,
        currentQuiz: 0,
      };
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case INCREMENT_SCORE:
      return {
        ...state,
        correctAnswers: state.correctAnswers + 1,
      };
    default:
      return state;
  }
};

export default quizReducer;
