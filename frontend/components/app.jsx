import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './views/home';
import LoginContainer from './containers/login_container'

const App=() =>(
    <div>
          <Switch>
           
             <Route path="/login" component={LoginContainer} />  
             <Route exact path="/" component={Home} />   
             <Route path="/dashboard" component={Home} />   
          </Switch>
         
  
    </div>
);

export default App;