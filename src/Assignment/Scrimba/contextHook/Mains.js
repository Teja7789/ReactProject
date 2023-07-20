import React ,{useState} from 'react'
import FormContext from './Context';
import SignedPage from './SignedPage';
function Mains(props) {
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
        <FormContext.Provider
        value={{
            email,
            setEmail,
            userName,
            setUserName,
            isLoggedIn,
            setIsLoggedIn

        }}>
<SignedPage/>
        </FormContext.Provider>
    </div>
  )
}

export default Mains;