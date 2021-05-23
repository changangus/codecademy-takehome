export const RESET_QUESTION_SUBMITTED = 'RESET_QUESTION_SUBMITTED';
export const IS_QUESTIONSUBMITTED = 'IS_QUESTIONSUBMITTED';
export const SET_SUBMITTED_ANSWER = 'SET_SUBMITTED_ANSWER';

interface QuestionNotSubmitted {
  type: typeof RESET_QUESTION_SUBMITTED;
}

interface QuestionSubmitted {
  type: typeof IS_QUESTIONSUBMITTED;
}

interface SetSubmittedAnswer {
  type: typeof SET_SUBMITTED_ANSWER;
  payload: string;
}

export type QuestionDispatchTypes =
  | QuestionNotSubmitted
  | QuestionSubmitted
  | SetSubmittedAnswer;
