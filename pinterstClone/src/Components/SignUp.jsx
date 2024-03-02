import React,{useEffect, useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

import "../style/signUp.css"
import axios from 'axios'

axios.defaults.withCredentials = true
const SignUp = () => {

  const storedUserAuth = JSON.parse(localStorage.getItem("form")) || {};
 
  const [showError, setshowError] = useState()
  
  let navigate = useNavigate()
  const [form, setform] = useState({
    fullname:"",
    username:"",
    email:"",
    password:""
  })

  const handalChange= (e)=>{
    setform({
      ...form,
      [e.target.name] : e.target.value
    })

  }
  const HandelfromData = async ()=>{
    try{
     let response =  await axios.post("https://pinterst-api.vercel.app/users",form,{
      withCredentials:true
     })
  
     if(response.data.email){
     
      localStorage.setItem("form", JSON.stringify(response.data));
      navigate("/login")
     }else{
      setshowError(response?.data?.message)
     }
    }catch(err){
setshowError(err?.response?.data?.message)
    }

  }
  
  return (
    <>
    
    <div>
      <div className="container1">
      <div className="content">
      
        <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="pin logo" className="img1" />
        <p className="header">Sign Up to see more</p>
<p className='mt-[1vw] text-red-600'>{showError}</p>
        <input onChange={handalChange} name='fullname' type="name" placeholder="Full Name" className="detail mt-[1vw]" /><br />
        <input onChange={handalChange} name='username' type="email" placeholder="UserName" className="detail" /><br />
        <input onChange={handalChange} name='email' type="email" placeholder="Email" className="detail" /><br />
        <input onChange={handalChange} name='password' type="password" placeholder="Password" className="detail" />

        

        <button  onClick={HandelfromData} className="btn1 int">SignUp</button>
  


        <footer>
          <p>
            By continuing, you agree to Pinterest's
            <b>Terms of Service, Privacy policy.</b>
          </p>
       
          <p>Already have a account? <Link to="/login">Login</Link></p>
        </footer>
      </div>
    </div>
    

    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default SignUp
