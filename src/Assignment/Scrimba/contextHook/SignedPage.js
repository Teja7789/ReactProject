import React, { useContext, Fragment } from "react";
import FormContext from "./Context";
import LoggedPage from "./LoggedPage";

function SignedPage(props) {
  const { email, setEmail, userName, setUserName, isLoggedIn, setIsLoggedIn } = useContext(FormContext);
  return isLoggedIn ? (
    <LoggedPage />
  ) : (
    <Fragment>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Username</label>
      <input
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={() => setIsLoggedIn(true)}>Singup</button>
    </Fragment>
  );
}

export default SignedPage;