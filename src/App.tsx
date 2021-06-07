import React from 'react';
import { Route, RouteProps, Switch } from 'react-router-dom';
import Quiz from './pages/Quiz';
import { quizzes } from './data/quizzes'
import { useSelector } from 'react-redux';
import { RootStore } from './redux/store';
import { quizState } from './redux/quiz/QuizReducer';
import getQuiz from './utils/getQuiz';
import { iQuiz } from './types/Quiz';


const App: React.FC = () => {
  const currentQuiz = useSelector<RootStore, quizState["currentQuiz"]>((state) => state.quiz.currentQuiz)

  return (
    <div className="flex flex-col items-center h-screen mx-6 sm:mx-10 my-4">
      
        <Switch>
          <Route 
            exact 
            path='/:title'
            render={(routeProps) => <Quiz quiz={getQuiz(routeProps.match.params.title, quizzes) as iQuiz}/>}
            />
        </Switch>
      
    </div>
  );
};

export default App;