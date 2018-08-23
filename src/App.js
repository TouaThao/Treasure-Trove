import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import HomePage from './components/HomePage/HomePage';
import EditPage from './components/EditProfile/EditProfile'
import registerLocation from './components/RegisterLocation/RegisterLocation'
import FeedBack from './components/OwnerFeedBackPage/OwnerFeedBackPage'

import './styles/main.css';

const App = () => (
  <div>
    <Header title="Treasure Trove" />
    <Router>
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route 
        path="/home"
        component= {HomePage}
        />
        <Route
          path="/login"
          component={LoginPage}
        />
        <Route
          path="/register"
          component={RegisterPage}
        />
        <Route
          path="/user"
          component={UserPage}
        />
        <Route
          path="/info"
          component={InfoPage}
        />
                <Route
          path="/edit"
          component={EditPage}
        />
          <Route
          path="/FeedBack"
          component={FeedBack}
        />
                <Route
          path="/registerlocation"
          component={registerLocation}
        />
        {/* OTHERWISE (no path!) */}
        <Route render={() => <h1>404</h1>} />

      </Switch>
    </Router>
  </div>
);

export default App;
