import React from 'react'
import HOC from './HOC'

function UsersList({money,handleInc}) {
  return (
    <div>UsersList money {money}
    <button onClick={handleInc}>Add Increment</button>
    </div>
  )
}

export default HOC(UsersList)



// import React, { useEffect, useState } from "react";
// import HOC from "./HOC";

// const UsersList = ({ data }) => {
//   let renderUsers = data.map((user) => {
//     return (
//       <div key={user.id}>
//         <p>
//           <strong>{user.name}</strong>
//         </p>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <div>{renderUsers}</div>
//     </div>
//   );
// };

// const SearchUsers = HOC(UsersList, "users");

// export default SearchUsers;