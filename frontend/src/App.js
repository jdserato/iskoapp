import './App.css';
import Landing from './pages/landing/Landing'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/login" exact component={Login} />
          <Route path="/home" exact component={Home} />
          <Route path="/watch" exact component={Watch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
