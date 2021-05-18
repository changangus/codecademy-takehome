export const QUESTION_NOT_SUBMITTED = 'QUESTION_NOT_SUBMITTED';
export const QUESTION_SUBMITTED = "QUESTION_SUBMITTED"
export const SET_SUBMITTED_ANSWER = 'SET_SUBMITTED_ANSWER';

interface QuestionNotSubmitted {
  type: typeof QUESTION_NOT_SUBMITTED
};

interface QuestionSubmitted {
  type: typeof QUESTION_SUBMITTED
};

interface SetSubmittedAnswer {
  type: typeof SET_SUBMITTED_ANSWER,
  payload: string
}

export type QuestionDispatchTypes = 
  | QuestionNotSubmitted
  | QuestionSubmitted
  | SetSubmittedAnswer
