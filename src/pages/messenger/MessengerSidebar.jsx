import React, { useEffect, useState } from 'react'
import { AuthStateValue, FriendsStateValue } from '../../context/AuthContext'
import { $getUser } from '../../http/user';

function MessengerSidebar({ left, data,setCurrentConversation ,setChatWith  }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const { friends } = FriendsStateValue()
  console.log(friends)
  const { user } = AuthStateValue()
  const [currUser, setCurrUser] = useState(null)

  useEffect(async () => {
    if (left) {
      if (data && user) {
        const friend = data.find(foreach => foreach.members.includes(user._id))
        

        const friendId = friend.members.find(id => id !== user._id)
        const friendo = friends.find(friend => friend._id === friendId)
        setCurrUser(friendo)
    
      }
    }
  }, [user, data,friends])

  const conversationHandler=()=>{
    setCurrentConversation(data)
    setChatWith(currUser)
   }
  return (
    <section className='messenger__right'>
      <h3>{left ? "Conversations" : " Start conversation with  Friends"}</h3>

      {
        !left ? data?.map((data, i) =>

          <div className='messenger__onlineUser' key={i} >
            <span className='messenger__onlineDot'></span>
            <img className='messenger__onlineImg' src={PF+data?.profilePicture} />
            <h4>{data?.userName}</h4>
           
          </div>

        ) :
          <div className='messenger__onlineUser'  onClick={()=>conversationHandler()}>
            <span className='messenger__onlineDot'></span>
            <img className='messenger__onlineImg' src={PF+currUser?.profilePicture} />
            <h4>{currUser?.userName}</h4>

          </div>
      }

    </section>
  )
}

export default MessengerSidebar