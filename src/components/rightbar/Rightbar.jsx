import React from 'react'
import { Users } from '../../dummData'
import FriendOnline from './friendOnlain/FriendOnline'
import "./Rightbar.css"

function Rightbar({ profile }) {
  const HomeRightbAr = () => {
    return (
      <>
        <div className="rightbar__birdthday">
          <img className='rightbar__birdthdayImg' src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=" alt="" />
          <span className='rightbar__birdthdayText'> <b>Pola foster </b>and 3  friends on weekend</span>
        </div>
        <div className='rightbar__advert'>

          <img className='rightbar__advertImg' src="https://wallpaperaccess.com/full/1209562.jpg" alt="" />
        </div>
        {Users.map(user => <FriendOnline key={user.id} user={user} />)}
      </>
    )

  }

  const ProfileRightbar = () => {
    return (
      <div>
        <h4 className='rightbar__titile-profile'>User Information</h4>
        <div className="rightbar__info-profile">

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">City:</span>
            <span className="rightbar__infoValue-profile"> NewYork </span>
          </div>

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">From:</span>
            <span className="rightbar__infoValue-profile"> Madrid </span>
          </div>

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">Relationship:</span>
            <span  className="rightbar__infoValue-profile"> none </span>
          </div>
          <h4 className='rightbar__folowingsUserFriend'>User Friends</h4>
<div className='rightbar__folowingsContainer'>
  <div className="rightbar__folowings-profile">

            <img className="rightbar__folowingsImage-profile" src="https://cdn.wallpapersafari.com/26/17/DhbKur.jpg" />
            <h3>USer NAme</h3>

          </div>

          <div className="rightbar__folowings-profile">

            <img className="rightbar__folowingsImage-profile" src="https://cdn.wallpapersafari.com/26/17/DhbKur.jpg" />
            <h3>USer NAme</h3>

          </div>


</div>
        

        </div>
      </div>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar__container">
        <ProfileRightbar />
      </div>
    </div>)
}

export default Rightbar