import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState } from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import CategoryIcon from "@material-ui/icons/Category";
//import Courses from './components/courses/Courses';
import Course from './components/course/Course';
import Content from './components/content/Content';
import Login from './components/login/Login';
import Groups from './components/groups/Groups';
import CoursesByGroup from './components/courses/CoursesByGroup';
import CoursesOwned from './components/courses/CoursesOwned';
import Profile from './components/profile/Profile';
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
                <>
                  <Router>
                      <div className="main-content-container">
                        <Switch>
                          <Route exact path="/" component={Groups}/>
                          <Route exact path="/profile" component={Profile}/>
                          {/* <Route exact path="/courses" component={Courses}/> */}
                          <Route exact path="/mycourses" component={CoursesOwned}/>
                          <Route exact path="/courses:group" component={CoursesByGroup}/>
                          <Route path="/course:id" component={Course}/>
                          <Route path="/course/content:id" component={Content}/>
                        </Switch>
                      </div>
                      <Route
                        path="/"
                        render={(history) => (
                            <BottomNavigation
                              value={history.location.pathname}
                            >
                              <BottomNavigationAction id="bottomNav1" label="Kategoriat" value="/" icon={<CategoryIcon />} component={Link} to="/"  />
                              <BottomNavigationAction id="bottomNav2" label="Omat Kurssit" value="/mycourses" icon={<HomeIcon />} component={Link} to="/mycourses" />
                              <BottomNavigationAction id="bottomNav3" label="Profiili" value="/profile" icon={<AccountCircleIcon />} component={Link} to="/profile" />
                            </BottomNavigation>
                        )}
                      />
                  </Router>
                </>
              )
            : <Login userLogin={userLogin} />
          }
        </div>
      </header>
    </div>
  );
}

export default App;
