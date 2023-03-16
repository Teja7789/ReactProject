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



function App() {
  return (
    <div>
<Switch >
  {/* <Route exact path="/" component={Users}/> */}
      
      </Switch>
      {/* <Main/> */}
      {/* <Root/> */}
    {/* stepper with form @mui */}
      {/* <StepperForm/> */}
      <StepperForms/>
        {/* stepper with form @mui */}
    </div>
  );
}

export default App;
