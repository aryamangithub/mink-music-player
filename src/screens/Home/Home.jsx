import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Library from '../Library/Library'
import Feed from '../Feed/Feed'
import Trending from '../Trending/Trending'
import Player from '../Player/Player'
import Favourites from '../Favourites/Favourites'
import './Home.css'
import Sidebar from '../../components/Sidebar/Sidebar'
const Home = () => {
  return (
    <Router>
      <div className='main-body'>
        <Sidebar></Sidebar>
        <Routes>
            <Route path='/' element={<Library/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/trending' element={<Trending/>}/>
            <Route path='/player' element={<Player/>}/>
            <Route path='/favourites' element={<Favourites/>}/>
            <Route path='/library' element={<Library/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default Home
