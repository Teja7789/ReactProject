// import React from 'react'
// import SignUpApp from './SignUpApp'
// // import NewApp from './NewApp';

// function MainApp() {
//     const [isLogin,setIsLogin] = useState(false);
//     const [email, setEmail] = useState("");
//     const [userName, setUserName] = useState("");
  
//   return isLogin ?  (<SignUpApp/> ):(<Fragment>
//     <label>Email</label>
//     <input
//       type="email"
//       value={email}
//       onChange={(event) => setEmail(event.target.value)}
//     />
//     <label>Username</label>
//     <input
//       type="text"
//       value={userName}
//       onChange={(event) => setUserName(event.target.value)}
//     />
//     <button onClick={() => setIsLogin(true)}>Singup</button>
//   </Fragment>)

    
  
// }

// export default MainApp
import React from 'react'
import SignupPage from './SignupPage'

function MainApp() {
  return (
    <div>MainApp
      <SignupPage />
    </div>
  )
}

export default MainApp