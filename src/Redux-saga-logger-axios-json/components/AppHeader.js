import React from 'react'

function AppHeader() {
  return (
    <div>AppHeader
    <ul>
        <li>Contact</li>
        <li><a href="/">Home</a></li>
        <li><a href="/addUser">AddUser</a></li>
        <li><a href="/editUser/:id">EditUser</a></li>
        <li><a href="/userInfo/:id">UserInfo</a></li>
        <li><a href="/about">About</a></li>
    </ul>
    </div>
  )
}

export default AppHeader