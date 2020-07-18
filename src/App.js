import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import SignIn from './components/pages/SignIn';
import List from './components/pages/List';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/NotFound';

function App() {

  const userInfo = {
    email: 'busra@gmail.com',
    password: '12345'
  };

  localStorage.setItem('user', JSON.stringify(userInfo));
  // const userData = localStorage.getItem('user');

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                // userData ? <Redirect to="/todolist" /> : <Redirect to="/login" />
                <Redirect to="/login" /> 
              )
            }}
          />
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/todolist" component={List} />
          <Route exact path="/todolist/:id" component={Detail} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
