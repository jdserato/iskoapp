// import React, { Component } from "react";
// import { render } from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [],
//       loaded: false,
//       placeholder: "Loading"
//     };
//   }

//   componentDidMount() {
//     fetch("api/account")
//       .then(response => {
//         if (response.status > 400) {
//           return this.setState(() => {
//             return { placeholder: "Something went wrong!" };
//           });
//         }
//         return response.json();
//       })
//       .then(data => {
//         this.setState(() => {
//           return {
//             data,
//             loaded: true
//           };
//         });
//       });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.data.map(contact => {
//           return (
//             <li key={contact.id}>
//               {contact.name} - {contact.email}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }

// export default App;

// const container = document.getElementById("app");
// render(<App />, container);

import './../App.css';
// import App from "./components/App";
import Landing from './../pages/landing/Landing'
import Signup from './../pages/signup/Signup'
import Login from './../pages/login/Login'
import Home from './../pages/home/Home'
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Watch from './../pages/watch/Watch'
import Shop from './../pages/shop/Shop'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { render } from "react-dom";

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { Provider } from 'react-redux';
import store from './../store';
import { loadUser } from './../actions/auth';

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {
  componentDidMount() {
    // store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router>
            <div className="App">
              <Switch>
                <Route path="/" exact component={Landing} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/login" exact component={Login} />
                <Route path="/home" exact component={Home} />
                <Route path="/watch" exact component={Watch} />
                <Route path="/shop" exact component={Shop} />
              </Switch>
            </div>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

export default App;
// const container = document.getElementById("app");
// render(<App />, container);

ReactDOM.render(<App />, document.getElementById('app'));
