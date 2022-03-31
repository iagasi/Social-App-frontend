import React from 'react'
import "./Comments.css"

import SendIcon from '@mui/icons-material/Send';
import { AuthStateValue, CommentsStateValue, PostStateValue } from '../../context/AuthContext';
import { useRef } from 'react';
import { setComment } from '../../context/posts/PostsActions';
import { useState } from 'react';
import { useEffect } from 'react';
function Comments({ postId,setCommentsLength }) {
  const PF=process.env.REACT_APP_PUBLIC_FOLDER
  const { comments, commentsDispatch } = CommentsStateValue()
  const{posts}=PostStateValue()
  const { user } = AuthStateValue()
  const inputRef = useRef()
const[postComments,setPostsComments]=useState()




useEffect(()=>{
setPostsComments((comments?.filter(comment=>comment.postId==postId)))
setCommentsLength(comments.length)
},[comments])

console.log(postComments);
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
          {postComments && postComments.map((comment) => <div key={comment._id} className='comments__comment'>

            <img className="comments__image" src={user._id==comment.userId?PF+user.profilePicture:console.log("eee")}></img>
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