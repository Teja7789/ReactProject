import React, { useState } from 'react';
import LoginForm from './LoginForm';
import NewApp from './NewApp';
// import MultiStepForm from './MultiStepForm';

const SignupPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // You can implement a function to toggle login state
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <NewApp />
      ) : (
        <LoginForm onLogin={toggleLogin} />
      )}
    </div>
  );
};

export default SignupPage;