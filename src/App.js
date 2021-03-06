import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { useState } from 'react'
//import Courses from './components/courses/Courses';
import Course from './components/course/Course';
import Content from './components/content/Content';
import Login from './components/login/Login';
import Groups from './components/groups/Groups';
import CoursesByGroup from './components/courses/CoursesByGroup';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  function userLogin() {
    setLoggedIn(true)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
          { loggedIn
            ? (
              <Router>
                <Switch>
                  <Route exact path="/" component={Groups}/>
                  {/* <Route exact path="/courses" component={Courses}/> */}
                  <Route exact path="/courses:group" component={CoursesByGroup}/>
                  <Route path="/course:id" component={Course}/>
                  <Route path="/course/content:id" component={Content}/>
                </Switch>
              </Router>
            )
            : <Login userLogin={userLogin} />
          }
        </div>
      </header>
    </div>
  );
}

export default App;
