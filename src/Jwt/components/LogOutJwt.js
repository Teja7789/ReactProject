import React, { useEffect } from 'react'

function LogOutJwt() {
  //   useEffect(() => {
    
  //   // setToken(null);
    
  //   // Remove the token from local storage
  //   localStorage.removeItem('token');
    
    
  //   // navigate('/login');
  // }, [ ]); 

  function handleLogOut(){
    localStorage.removeItem('token');
  }
  return (
    <div>

      <button onClick={handleLogOut} >Logging out</button>
    </div>
  )
}

export default LogOutJwt


// import React, { useContext, useEffect } from 'react';
// import { AuthContext } from './AuthContext';
// // import { useNavigate } from 'react-router-dom'; 

// const LogOutJwt = () => {
//   const { setToken } = useContext(AuthContext); 
//   // const navigate = useNavigate();

//   useEffect(() => {
    
//     setToken(null);
    
//     // Remove the token from local storage
//     localStorage.removeItem('token');
    
    
//     // navigate('/login');
//   }, [ setToken]); 

//   return (
//     <div>Logging out...</div>
//   );
// };

// export default LogOutJwt;
