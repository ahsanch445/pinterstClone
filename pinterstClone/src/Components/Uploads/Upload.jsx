import React, { useState } from 'react'
import Nav from '../Nav'

import { FaArrowUp } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import axios from 'axios';
import ImageUploader from '../loader/ImageUploader';
const Upload = () => {
  const [post, setpost] = useState()
  const [uploadProgress, setUploadProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [loader, setloader] = useState(true)
  const [dis, setDis] = useState("");

  
     const handalFiles = (e)=>{
      setpost(e.target.files[0])

     }


     const handalPost = (e)=>{
      if (e.target.name === 'title') {
        setTitle(e.target.value);
      } else if (e.target.name === 'dis') {
        setDis(e.target.value);
      }
     }
     const handalPostClick = async () => {
      setloader(true)
      try {
        const formData = new FormData();
        formData.append("title",title);
        formData.append("dis", dis);
        formData.append("post", post);
    
        let res = await axios.post("https://pinterst-api.vercel.app/users/userPost", formData,{


        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(percentCompleted);
        },

        });
        if (res.status === 200) {
          setloader(false)
          setTitle("");
        setDis("");
        setpost(null);
       
        }
      } catch (error) {
        console.log("error hai bhai jaan");
       
      }
    };
    
     const handalFileEmpty = ()=>{
      setpost("")

     }
  return (
    <div className='bg-[white] w-full h-[100vh]'>
      
      <Nav/>
     {
      loader ? uploadProgress > 0 && (
        <div className='absolute top-[30%]'>
     
        {<ImageUploader/>}
            <div
              style={{
                width: `${uploadProgress}%`,
                height: '100%',
                background: 'blue',
              }}
            />
          </div>
      
      )  :""
            }
      <div style={{borderBottom:"0.5px #cccac8 solid ",display:"flex",justifyContent:"space-between" ,borderTop:"0.5px #cccac8 solid"}} className='px-[10vw] py-[2vw] '>
        <h2 style={{fontFamily:"arial"}} className=' text-[2.1vw] font-sm font-bold'>Create pin </h2>
     {
      post?<button onClick={handalPostClick} className='bg-[#E60023] hover:bg-red-600 text-white font-medium p-2 rounded-2xl'>Publish</button>:""
     }
      </div>
 
   {
post? 
    <>
    
  
    <div className='flex justify-center mt-[3vw] relative '>
    <div className='relative'>
        <div className='  bg-white p-2  rounded-full absolute top-2 left-[250px]  '>
          <MdDeleteOutline onClick={handalFileEmpty} className= 'bg-white cursor-pointer rounded-full text-black' />
        </div>
   </div>

<img className='rounded-lg w-72' src={URL.createObjectURL(post)} alt="" srcset="" />

    </div> 
<div className='flex justify-center  '>
<div>
<input onChange={handalPost} name='title' className='w-[100%] ahsan rounded-xl  mt-[3vw] p-2' type="text"  placeholder='Add a title  '/>
<input onChange={handalPost} name='dis' className='w-[100%] ahsan rounded-xl mt-[3vw] p-2 mb-[4vw]'  type="text" placeholder='Add a detailed descripsion' />
</div>
</div>
    </>
    
    
    :    <div className='flex justify-center items-center mt-[4vw] '>
    <div  className=' relative h-[40vw] w-[40vw] cursor-pointer z-1  bg-[#d1d1d1] rounded-xl flex justify-center items-center '>
<div className='absolute cursor-pointer bg-black p-[1vw] rounded-full'>     <FaArrowUp style={{pointerEvents:"none",fontSize:"1.4vw"}} className=' text-white' />


</div>
<p style={{fontFamily:"arial", lineHeight:"1",opacity:"0.8"}} className='absolute mt-20 text-center'>Choose a file or drag and drop <br /> it here</p>

<label className='     absolute z-50 cursor-pointer  bg h-full w-full ' for="file-input"></label>
<input  onChange={handalFiles} style={{display:"none"}} className='bg-green-500 ' type="file"  accept="image/*, video/*"  name="" id="file-input" />
    </div>
  
    </div>
   }


    </div>
  )
}

export default Upload

