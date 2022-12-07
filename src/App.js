import React from 'react';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/SignIn';
import Main from './components/Main';
import Cart from './components/Cart';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App" >
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/sign-in" element={<Login />} />
            <Route exact path="/sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </div>
    )
  }
}