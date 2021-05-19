import {
  QUIZ_FINISHED,
  FIRST_QUIZ,
  INCREMENT_SCORE,
  NEXT_QUIZ,
  NEXT_QUESTION,
  QuizDispatchTypes,
  QUIZ_START,
  ADD_TO_SUBMITTED_ANSWERS,
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
        correctAnswers: 0,
        submittedAnswers: []
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
    case ADD_TO_SUBMITTED_ANSWERS: 
      return {
        ...state,
        submittedAnswers: [...state.submittedAnswers, action.payload]
      }
    default:
      return state;
  }
};

export default quizReducer;
