import React from 'react'
import './Sidebar.css'
import SidebarButton from './SidebarButton'
import { MdSpaceDashboard } from 'react-icons/md'
import { MdFavorite } from 'react-icons/md'
import { FaGripfire, FaPlay } from 'react-icons/fa6'
import { FaSignOutAlt } from 'react-icons/fa'
import { IoLibrary } from 'react-icons/io5'

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&s" alt="profile" className='profile-img'/>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard/>}></SidebarButton>
        <SidebarButton title="Trending" to="/trending" icon={<FaGripfire/>}></SidebarButton>
        <SidebarButton title="Player" to="/player" icon={<FaPlay/>}></SidebarButton>
        <SidebarButton title="Favourites" to="/favourites" icon={<MdFavorite/>}></SidebarButton>
        <SidebarButton title="Library" to="/library" icon={<IoLibrary/>}></SidebarButton>
      </div>
      <SidebarButton title="Sign Out" to="" icon={<FaSignOutAlt/>}></SidebarButton>
    </div>
  )
}

export default Sidebar
