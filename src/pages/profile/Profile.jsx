import React, { useState } from 'react'
import "./Profile.css"
import Topbar from '../../components/Topbar'
import Sidebar from "../../components/sidebar/Sidebar"
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed"
import { useParams } from 'react-router-dom'
import { $getUser, uploadUserImage, } from '../../http/user'
import { useEffect } from 'react'
import { AuthStateValue } from '../../context/AuthContext'
function Profile() {
  const { id } = useParams()
  const [currUser, setCurrUser] = useState()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
   const {user}=AuthStateValue()
const [file,setFile]=useState(null)
  useEffect(async () => {
    const user = await $getUser(id)
    setCurrUser(user);

  }, [id])
  const uploadProfilePicture = async () => {
    const fileName=Math.random().toString()+".jpg"
     const data = new FormData()
    data.append("file", file, fileName)
    data.append("userId",user._id)
    await uploadUserImage(data)
    setFile(null)
    // window.location.reload()
  }
console.log(file);
  useEffect(()=>{
file&&uploadProfilePicture()
setFile(null)
  },[file])

  return (
    <div>

      <Topbar />

      <div className="profile__container">
        <div className="profile__top">
          <div className='profile__sidebar'>   <Sidebar /></div>

          <div className="profile__rightbar">
            <div className='profile__topRightbar'>
              <label className='profile__label' htmlFor='file' >

              </label>
              <img html className='profile__topRightbarImg' src="https://media.istockphoto.com/photos/abstract-wavy-object-picture-id1198271727?b=1&k=20&m=1198271727&s=170667a&w=0&h=b626WM5c-lq9g_yGyD0vgufb4LQRX9UgYNWPaNUVses=" alt="" />

              <img className='profile__topRightbarProfileImg' src={`${PF}${currUser?.profilePicture}`} alt="" />

              <input style={{ display: "none" }} type="file" id='file'  onChange={(e) => setFile(e.target.files[0])} />
              <h1 style={{ position: "absolute", marginTop: "500px" }}>   {currUser?.userName}   </h1>

            </div>



            <div className="profile__bottom">
              <Feed />
              <Rightbar profile currUser={currUser} />
            </div>
          </div>
        </div>





      </div>
    </div>
  )
}

export default Profile