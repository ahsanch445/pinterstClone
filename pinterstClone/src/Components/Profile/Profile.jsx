import React, { useEffect,useState } from 'react'
import Nav from '../Nav'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { userContext } from '../../context/Context-api'
import Pins from './myboards/Pins'

axios.defaults.withCredentials = true
const Profile = () => {
  const {userAuth} = useContext(userContext)

 
  
  
  return (
    <div className='h-full bg-white'>
      <Nav/>
      <div className='h-[50vh] flex justify-center  items-center='>
      
<div className=' mt-[2vw] '>
    <div className='flex justify-center'><img style={{ objectFit:"cover",objectPosition:"top"}} className='h-[10vw]  w-[10vw]  rounded-full bg-gray-400' src={userAuth.image} alt="" /></div>

<div className=' w-32'>
  <h1 style={{fontFamily:"arial",marginTop:"1vw"}} className='text-[3vw] font-bold flex justify-center capitalize'>{userAuth.name}</h1>
  <p className='text-center'>{userAuth.username}</p>
<p style={{wordWrap:"break-word",lineHeight:"1.3"}} className='text-[1.5vw] text-center'>{userAuth.about}</p>

<Link to="/ProfileUpdate" style={{fontSize:"arial"}} className=' flex  justify-center bg-[#e1e1e1] w-full p-[1.4vw] rounded-full mt-[1vw] '>Edit Profile</Link>
</div>


</div>

    </div>
   <Pins/>
   
    </div>
    
  )
}

export default Profile
