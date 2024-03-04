import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./CrudApp/Components/Main";
import Root from './Pcrud/Root';
import { Route, Switch } from 'react-router';
import Users from './Redux-thunk-logger-axios-json/component/Users';
// import Home from './Pcrud/components/StepperForms';
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
import Ternary from './Assignment/Scrimba/PracticeQuiz/Ternary';
import ToogleMain from './Assignment/Scrimba/PracticeQuiz/ToggleTheme/ToogleMain';
import UserGetAll from './Assignment/Practice/components/UserGetAll';
import ApiCrud from './Assignment/Practice/components/ApiCrud';
import NewApp from './Assignment/Practice/components/NewApp';
import SignUpApp from './Assignment/Practice/components/SignUpApp';
import MainApp from './Assignment/Practice/components/MainApp';
import PrimeDataTable from './Assignment/Practice/PrimereactDataTable/PrimeDataTable';
import MyForm from './Assignment/Practice/components/MyForm';
import YoutubeForm from './Assignment/Practice/useForm/components/YoutubeForm';
import Create from './Redux-thunk-logger-axios-json/ReduxCrudUseForm/Components/Create';
import ReactAntdPagination from './Assignment/Practice/components/ReactAntdPagination';
import Crud from './Assignment/Practice/components/Crud';
import SearchUsers from './Assignment/Practice/HOC/UsersList';
import SearchTodos from './Assignment/Practice/HOC/TodoList';
// import Home from './Redux-saga-logger-axios-json/pages/Home';
import MainStateProp from './Assignment/Practice/StateAndProps/MainStateProp';
import FunctionUnMountComponent from './Assignment/Practice/FunctionUnMountComponent';
// import FirstTable from './Galaxy/components/FirstTable';
// import BasicSorting from './Galaxy/components/BasicSorting';
// import DataTable from 'react-data-table-component';
// import DataTableComponent from './Galaxy/components/DataTableComponent';
// import TableBasicSorting from './Galaxy/components/TableBasicSorting';
// import TableBasicSorting from './Galaxy/components/BasicSorting.js';
// import DataTable from './Galaxy/components/DataTableComp';
// import DataTableComp from './Galaxy/components/FirstTable';
import Home from './Redux-saga-logger-axios-json/pages/Home';
import PostUser from './Redux-saga-logger-axios-json/pages/PostUser';
import GridLayout from './Assignment/Practice/CSS/Bootstrap/GridLayout';
import ScssIndex from './Assignment/Practice/CSS/SCSS/BootStrap/ScssIndex';
import Day1 from './Assignment/Practice/CSS/Day1';
import Day2 from './Assignment/Practice/CSS/Day2';
import Day3 from './Assignment/Practice/CSS/Day3';
import Day4 from './Assignment/Practice/CSS/Day4';
import Day5 from './Assignment/Practice/CSS/Day5';
import DataAsyncUi from './Assignment/Practice/REACT/UseStateConcept/DataAsyncUi';
import ParentComponent from './Assignment/Practice/REACT/PropsConcept/PropsDrilling/ParentComponent';
import BoxComponent from './Assignment/Practice/REACT/UseStateConcept/BoxComponent';
import Cart from './ReduxToolkit/Components/Cart';
import NetflixMain from './NetflixGpt/components/NetflixMain';
// import NewMovieRelease from './Assignment/Practice/components/ahaTickects/NewMovieRelease';
//netflix

function App() {
  return (
    <div>
      {/* redux-thunk crud */}
{/* <Switch >
  <Route exact path="/a" component={Homes}/>
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
  {/* Daily quiz */}
  {/* <Ternary/> */}
  {/* Daily quiz */}
{/* <ApiCrud/> */}
{/* Galaxy */}
{/* <BasicSorting/> */}
{/* <DataTableComponent/> */}
{/* <DataTableComp/> */}
{/* <FirstTable/> */}
{/* Galaxy */}
{/* <NewApp/> */}
{/* <SignUpApp/> */}
{/* <MainApp/> */}
{/* dataTable */}
{/* <PrimeDataTable/> */}

{/* dataTable */}
{/* reactRedux */}
{/* reactRedux */}
{/* <MyForm/> */}
{/* <ApiCrud/> */}
{/* reduxSaga */}
{/* <p className='fw-bold'>add</p> */}
{/* reduxSaga */}
{/* useForm */}
{/* <YoutubeForm/> */}
{/* useForm */}
{/* <AddUser /> */}
{/* useFromCrud */}
{/* <Create/> */}
{/* useFromCrud */}
{/* <ReactAntdPagination /> */}
{/* <Crud/> */}


{/* <AddCrud/> */}
{/* <Mains/> */}
{/* <h2>Higher Order Component</h2>
      <div className="section">
        <div>
          <SearchUsers />
        </div>
        <div>
          <SearchTodos />
        </div>
      </div> */}
{/* <Home  /> */}
{/* <Crud/> */}
{/* <MainStateProp/> */}
{/* <FunctionUnMountComponent /> */}
{/* <Home />
<PostUser /> */}

{/* CSS */}
{/* <Day1 /> */}
{/* <Day2 /> */}
{/* <Day3 /> */}
{/* <Day4 /> */}
{/* <Day5 /> */}
{/* CSS */}
{/* Bootstrap */}
{/* <GridLayout/> */}
{/* SCSS */}
{/* <ScssIndex /> */}
{/* SCSS */}
{/* Bootstrap */}
{/* CSS */}
{/* Props */}
{/* <ParentComponent /> */}
{/* Props */}
{/* UseSate */}
{/* <DataAsyncUi /> */}
{/* <BoxComponent /> */}
{/* UseState */}

{/* reduxToolkit */}
{/* <Cart /> */}
{/* reduxToolkit */}

{/* ahaTickects */}
{/* <NewMovieRelease /> */}
{/* ahaTickexts */}
{/* netflixApp */}
<NetflixMain />
{/* netflixApp */}
     </div>
  );
}

export default App;
