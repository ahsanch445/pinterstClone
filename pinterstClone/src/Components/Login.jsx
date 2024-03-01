import React,{useContext, useEffect, useState} from 'react'
import "../style/signUp.css"
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios'
import { userContext } from '../context/Context-api'
import Cookies from 'js-cookie'
const Login = () => {
  const {setisAuth,userAuth,isAuth} = useContext(userContext)
  let naigate = useNavigate()
  const [ShowError, setShowError] = useState()
  const [form, setform] = useState({
    email:"",
    password:""
  })
  
  const storedUserString = localStorage.getItem("user");

  // Parse the JSON string back to an object
  const retrievedUserAuth = JSON.parse(storedUserString);
  


  const handalLogin = (e)=>{
setform({
  ...form,
  [e.target.name]:e.target.value
})

  }
  const handalClick = async()=>{
    const allCookies = Cookies.get("token");


    console.log('All Cookies:', allCookies);
    try {
      let response = await axios.post("http://localhost:3000/users/login",form,{
        headers:{
          "Content-Type":"application/json",
          "Authorization":`Bearer ${allCookies}`
        },
        withCredentials:true
      })
   if( response.data.massage == "user is login"){
    const token = response.data.token
    Cookies.set('token', token, { path: '/', expires: 4 });
    console.log(response.data)
    setisAuth(!isAuth)
    naigate("/")
  
   }
   
    } catch (error) {
      setShowError(error?.response?.data?.message)
      console.error(error)
    }
    }
  return (
    <div>
       
    <div>
      <div className="container1">
      <div className="content">
      
        <img src="https://i.pinimg.com/originals/d3/d1/75/d3d175e560ae133f1ed5cd4ec173751a.png" alt="pin logo" className="img1" />
        <p className="header">Log in to see more</p>
<p className='mt-[1vw] text-red-600'>{ShowError}</p>
        
        <input name='email' onChange={handalLogin} type="email" placeholder="UserName" className=" h-[5vw] mt-[1vw] detail" /><br />

        <input name='password' onChange={handalLogin} type="password" placeholder="Password" className="h-[5vw] mt-[2vw] detail" />

        <h4 className='mt-[1vw]'>Forgot your password?</h4>

        <button onClick={handalClick} className="btn1 int mt-[1vw]">Log in</button>
  
        


        <footer>
          <p>
            By continuing, you agree to Pinterest's
            <b>Terms of Service, Privacy policy.</b>
          </p>
          
          <p>Not on Pinterest yet? <Link to="/signup">Sign up</Link> </p>
        </footer>
      </div>
    </div>
    

    </div>
    </div>
  )
}

export default Login
