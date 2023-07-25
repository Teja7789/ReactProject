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
import RefHook from './Assignment/Scrimba/RefHook';
import Mains from "./Assignment/Scrimba/contextHook/Mains";
import ReducerHook from './Assignment/Scrimba/ReducerHook';
import MainPage from './Assignment/Scrimba/TestApp/MainPage';
import UserPost from './ReduxToolkit-AsyncThunk-AntdUI/UserPost/UserPost';
import ShopApp from './Ecommerce/ShopApp';
import Base from './Assignment/Practice/Base';



function App() {
  return (
    <div>
      {/* redux-thunk crud */}
{/* <Switch >
  <Route exact path="/" component={Homes}/>
  <Route exact path="/addUser" component={AddUser}/>
  <Route exact path="/editUser/:id" component={EditUser}/>
      </Switch> */}
      {/* redux-thunk crud */}
      {/* reduxToolkit- AsyncThunk */}
      {/* <UserPost/> */}
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
   {/* <RefHook/> */}
   {/* <Mains /> */}
   {/* <ReducerHook/> */}
   {/* <MainPage/> */}
   {/* <ShopApp/> */}
   {/* <Base/> */}
  

     </div>
  );
}

export default App;
