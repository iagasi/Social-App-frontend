import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { followUser, unfollowUser } from '../../context/AuthAction'
import { AuthStateValue, UserStateValue } from '../../context/AuthContext'
import { Users } from '../../dummData'
import { $followUser, $getUserFriends, $UnFollowUser } from '../../http/user'
import FriendOnline from './friendOnlain/FriendOnline'
import "./Rightbar.css"

function Rightbar({ profile, currUser }) {
  const { user, dispatch } = UserStateValue()
  const PF = process.env.REACT_APP_PUBLIC_FOLDER


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
        {/* {Users.map(user => <FriendOnline key={user?.id} user={user} />)} */}
      </>
    )

  }

  const ProfileRightbar = () => {
    const [follow, setFollow] = useState()

    const [friends, setFriends] = useState()
    const { id } = useParams()
    useEffect(async () => {
      const friends = await $getUserFriends(id)
      setFriends(friends)
    }, [id])

    useEffect(() => {
      if (user?.followers?.includes(id)) { setFollow("Delete Friend") }
      else { setFollow("Add To Friends") }
    }, [id])

    const followHandler = async () => {
      if (follow == "Delete Friend") {
        console.log(user._id);
        const res = await $UnFollowUser(id, user._id)
        dispatch(unfollowUser(id))
        setFollow("Add To Friends")
      }

      else {
        console.log(user._id)
        const res = await $followUser(id, user._id)
        dispatch(followUser(id))
        setFollow("Delete Friend")
      }
    }


    return (
      <div>
        {id !== user?._id &&
          <button className='share__button' style={{ marginBottom: "30px" }} onClick={() => followHandler()}>{follow}</button>
        }
        <h4 className='rightbar__titile-profile'>User Information</h4>
        <div className="rightbar__info-profile">

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">City:</span>
            <span className="rightbar__infoValue-profile"> NewYork </span>
          </div>

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">From:</span>
            <span className="rightbar__infoValue-profile"> {currUser?.from && "Madrid"} </span>
          </div>

          <div className="rightbar__infoItem-profile">
            <span className="rightbar__infoKey-profile">Relationship:</span>
            <span className="rightbar__infoValue-profile">{currUser?.relationship && "none"} </span>
          </div>
          <h4 className='rightbar__folowingsUserFriend'>{currUser?.userName}: Friends {currUser?.followers?.length}</h4>
          <div className='rightbar__folowingsContainer'>

            {friends?.map((e) =>
              <NavLink key={e._id} to={`/profile/${e._id}`}>
                <div className="rightbar__folowings-profile">

                  <img className="rightbar__folowingsImage-profile" src={PF + e.profilePicture} />
                  <h3>{e.userName}</h3>

                </div>

              </NavLink>

            )}


            {/* <div className="rightbar__folowings-profile">

            <img className="rightbar__folowingsImage-profile" src="https://cdn.wallpapersafari.com/26/17/DhbKur.jpg" />
            <h3>USer NAme</h3>

          </div> */}


          </div>


        </div>
      </div>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbar__container">
        {profile ? <ProfileRightbar /> : <HomeRightbAr />}
      </div>
    </div>)
}

export default Rightbar