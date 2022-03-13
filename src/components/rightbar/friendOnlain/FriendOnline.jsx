import React from 'react'
import "./FriendOnline.css"
function FriendOnline({user}) {
  return (
    <div>

<div className='rightbar__friends'>
  <h4 className='rightbar__friendsTitle'>Friends onlain</h4>
  <div className='rightbar__friendList'>
    <div className='rightbar__friend'>
      <div className="rightbar__friendContainer">
<img src={user.profilePicture} alt="" className="rightbar__friendImage" />
<span className='rightbar__friendOnline'></span>
<span>{user.userName}</span>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default FriendOnline