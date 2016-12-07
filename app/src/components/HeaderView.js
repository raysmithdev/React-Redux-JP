import React from 'react'

const HeaderView = ({ user }) => {
  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.age}</p>
      <p>{user.location}</p>
    </div>
  )
}

export default HeaderView
