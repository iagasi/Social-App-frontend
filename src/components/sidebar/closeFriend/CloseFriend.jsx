import React from 'react'
import "./CloseFriend.css"
function CloseFriend({user}) {
  return (
    <div>
        <ul className="sidebar__friendsList">
<li className='sidebar__friendsFriend'>
  <img  src={user.profilePicture} className='sidebar__friendImg'></img>
<div className='sidebar__friends-name'>{user.userName}</div>
</li>

</ul>
    </div>
  )
}

export default CloseFriend