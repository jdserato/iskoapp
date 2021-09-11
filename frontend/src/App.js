import './App.css';
import Landing from './pages/landing/Landing';
import Signup from './pages/signup/Signup';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
