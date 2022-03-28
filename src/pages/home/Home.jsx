import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/Topbar'
import { AuthStateValue } from '../../context/AuthContext'
import "./Home.css"
function Home() {

  return (
    <div className='home'>
      
      <Topbar />

      <div className="home__container">
       <Sidebar/>
       <Feed/>
       <Rightbar/>
      </div>

    </div>
  )
}

export default Home