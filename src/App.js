import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./CrudApp/Components/Main";
import Root from './Pcrud/Root';
import { Route, Switch } from 'react-router';
import Users from './Redux-thunk-logger-axios-json/component/Users';
import Home from './Pcrud/components/StepperForms';
import StepperForm from './Assignment/StepperForm/StepperForm';
import StepperForms from './Pcrud/components/StepperForms';
import Contacts from './Redux-thunk-logger-axios-json/redux/Pages/Contacts';
import Homes from './Redux-thunk-logger-axios-json/Redux-thunk/Pages/Homes';
import AddUser from './Redux-thunk-logger-axios-json/Redux-thunk/Pages/AddUser';
import EditUser from "./Redux-thunk-logger-axios-json/Redux-thunk/Pages/EditUser"
import UserPost from './ReduxToolkit-AsyncThunk-AntdUI/UserPost/UserPost';
import Create from './ReduxToolkit-AsyncThunk-AntdUI/UserPost/Create';
import Profile, { Gallery } from './BetaDocs/DescribeUI/DescribingUI';


function App() {
  return (
    <div>
{/* beta docs */}
{/* <Gallery/> */}
{/* beta docs */}
      {/* redux-thunk crud */}
      {/* <Homes /> */}
      <AddUser />
      {/* <EditUser /> */}
{/* <Switch >
  <Route exact path="/" component={Homes}/>
  <Route exact path="/addUser" component={AddUser}/>
  <Route exact path="/editUser/:id" component={EditUser}/>
      </Switch> */}
      {/* redux-thunk crud */}
      {/* reduxToolkit- AsyncThunk */}
      {/* <h2>Understand Redux Toolkit Using API</h2> */}
      {/* <Switch>
        <Route path="/" exact component={UserPost} />
        <Route path="/create" exact component={Create} />
      </Switch> */}
      {/* reduxToolkit- AsyncThunk */}
      {/* <Homes/> */}
      {/* <Main/> */}
      {/* <Root/> */}
    {/* stepper with form @mui */}
    {/* redux */}
    {/* <Users/> */}
  {/* <Contacts/> */}
    {/* redux */}
      {/* <StepperForm/> */}
      {/* <StepperForms/> */}
        {/* stepper with form @mui errors resolve in console */}
    </div>
  );
}

export default App;
