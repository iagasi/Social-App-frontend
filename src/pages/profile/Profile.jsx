import React from 'react'
import "./Profile.css"
import Topbar from '../../components/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
function Profile() {
  return (
    <div>

      <Topbar />

      <div className="profile__container">
        <div className="profile__top">
          <div className='profile__sidebar'>   <Sidebar /></div>

          <div className="profile__rightbar">
            <div className='profile__topRightbar'>
              <img className='profile__topRightbarImg' src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=" alt="" />
              <img className='profile__topRightbarProfileImg' src="https://swall.teahub.io/photos/small/211-2118017_s-letter-in-heart-wallpapers-love-wallpaper-hd.jpg" alt="" />

            </div>



            <div className="profile__bottom">
              <Feed />
              <Rightbar profile/>
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Profile