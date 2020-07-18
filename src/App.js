import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/scss/font-awesome.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SignIn from './components/pages/SignIn';
import HomeList from './components/pages/HomeList';
import Detail from './components/pages/Detail';
import NotFound from './components/pages/NotFound';
import UserInfo from './components/UserInfo';

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
        <UserInfo />
        <Switch>
          {/* {
            !userData ? <Redirect to='/login' /> : <Redirect to='/todolist' />
          } */}
          <Route exact path="/login" component={SignIn} />
          <Route exact path="/todolist" component={HomeList} />
          <Route exact path="/todolist/:id" component={Detail} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
