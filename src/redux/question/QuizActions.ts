import { Dispatch } from 'react';
import { QuestionDispatchTypes, SET_SUBMITTED_ANSWER } from './DispatchTypes';

export const setSubmittedAnswer = (answer: string) => (dispatch:Dispatch<QuestionDispatchTypes>) => {
  dispatch({
    type: SET_SUBMITTED_ANSWER,
    payload: answer
  })
};