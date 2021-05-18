import { QuestionDispatchTypes, QUESTION_NOT_SUBMITTED, QUESTION_SUBMITTED, SET_SUBMITTED_ANSWER } from './DispatchTypes';

export interface questionState {
  isSubmitted: boolean;
  submittedAnswer: string;
};

export const INITIAL_STATE = {
  isSubmitted: false,
  submittedAnswer: '',
};

const questionReducer = (state:questionState = INITIAL_STATE, action: QuestionDispatchTypes) => {
  switch(action.type) {
    case QUESTION_SUBMITTED:
      return {
        ...state,
        isSubmitted: true
      }
    case QUESTION_NOT_SUBMITTED:
      return {
        ...state,
        isSubmitted: false
      }
    case SET_SUBMITTED_ANSWER:
      return {
        ...state,
        submittedAnswer: action.payload
      }
    default:
      return state
  }
};

export default questionReducer