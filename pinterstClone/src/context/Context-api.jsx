import axios from "axios";
import React, { createContext,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const userContext = createContext()
const UserProvider = ({children})=>{

    const [userAuth, setuserAuth] = useState({})
    const [UpdateAuth, setUpdateAuth] = useState({})
    const [isAuth, setisAuth] = useState(false)
 
 


    useEffect(() => {
     
      const getUser =async ()=>{
        
       try {
        let res =  await axios.get("http://localhost:3000/users/login")
       
       if(res.data.user.email){
        setisAuth(true)
       }
       setuserAuth(res.data.user)
      
       localStorage.setItem("token1", res.data.user._id)
   
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
