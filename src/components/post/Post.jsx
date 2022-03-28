import { MoreVert } from '@mui/icons-material'
import React, { useEffect, useRef, useState } from 'react'
import "./Post.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { format } from "timeago.js"
import { http } from '../../http/axios';
import { AuthStateValue, CommentsStateValue, PostStateValue } from '../../context/AuthContext';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { $deletePost } from '../../http/post';
import { deletePost } from '../../context/posts/PostsActions';
import Comments from '../comments/Comments';

function Post({ post, friendPostOwner }) {
    const { user, dispatch } = AuthStateValue()
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const [displayModal, setDisplayModal] = useState(false)
    const { posts: Posts, postsDispatch } = PostStateValue()
    const { comments } = CommentsStateValue()

    ////////// Set User
    const [currPostUser, setCurrPostUser] = useState()
    useEffect(() => {

        setCurrPostUser(friendPostOwner?.find(friend => friend._id == post.userId))
        if (post.userId == user._id) { setCurrPostUser(user) }

    }, [friendPostOwner, post])
    //////////////


    ////////Like Post
    const [like, setLike] = useState(10)
    const [isLiked, setIsLiked] = useState(0)
    useEffect(() => {
        setLike(post.likes.length)
        setIsLiked(post.likes.includes(user._id))

    }, [])

    const likeHandler = async () => {

        const res = await http.put(`/post/${post._id}/like`, { userId: user._id })
        isLiked ? setLike(prev => prev - 1) : setLike(prev => prev + 1)
        setIsLiked(!isLiked)
    }
    ///////////

    ///delete Post
    const deletePostHandler = async () => {

        if (user._id == post.userId) {
            const deleted = await $deletePost(user._id, post._id)
            postsDispatch(deletePost(post._id))
        }
        else {
            alert("You Cand Delete Only Your Posts")
        }
    }


    ////
    /// Open and Close Comments
    const[show,setShow]=useState(false)
const openComments=()=>{

setShow(val=>!val)

}




///////////////////////////////////
    const { id } = useParams()



    const navigate = useNavigate()
    const postUserHandle = () => {
        id !== currPostUser?._id && navigate("/profile/" + currPostUser?._id)
    }


    const date = format(post.createdAt)


    return (
        <div className='post'>
            <div className='post__container'>

                <section className='post__top'>
                    <div className="post__topLeft">
                        <div style={{ cursor: 'pointer' }} onClick={() => postUserHandle()}> <img className='post__userImage' src={PF + currPostUser?.profilePicture} alt=" img" />
                            <span className='post__userName'>{currPostUser?.userName}</span></div>
                        <span className='post__date'>"{date}" </span>
                    </div>
                    <div className="post__topRight" onClick={() => setDisplayModal(true)}>

                        <MoreVert />

                    </div>
                    {displayModal && <div className='post__topRight-Modal'><div className='post__topRight-ModalClose' onClick={() => setDisplayModal(false)}>X</div><button className='post__topRight-ModalButton' onClick={() => deletePostHandler()}>Delete Post</button></div>}
                </section>

                <section className='post__center'>
                    <span className='post__text'>{post?.description}</span>
                    <img className='post__centerImage' src={PF + "/images/" + post?.img} alt="" />
                </section>
                <section className='post__bottom'>
                    <div className="post__bootomLeft">
                        <div onClick={likeHandler}>
                            < ThumbUpAltIcon style={{ cursor: "pointer", fill: "blue", transform: "scale(1.5)" }} />

                        </div>
                        <div onClick={likeHandler}>
                            <FavoriteIcon className='post__heartIcon' />

                        </div>
                        <span className='post__likeCounter'>{like} Persons liked it </span>
                    </div>
                    <div className="post__bootomRight">
                        <span className='post__commentText' onClick={()=>openComments()}>Coments <span></span>{comments?.length} </span>
                    </div>
                </section>
            </div>
            {
             show&& <Comments postId={post._id} />
            }
            
        </div>

    )
}

export default Post