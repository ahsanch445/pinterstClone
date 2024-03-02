import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from '../context/Context-api'
import axios from 'axios'
import { RiArrowDropDownLine } from "react-icons/ri";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookies from 'js-cookie';

const Nav = ({setSearch}) => {
  const {userAuth,setisAuth,isAuth} = useContext(userContext)
  const token = localStorage.getItem("token1")
  let navigate = useNavigate()
  
  const handalLogout = async ()=>{
try {
  let res = await axios.post("http://localhost:3000/users/logout")
  console.log(res.data.message)
if(res.data.message = "user is logout success fully"){
  
  Cookies.remove("token")
  localStorage.removeItem("token1")
  setisAuth(!isAuth);

    navigate("/login")
}

} catch (error) {
  console.error({message:"you have a error in logout route" },error)
}


  }
  return (
    <div className='  bg-white w-full sticky top-0 z-20 py-3 px-[2vw] flex items-center  justify-between '>
<div className='  left flex items-center'><a > <img className=' hover:bg-gray-400 h-[5vw] w-[5vw]' src="data:image/png;base64,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" alt="" /></a>


<Link to="/" className=' text-[1.5vw] bg-[#0f0f0f] px-[1.8vw] py-[1.3vw] rounded-[40%] text-[#f7ecec] font-bold' href='#'>Home</Link>
<Link to="/create" className='font-sm' style={{fontFamily:"arial",marginLeft:"2vw"}}>Create</Link>

</div>
<div className='Input w-[60vw]'>
    <input onChange={(e)=>setSearch(e.target.value)} className=' rounded-full p-3 w-full  bg-[#e1e1e1] outline-blue-300' style={{fontFamily:"arial"}} type="search" placeholder='Search' />
</div>
<div className=' flex items-center mr-[2vw] w-fit'>

   
    <Link to="/profile" className=' cursor-pointer hover:bg-[#E1E1E1] profile h-[5vw] w-[5vw] bg-white flex justify-center items-center rounded-full'>

        <img style={{objectPosition:"top"}} className='bg-[#D1D1D1]   h-[3.5vw] w-[3.5vw] rounded-full object-cover' src={userAuth.image} alt="" />
    </Link>
    <div className="dropdown-center text-[3vw]">

 <RiArrowDropDownLine className="  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"/>

  <ul className="mt-3  dropdown-menu   border-none">
    <li><a onClick={handalLogout} className="dropdown-item cursor-pointer">Logout</a></li>
    
  </ul>
</div>
</div>

    </div>
  )
}

export default Nav
