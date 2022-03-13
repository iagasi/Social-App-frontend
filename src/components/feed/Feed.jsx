import React from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"
import {Posts,Users} from "../../dummData"
function Feed() {
  return (
    <div className='feed'>
      <div className='feed__container'>

<Share/>
{Posts.map(post=><Post key={post.id} post={post}/>)}
      </div>
      
     </div>
  )
}

export default Feed