import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'
import React from 'react'
import "./Share.css"
function Share() {
    return (
        <div className='share'>
            <div className='share__container'>

                <section className='share__top'>

                    <img className='share__profileImg' src="https://www.designyourway.net/blog/wp-content/uploads/2018/08/387011_3d-cute-wallpapers-for-desktop-hd-1-jpg_1024x768_h-700x525.jpg" alt="" />
                    <input className='share__input' type="text" placeholder='Whats app frends' />
                </section>
                <hr />


                <section  className='section__bottom'>
                    <div className='share__bottom'>

                        <div className="share__option">
                            <PermMedia htmlColor='tomato' className='share__mIcon' />
                            <span className='share__text'>Photo or Video</span>
                        </div>
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



                    <button className='share__button'>Share</button>

                </section>
            </div>


        </div>
    )
}

export default Share