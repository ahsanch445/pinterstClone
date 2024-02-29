import React, { useContext, useState } from 'react';
import Nav from '../Nav';
import Footer from './Footer';
import axios from 'axios';

import { userContext } from '../../context/Context-api';

const ProfileUpdate = () => {
  const {userAuth,setUpdateAuth} = useContext(userContext)

  const [pic, setPic] = useState(null);
  const storedUserAuth = JSON.parse(localStorage.getItem('form')) || {};

  const [form, setForm] = useState({
    fullname: '',
    about: '',
    username: '',
    email: '',
  });

  const handalForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handalPic = (e) => {
    const filedata = e.target.files[0];
    setPic(filedata);
  };

  const formClick = async () => {
    try {
      const formData = new FormData();
      formData.append('pic', pic);
      formData.append('fullname', form.fullname);
      formData.append('about', form.about);
      formData.append('username', form.username);
      formData.append('email', userAuth.email);

      // Use the ProfileFile function if needed


   
      let res = await axios.post("http://localhost:3000/users/Update", formData);
      setUpdateAuth(res.data.user)
      // Reset the form fields
      setForm({
        fullname: '',
        about: '',
        username: '',
        email: userAuth.email,
      });
setPic()
  
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle the error
    }
  };
  return (
   <div className='bg-white h-full'>
    <Nav/>
    <div className=' h-[100vh]'>
    <div  className=' px-[15vw] py-[5vw] h-[100vh]'>
        <h3 className='text-[3vw] text-[bold]'>Edit Profile</h3>
        <p style={{fontFamily:"arial", letterSpacing:"-00.03vw",fontSize:"1.6vw",lineHeight:"1.2"}} className='w-[60%]'>Keep your personal details private. Information you add here is visible to anyone who can view your profile.</p>
        <div className='mt-[3vw] flex items-center gap-[3vw] '>
      {
        pic?  <img style={{objectPosition:"top"}} className='bg-gray-400 h-[7vw] w-[7vw] object-cover rounded-full' src={URL.createObjectURL(pic)} alt="" />:  <img style={{objectPosition:"top"}} className='bg-gray-400 h-[7vw] w-[7vw] object-cover rounded-full' src={userAuth.image} alt="" />
      }
     <label  className='  cursor-pointer '  For="my"> <button className='bg-gray-200 rounded-[10%] p-[0.5vw]' style={{pointerEvents:"none"}} type="button"> Change</button></label>
     <input name='pic' onChange={handalPic} style={{display:"none"}} id='my' type="file" />
        </div>
        <div className=' p-7 ' >
        <p className=' ml-4 text-[1.4vw]'>fullname</p>
            <input value={form.fullname}  name='fullname' onChange={handalForm} className='capitalize border rounded-xl  '  type="text" placeholder={userAuth.name} />
            <p className=' ml-4 text-[1.4vw] '>About</p>
            <textarea  value={form.about}  name='about' onChange={handalForm}  style={{height:"8vw"}}  className=' h-[12vw] border rounded-xl'  type="text" placeholder='tell your story' />
            <p className=' ml-4 text-[1.4vw] '>username</p>
            <input  value={form.username} name='username' onChange={handalForm}  className='border rounded-xl'  type="text" placeholder={userAuth.username} />
          
        
        </div>
        <div className='w-full sticky bottom-0  '>
        <Footer formClick={formClick} />
        </div>
    </div>
 
    </div>
 
   </div>
  )
}

export default ProfileUpdate
