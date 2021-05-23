import {
  QuestionDispatchTypes,
  RESET_QUESTION_SUBMITTED,
  IS_QUESTIONSUBMITTED,
  SET_SUBMITTED_ANSWER,
} from './DispatchTypes';

export interface questionState {
  isSubmitted: boolean;
  submittedAnswer: string;
}

export const INITIAL_STATE = {
  isSubmitted: false,
  submittedAnswer: '',
};

const questionReducer = (
  state: questionState = INITIAL_STATE,
  action: QuestionDispatchTypes,
) => {
  switch (action.type) {
    case IS_QUESTIONSUBMITTED:
      return {
        ...state,
        isSubmitted: true,
      };
    case RESET_QUESTION_SUBMITTED:
      return {
        ...state,
        isSubmitted: false,
      };
    case SET_SUBMITTED_ANSWER:
      return {
        ...state,
        submittedAnswer: action.payload,
      };
    default:
      return state;
  }
};

export default questionReducer;
