import React from 'react'

function Profile1({user}) {
  return (
    <div>
      <h1>{user.name}</h1>
      <img
                    className="avator"
                    src={user.imageURL}
                    alt={'Photo of ' +  user.name}
                />
    </div>
  )
}

export default Profile1
