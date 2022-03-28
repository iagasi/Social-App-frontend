import { Chat, Notifications, Person, Search } from '@mui/icons-material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { AuthStateValue } from '../context/AuthContext'
import { Users } from '../dummData'
import { $getAllUsers } from '../http/user'
import "./Topbar.css"
function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  const { user, dispatch } = AuthStateValue()
  ///Search
  const [getUsers,setGetUsers]=useState(null)
  const [search, setSearch] = useState(null)
  const [sResult, setSResult] = useState()
const nav=useNavigate()

  useEffect(async() => {
    
   getUsers&& setSResult(getUsers.filter((user) => { if (user.userName?.toLowerCase().includes(search?.toLowerCase())) { return user.userName } }))
  }, [search])

  const typingHandler = (e) => {
    setSearch(e.target.value)
  }
  const focusHandler = async() => {
   if(!getUsers){
const users=await $getAllUsers()
setGetUsers(users)
   }
    console.log("focus");
    if (!search) { setSearch("") }
  }
const goToUserPage=(id)=>{
nav("/profile/"+id)
setSearch(null)
}
  //////


  const outHandler = () => {
    localStorage.removeItem("SociallApp")
    window.location.reload()

  }


  return (
    <div className='topbar'>
      <div className='topbar__container'>
        <section className="topbar__left">
          <NavLink className="NavLink" to="/"> <span className="topbar__logo"> SocialApp</span></NavLink>


        </section>


        <section className="topbar__center">

          <div className="topbar__search" onFocus={() => focusHandler()} onBlur={()=>setTimeout(()=>{setSearch(null)},300)}>
            <Search className='topbar__search' />
            <input type="text " placeholder="Search for friends" className="topbar__input" onChange={(e) => typingHandler(e)}  />
            {search !== null && <div className='topbar__searchResult'>

              {sResult?.map(el => <div key={el._id} style={{ marginTop: "20px", cursor: "pointer" }}  onClick={()=>goToUserPage(el._id)}>{el.userName}</div>)}
              
              </div>}
          </div>
        </section>
        <section className="topbar__right">
          <div className="topbar__links">

            <NavLink className="NavLink" to="/"><span className="topbar__link">HomePage</span></NavLink>
            <span className="topbar__link">TimeLine</span>
          </div>
          <div className="topbar__icons">

            <div className="topbar__icon-item">
              <Person />
              <span className="topbar__icon-count">1</span>
            </div>
            <div className="topbar__icon-item">
              <Chat />
              <span className="topbar__icon-count">1</span>
            </div>
            <div className="topbar__icon-item">
              <Notifications />
              <span className="topbar__icon-count">1</span>
            </div>
          </div>
          <button className='topbar__rightButton' onClick={() => outHandler()}>Out</button>
          <h4>Hi---{user ? user?.userName : "unknown"}</h4>
          <Link to={`/profile/${user?._id}`}>  <img className='topbar__image' src={PF + user?.profilePicture} />   </Link>



        </section>


      </div>



    </div>
  )
}

export default Topbar