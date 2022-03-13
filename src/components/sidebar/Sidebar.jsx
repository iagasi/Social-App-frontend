import { Bookmark, RssFeed, Videocam } from '@mui/icons-material'
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import React from 'react'
import "./Sidebar.css"
import CloseFriend from './closeFriend/CloseFriend';
import { Users } from '../../dummData';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar__container">
        
        <ul className="sidebar__list">
        <li className='sidebar__listItem'>
         <RssFeed className='sidebar__icon'/>
          <div className='sidebar__listItemText'> Feed</div>
          </li>
          <li className='sidebar__listItem'>
         <ChatIcon className='sidebar__icon'/>
          <div className='sidebar__listItemText'> Chat</div>
          </li>
          <li className='sidebar__listItem'>
         <SlowMotionVideoIcon className='sidebar__icon'/>
          <div className='sidebar__listItemText'> Video</div>
          </li>
          <li className='sidebar__listItem'>
         <GroupsIcon className='sidebar__icon'/>
          <div className='sidebar__listItemText'> Group</div>
          </li>
          <li className='sidebar__listItem'>
         <BookmarksIcon className='sidebar__icon'/>
          <div className='sidebar__listItemText'> BookMark</div>
          </li>
          <li className='sidebar__listItem'>
         <HelpOutlineIcon className='sidebar__icon'/>
          <div className='sidebar__listItemText'>Questions</div>
          </li>
        </ul>
<button className='sidebar__button'>Show More</button>
<hr className='sidebar__hr'/>

{

  Users.map(user=><CloseFriend  key={user.id} user={user}/>)
}

      </div>

    </div>
  )
}

export default Sidebar