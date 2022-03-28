import { Cancel, EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { AuthStateValue, PostStateValue } from '../../context/AuthContext'
import { uploadSinglePost } from '../../context/posts/PostsActions'
import { $createPost } from '../../http/post'
import { $uploadFile } from '../../http/uploadFile'
import "./Share.css"
function Share() {
    const { user, dispatch } = AuthStateValue()
    const { posts, postsDispatch } = PostStateValue()
    const [file, setFile] = useState()
    const des = useRef()
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const shareHandler = async () => {
        if (file) {
            const fileName = Date.now() + "." + file.name

            const post = {
                userId: user._id,
                description: des.current.value,
                img: fileName
            }
            try {
                const createdPost = await $createPost(post)


                const data = new FormData()
                data.append("file", file, fileName)
                const res = await $uploadFile(data)
               window.location.reload()
            }

            catch (e) {
                alert("Upload Error occured ")
            }
        }

        else {
            alert("Please Also Attach Image   .png/.jpg ")
        }


    }
    return (
        <div className='share'>
            <div className='share__container'>

                <section className='share__top'>

                    <img className='share__profileImg' src={PF + user?.profilePicture} alt="" />
                    <input className='share__input' type="text" placeholder={`What is in your mind ${user?.userName}`} ref={des} />
                </section>
                <hr />


                <section className='section__bottom'>
                    <div className='share__bottom'>

                        <label htmlFor='file' className="share__option" style={{ cursor: "pointer" }}>
                            <PermMedia htmlColor='tomato' className='share__mIcon' />
                            <span className='share__text'>Photo or Video</span>
                        </label>
                        <input style={{ display: "none" }} type="file" id='file' accept='.png,.jpeg' onChange={(e) => setFile(e.target.files[0])} ></input>
                     { file&&  <div className='share_file'> <img className='share_fileImg' src={URL.createObjectURL(file)} alt="" /> <Cancel className='share__imgCancell' onClick={()=>setFile(null)}/></div>}
                        <div className="share__option">
                            <Label htmlColor='blue' className='share__mIcon' />
                            <span className='share__text'>Tag</span>
                        </div>
                        <div className="share__option">
                            <Room htmlColor='green' className='share__mIcon' />
                            <span className='share__text'>Location</span>
                        </div>
                        <div className="share__option">
                            <EmojiEmotions htmlColor='gold' className='share__mIcon' />
                            <div className='share__text'>Feelings</div>
                        </div>

                    </div>



                    <button className='share__button' onClick={() => shareHandler()}>Share</button>

                </section>
            </div>


        </div>
    )
}

export default Share