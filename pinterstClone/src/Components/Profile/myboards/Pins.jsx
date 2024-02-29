import React, { useContext, useState } from 'react'
import { userContext } from '../../../context/Context-api'


const Pins = () => {
const {isAuth,setisAuth ,userAuth}= useContext(userContext)
    
    const  [istrue, setIstrue] = useState(false)
    const handalClick = ()=>{
setIstrue(!istrue)
setisAuth(!isAuth)
    }
   
  return (
    <div className='bg-[rgb(255,255,255)]'>
  <div  className='flex justify-center  '>
{
    istrue? <h1  onClick={handalClick} style={{borderBottom:"3px black solid"}}  className='cursor-pointer semi-bold'>Created</h1> :<h1 onClick={handalClick}   className='cursor-pointer semi-bold'>Created</h1>
}
  </div>


  {
istrue?
<div className='mt-8 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4'>
{ userAuth?.posts?.slice().reverse().map((e)=>(
      <div className="overflow-hidden px-3" key={e.postId}>
       <img className='rounded-xl' src={e.post} alt="" srcset="" />
       <p className='mx-[1vw]' style={{fontWeight:"100",opacity:"0.8", }}>{e.title}</p>
      </div> 

  ))
}
</div>

:""

  }
    </div>
  )
}

export default Pins
