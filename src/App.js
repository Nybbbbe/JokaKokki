import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Courses from './components/courses/Courses';
import Course from './components/course/Course';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-container">
          <Router>
            <Switch>
              <Route exact path="/">
                <Courses />
              </Route>
              <Route path="/course:id">
                <Course />
              </Route>
            </Switch>
          </Router>
        </div>
      </header>
    </div>
  );
}

export default App;
