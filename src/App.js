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
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
                <>
                  <Router>
                    <Route
                      path="/"
                      render={(history) => (
                          <BottomNavigation
                            value={history.location.pathname}
                            style={{ position: 'fixed', bottom: '0', width: '600px' }}
                          >
                            <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} component={Link} to="/" />
                            <BottomNavigationAction label="Classic" value="/courses:classics" icon={<MenuBookIcon />} component={Link} to="/courses:classics"  />
                            <BottomNavigationAction label="Sport" value="/courses:sport" icon={<AccountCircleIcon />} component={Link} to="/courses:sport"  />
                          </BottomNavigation>
                      )}
                    />
                    <Switch>
                      <Route exact path="/" component={Groups}/>
                      {/* <Route exact path="/courses" component={Courses}/> */}
                      <Route exact path="/courses:group" component={CoursesByGroup}/>
                      <Route path="/course:id" component={Course}/>
                      <Route path="/course/content:id" component={Content}/>
                    </Switch>
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
