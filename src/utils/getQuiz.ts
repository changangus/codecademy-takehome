import { iQuiz } from '../types/Quiz';

function getQuiz(title: string, array: iQuiz[]) {
  const foundQuiz = array.find(quiz => {
    return quiz.title === title 
  });

  return foundQuiz
};

export default getQuiz