import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import "./Post.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

import { Users } from "../../dummData"
function Post({ post }) {

    const [like, setLike] = useState(post.like)
    const [isLiked, setIsLIked] = useState()
    
  const likeHandler=()=>{
      setLike(isLiked?like-1:like+1)
      setIsLIked(!isLiked)
  }
    const user = Users.find(user => user.id == post.userId)
    console.log(user);
    return (
        <div className='post'>
            <div className='post__container'>

                <section className='post__top'>
                    <div className="post__topLeft">
                        <img className='post__userImage' src={user.profilePicture} alt=" profile picture" />
                        <span className='post__userName'> {user.userName}</span>
                        <span className='post__date'>{post.date} minn ago</span>
                    </div>
                    <div className="post__topRight">
                        <MoreVert />
                    </div>
                </section>

                <section className='post__center'>
                    <span className='post__text'>{post.description}</span>
                    <img className='post__centerImage' src="https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg" alt="" />
                </section>
                <section className='post__bottom'>
                    <div className="post__bootomLeft">
                        <div onClick={likeHandler}>
                            < ThumbUpAltIcon style={{ cursor:"pointer",fill: "blue", transform: "scale(1.5)" }} />

                        </div>
                        <div onClick={likeHandler}>
                            <FavoriteIcon className='post__heartIcon' />

                        </div>
                        <span className='post__likeCounter'>{like} Persons liked it</span>
                    </div>
                    <div className="post__bootomRight">
                        <span className='post__commentText'>{post.comment} Coments</span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Post