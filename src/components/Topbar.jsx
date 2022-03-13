import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import "./Topbar.css"
function Topbar() {
  return (
    <div className='topbar'>
      <div className='topbar__container'>
        <section className="topbar__left">
          <span className="topbar__logo"> SocialApp</span>


        </section>


        <section className="topbar__center">

          <div className="topbar__search">
            <Search className='topbar__search' />
            <input type="text " placeholder="Search for frands" className="topbar__input" />
          </div>
        </section>
        <section className="topbar__right">
          <div className="topbar__links">

            <span className="topbar__link">HomePage</span>
            <span className="topbar__link">TimeLine</span>
          </div>
           <div className="topbar__icons">

           <div className="topbar__icon-item">
             <Person/>
             <span className="topbar__icon-count">1</span>
           </div>
           <div className="topbar__icon-item">
             <Chat/>
             <span className="topbar__icon-count">1</span>
           </div>
           <div className="topbar__icon-item">
             <Notifications/>
             <span className="topbar__icon-count">1</span>
           </div>
</div>
<img  className='topbar__image' src='https://cdn2.vectorstock.com/i/1000x1000/10/26/businessman-avatar-icon-person-design-vector-9471026.jpg'/>



        </section>


      </div>



    </div>
  )
}

export default Topbar