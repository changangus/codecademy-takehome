import React, { useEffect, useState } from 'react';
import Quiz from './pages/Quiz';
import { getMoreQuizzes, quizzes as QUIZ_DATA} from './data/quizzes'
import { useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { quizState } from './redux/quiz/QuizReducer';
import { iQuiz } from './types/Quiz';

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<iQuiz[]>(QUIZ_DATA)
  const currentQuiz = useSelector<RootStore, quizState["currentQuiz"]>((state) => state.quiz.currentQuiz)
  
  useEffect(() => {
    const getMoreQuizzesCall = async() => {
      try {
        const quizData = await getMoreQuizzes();
        setQuizzes([...quizzes, ...quizData])
      } catch (error) {
        console.log(error)
      }
    };

    if(currentQuiz === quizzes.length) {
      getMoreQuizzesCall();
    }
  }, [currentQuiz])

  return (
    <div className="flex flex-col items-center h-screen mx-6 sm:mx-10 my-4">
      <Quiz quiz={quizzes[currentQuiz]}/>
    </div>
  );
};

export default App;