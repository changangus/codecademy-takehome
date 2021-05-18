import { combineReducers } from 'redux';
import questionReducer from './question/QuestionReducer';
import quizReducer from './quiz/QuizReducer';

const rootReducer = combineReducers({
  quiz: quizReducer,
  question: questionReducer
});

export default rootReducer;
