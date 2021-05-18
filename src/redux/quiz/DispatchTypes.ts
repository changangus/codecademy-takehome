export const NEXT_QUIZ = 'NEXT_QUIZ';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const FIRST_QUIZ = 'FIRST_QUIZ';
export const QUIZ_START = 'QUIZ_START';
export const QUIZ_FINISHED = 'QUIZ_FINISHED';
export const INCREMENT_SCORE = 'INCREMENT_SCORE';

interface NextQuiz {
  type: typeof NEXT_QUIZ;
}

interface NextQuestion {
  type: typeof NEXT_QUESTION;
}

interface FirstQuiz {
  type: typeof FIRST_QUIZ;
}

interface QuizStart {
  type: typeof QUIZ_START;
}

interface QuizFinished {
  type: typeof QUIZ_FINISHED;
}

interface IncrementScore {
  type: typeof INCREMENT_SCORE;
}

export type QuizDispatchTypes =
  | NextQuiz
  | NextQuestion
  | FirstQuiz
  | QuizStart
  | QuizFinished
  | IncrementScore;
