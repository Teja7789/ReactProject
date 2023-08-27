import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import AddEditUser from "../pages/AddEditUser";
import UserInfo from "../pages/UserInfo";
import About from "../pages/About";
import AppHeader from './AppHeader';
function App() {
  return (
    <BrowserRouter>
    <div>
      <AppHeader/>
<Switch>
  <Route exact  path="/" component={Home}/>
  <Route  path="/addUser" component={AddEditUser}/>
  <Route  path="/editUser/:id" component={AddEditUser}/>
  <Route  path="/userInfo/:id" component={UserInfo}/>
  <Route  path="/about" component={About}/>
</Switch>
    </div>
    </BrowserRouter>
  )
}

export default App