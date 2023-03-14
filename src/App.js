import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./CrudApp/Components/Main";
import Root from './Pcrud/Root';
import { Route, Switch } from 'react-router';
import Users from './Redux-thunk-logger-axios-json/component/Users';


function App() {
  return (
    <div>
<Switch >
  <Route exact path="/" component={Users}/>
      
      </Switch>
      {/* <Main/> */}
      {/* <Root/> */}
    </div>
  );
}

export default App;
