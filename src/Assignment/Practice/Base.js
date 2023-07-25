import React from 'react'
import UserGetAll from './components/UserGetAll'
import ApiCrud from './components/ApiCrud'
function Base() {
  return (
    <div>Base
        <UserGetAll/>
        <ApiCrud/>
    </div>
  )
}

export default Base