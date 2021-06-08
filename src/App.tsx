import React, { useEffect, useState } from 'react';
import Quiz from './pages/Quiz';
import { getMoreQuizzes, getQuizzes } from './data/quizzes';
import { useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { quizState } from './redux/quiz/QuizReducer';

const App: React.FC = () => {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const currentQuiz = useSelector<RootStore, quizState['currentQuiz']>(
    (state) => state.quiz.currentQuiz,
  );

  useEffect(() => {
    const getQuizzesCall = async () => {
      try {
        const quizData = await getQuizzes();
        setQuizzes(quizData);
      } catch (error) {
        console.log(error);
      }
    };

    if (quizzes.length === 0) {
      getQuizzesCall();
    }

    const getMoreQuizzesCall = async () => {
      try {
        const quizData = await getMoreQuizzes();
        setQuizzes([...quizzes, ...quizData]);
      } catch (error) {
        console.log(error);
      }
    };
    console.log(currentQuiz, quizzes);
    // TODO
    // see if there is a better conditional that is more dynamic:
    if (currentQuiz + 1 === 2) {
      getMoreQuizzesCall();
      console.log(quizzes);
    }
  }, [currentQuiz]);
  console.log('!!', currentQuiz, quizzes);
  return (
    <div className="flex flex-col items-center h-screen mx-6 sm:mx-10 my-4">
      {quizzes.length === 0 ? (
        <div>Loading....</div>
      ) : (
        <Quiz quiz={quizzes[currentQuiz]} quizzes={quizzes} />
      )}
    </div>
  );
};

export default App;