import React, { useEffect, useState } from 'react'
import Post from '../post/Post'
import Share from '../share/Share'
import "./Feed.css"

import { $receveTimelinePost } from '../../http/post'
import { AuthStateValue, PostStateValue } from '../../context/AuthContext'
import { setAllposts } from '../../context/posts/PostsActions'
function Feed() {
  const [posts, setPosts] = useState([])
  const { user, setUser } = AuthStateValue()
  const { posts: Posts, postsDispatch } = PostStateValue()
  const [postOwner, setPostOwner] = useState([])

  useEffect(async () => {

    const post = await $receveTimelinePost(user?._id)
    setPosts(post.postsArray?.sort((p1, p2) => new Date(p2.createdAt) - new Date(p1.createdAt)))
    postsDispatch(setAllposts(post.postsArray))
    setPostOwner(post.postOwner)


  }, [])

  return (
    <div className='feed'>
      <div className='feed__container'>

        <Share />
        {Posts?.map((post, i) => <Post key={post._id} post={post} friendPostOwner={postOwner} />)}
      </div>

    </div>
  )
}

export default Feed