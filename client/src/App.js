import React from 'react';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './utilities/PrivateRoute'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home'
import PartyListPage from './pages/PartyListPage'
import PartyPage from './pages/PartyPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/party/:id" component={PartyPage} />
        <PrivateRoute path="/parties/user/:userId" component={PartyListPage} />
      </Switch>
    </div>
  );
}

export default App;