import React, { useState } from 'react'
import { useEffect } from 'react';
import { AuthStateValue } from '../../context/AuthContext';
import "./Message.css"
import {format} from "timeago.js"

function Message({ message }) {
  console.log(message);
    const {user}=AuthStateValue()

  const [currUser,setCurrUser]=useState()

  useEffect(()=>{
     

if(user._id==message.sender){ 
  setCurrUser(true)
}
  },[user,message])

  return (

    
    <div className={`messenger__messageBody ${currUser&&" meseenger__mesPosition"}`}>




      <div className={`messenger__message  ${ currUser&&'meseenger__mesColor'}`} >
        <img className='messenger__messageImg' src="https://media.istockphoto.com/vectors/default-avatar-profile-icon-grey-photo-placeholder-vector-id846183008?k=20&m=846183008&s=170667a&w=0&h=WIxZSP7aJ9jSvW3xqzDsWSI5g666kVBBgCNkABzYs68="></img>
        {message?.text}
        <small className='messenger__messageTime'>{format(message?.createdAt)}</small>

      </div>
    </div>
  )
}

export default Message