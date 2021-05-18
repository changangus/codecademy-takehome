import { SET_SUBMITTED_ANSWER } from './DispatchTypes';

export const setSubmittedAnswer = (answer: string) => {
  return {
    type: SET_SUBMITTED_ANSWER,
    payload: answer
  }
};