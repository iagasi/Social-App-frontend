import React from 'react'
import "./Comments.css"

import SendIcon from '@mui/icons-material/Send';
import { AuthStateValue, CommentsStateValue, PostStateValue } from '../../context/AuthContext';
import { useRef } from 'react';
import { setComment } from '../../context/posts/PostsActions';
import { useState } from 'react';
function Comments({ postId }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const { comments, commentsDispatch } = CommentsStateValue()
  const { user } = AuthStateValue()
  const inputRef = useRef()
console.log(user);

  const addComment = () => {
    console.log(inputRef.current.value)
    if (!inputRef.current.value) {
      alert("Add some text")
    }
    commentsDispatch(setComment({
      _id: Math.random().toString(),
      userId: user._id,
      postId: postId,
      text: inputRef.current.value

    }))
  }
  return (
    <div className="comments__main">
      <div className='comments__container'>
        <div className='comments__top'>
          {comments && comments.map((comment) => <div key={comment._id} className='comments__comment'>

            <img className="comments__image" src='https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509__480.jpg'></img>
            <div className='comments__text'><p>{comment?.text}</p></div>

          </div>)
          }</div>
        <div className='comments__bottom'>
          <img className="comments__image" src={PF+user?.profilePicture}></img>

          <input className='comments__input' ref={inputRef}></input>
          <SendIcon onClick={() => addComment()} style={{ fontSize: "30px", color: "blue", marginLeft: "15px", cursor: "pointer" }} />
        </div>
      </div>
    </div>

  )
}

export default Comments