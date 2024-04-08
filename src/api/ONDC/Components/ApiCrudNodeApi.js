import React, { useEffect, useState } from 'react'

function ApiCrudNodeApi() {
    const [users, setUsers] = useState([])
    useEffect(() => {
    fetch("http://localhost:3000/")
      .then(response => console.log(response,"json"))
      // .then(json => {
      //   console.log(json,"json")
      //   // setUsers(json)
      // }
      // )
  }, [])

  // const usersRender = users.map((data) => {
  //   return(
  //     <div>
  //       <p>{data.id}</p>
  //       <p>{data.name}</p>
  //     </div>
  //   )
  // })

  return (
    <div>
      {/* AddContacts - {usersRender} */}

<div>

    </div>
    </div>
  )
}

export default ApiCrudNodeApi