import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import React, { useState } from 'react'
import Courses from './components/courses/Courses';
import Course from './components/course/Course';
import Content from './components/content/Content';
import Login from './components/login/Login'
import Groups from './components/groups/Groups'
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
          <Router>
            <Switch>
              <Route exact path="/">
                { loggedIn
                  ? < Groups/>
                  : <Login userLogin={userLogin} />
                }
              </Route>
              <Route exact path="/courses">
                <Courses />
              </Route>
              <Route path="/course:id">
                <Course />
              </Route>
              <Route path="/course/content:id">
                <Content />
              </Route>
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
