import React, { useEffect, useState } from 'react'

function UserApiPractice() {
  const [user,setUser] =useState([]);
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newEmails,setNewEmails] =useState("");
  const [newNames,setNewNames]=useState("");

  useEffect(()=>{
    fetch("http://localhost:3006/user")
    .then(res => res.json())
    .then(json => setUser(json))
  },[])

  const addUser = () => {
    const name = newName.trim()
    const email = newEmail.trim()
    if (name && email) {
      fetch("http://localhost:3006/user", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then(response => response.json())
        .then(data => {
          setUser([...user, data])
          setNewName("")
          setNewEmail("")
        })
    }
  }
  const deleteUser = id => {
    fetch(`http://localhost:3006/user/${id}`, {
      method: "DELETE",
    })
      .then(response => response.json())
      .then(() => {
        setUser(values => {
          return values.filter(item => item.id !== id)
        })
      })
  }
  const updateUser = id => {
    const user = user.find(user => user.id === id)

    fetch(`http://localhost:3006/user/${id}`, {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(response => response.json())
      .then(() => {
      })
  }
  const onChangeHandler = (id, key, value) => {
    setUser(values => {
      return values.map(item =>
        item.id === id ? { ...item, [key]: value } : item
      )
    })
  }
  const renderData = user.map((datas,i)=>{
    return(<div key={i}>{datas.name} {datas.email} 
    {/* <input value={user.name}
                  onChange={value => onChangeHandler(user.id, "name", value)}/>
    <input value={user.email}
                  onChange={value => onChangeHandler(user.id, "email", value)} />
    <button onClick={() =>updateUser(user.id)}>Update</button>
      <button onClick={() =>deleteUser(user.id)}>delete</button> */}

    
    </div>)
  })
  return (
    <div>ContactList
{/* {renderData}
<input value={newName} onChange={(e)=>setNewName(e.target.value)}/>
    <input value={newEmail} onChange={(e)=>setNewEmail(e.target.value)} />
    <button onClick={addUser}>Add Post</button> */}
    
    </div>
  )
}

export default UserApiPractice