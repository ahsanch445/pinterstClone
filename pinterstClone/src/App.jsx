import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Upload from './Components/Uploads/Upload';
import Home from './Home';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import ProfileUpdate from './Components/Profile/ProfileUpdate';
import Profile from './Components/Profile/Profile';
import { useContext } from 'react';
import { userContext } from './context/Context-api';

function App() {
  
  const { isAuth,setisAuth ,userAuth } = useContext(userContext);
 
const  token = localStorage.getItem("token1") 

useEffect(() => {
if(token){
  setisAuth(true)
}
 
}, [])

  return (
    <Router>
      <Routes>
        <>
          {


        isAuth||  token  ? (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Upload />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/ProfileUpdate" element={<ProfileUpdate />} />


                
              </>
            ) : (
              <>

         <Route path="/" element={<Navigate to="/signup" />} />

                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />

              </>


            )}
{/* 
          {
            isAuth && isAuth ?
              <>

                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </>
              : <>







              </>





          }
          {

            isAuth && userAuth.email ? <>
             <Route path='/' element={<Navigate to="/signup" />} />
            </>
              : <Route path='/' element={<Navigate to="/signup" />} />


          } */}
        </>



      </Routes>
    </Router>
  );
}

export default App;











