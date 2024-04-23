import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from './components/AuthContext'
import LoginJwt from './components/LoginJwt';
import LogOutJwt from './components/LogOutJwt';
import RegistrationJwt from './components/RegistrationJwt';
import DashboardJwt from './components/DashboardJwt';

function JwtApp() {
  return ( <>
  
  {/* <LoginJwt /> */}
  {/* <RegistrationJwt /> */}
  <LogOutJwt />
  </> 
  //   <Router>
  //   <AuthProvider>
  //     <Routes>
  //       <Route path="/login" element={<LoginJwt />} />
  //       <Route path="/logout" element={<LogOutJwt />} />
  //       <Route path="/register" element={<RegistrationJwt />} />{" "}
  //       <Route path="/dashboard" element={<DashboardJwt />} />
  //       <Route path="*" element={<Navigate to="/login" replace />} />
  //     </Routes>
  //   </AuthProvider>
  // </Router>
  )
}

export default JwtApp