import React from 'react'
import {loginEndpoint} from "../../spotify"
import './Login.css'
const Login = () => {
  return (
    <div className='login-page'>
        <img 
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" 
            alt="logo-spotify" 
            className='logo' 
        />
        <a href={loginEndpoint}>
            <button className='login-btn'>LOG IN</button>
        </a>
    </div>
  )
}

export default Login
