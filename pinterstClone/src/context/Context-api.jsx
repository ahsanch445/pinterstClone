import axios from "axios";
import React, { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
export const userContext = createContext()
const UserProvider = ({children})=>{

    const [userAuth, setuserAuth] = useState({})
    const [UpdateAuth, setUpdateAuth] = useState({})
    const [isAuth, setisAuth] = useState(false)
 
 console.log(userAuth)


    useEffect(() => {
     
      const getUser =async ()=>{
        const allCookies = Cookies.get();


console.log('All Cookies:', allCookies);
       try {
        let res =  await axios.get("http://localhost:3000/users/login",{
          headers:{
            "Content-Type":"application/json",
            "Authorization":`Bearer ${allCookies}`
          },
          withCredentials:true
        })
       console.log(res.data)
       if(res.data.user.email){
        setisAuth(true)
       }
       setuserAuth(res.data.user)
      
       localStorage.setItem("token1", res?.data?.user?._id)
   
       } catch (error) {
   
        console.error({message:"some thing went wrong"})
       }
      }
      
 isAuth&& getUser()
        }, [UpdateAuth,isAuth])

const token = localStorage.getItem("token1")


return(

    <userContext.Provider value={{userAuth,  setUpdateAuth,setuserAuth ,  isAuth, setisAuth}}>
  {children}
</userContext.Provider>
)

}
export default  UserProvider
