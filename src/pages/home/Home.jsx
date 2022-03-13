import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/Topbar'
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