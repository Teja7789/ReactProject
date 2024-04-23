import React from 'react'

function DashboardJwt() {
  return (
    <div>DashboardJwt</div>
  )
}

export default DashboardJwt

// import { useContext } from "react"; 
// import { AuthContext } from "./AuthContext";
// // import { Navigate } from "react-router-dom"; 

// function DashboardJwt() {
//   const { token, loading } = useContext(AuthContext);
//   if (loading) {
//     return null;
//   }

//   if (!token) {
//     // eslint-disable-next-line react/react-in-jsx-scope
//     // return(<> <Navigate to="/login" replace /> </>);
//   }
//   // eslint-disable-next-line react/react-in-jsx-scope
//   return <h1>Dashboard: Protected Content Here</h1>;
// }

// export default DashboardJwt;