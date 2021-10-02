// import './App.css';
// // import App from "./components/App";
// import Landing from './pages/landing/Landing'
// import Signup from './pages/signup/Signup'
// import Login from './pages/login/Login'
// import Home from './pages/home/Home'
// import React, { Component } from "react";
// import Watch from './pages/watch/Watch'
// import Shop from './pages/shop/Shop'
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import { render } from "react-dom";

// import { Provider } from 'react-redux';
// import store from './store';
// import { loadUser } from './actions/auth';

// function App() {
//   componentDidMount() {
//     store.dispatch(loadUser());
//   }

//   return (
//       <Provider store={store}>
//         <AlertProvider template={AlertTemplate} {...alertOptions}>
//           <Router>
//             <div className="App">
//               <Switch>
//                 <Route path="/" exact component={Landing} />
//                 <Route path="/signup" exact component={Signup} />
//                 <Route path="/login" exact component={Login} />
//                 <Route path="/home" exact component={Home} />
//                 <Route path="/watch" exact component={Watch} />
//                 <Route path="/shop" exact component={Shop} />
//               </Switch>
//             </div>
//           </Router>
//         </AlertProvider>
//       </Provider>
//   );
// }

// export default App;
// const container = document.getElementById("app");
// render(<App />, container);