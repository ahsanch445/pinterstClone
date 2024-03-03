import React, { useContext, useEffect, useState } from 'react'
import Card from './Components/Card'
import Nav from './Components/Nav'
import { userContext } from './context/Context-api'
import axios from 'axios'
import Loader from './Components/loader/Loader'

const Home = () => {
  const [Search, setSearch] = useState()
  const [result, setresult] = useState([])
  const [loading, setLoading] = useState(true);
  const [getPost, setgetPost] = useState({})
  
  useEffect(() => {
    setLoading(true);
    const getPost = async()=>{
      let res = await axios.get("https://pinterst-clone-amt.vercel.app/users/getPost",{withCredentials:true})
      setgetPost(res.data)
      setLoading(false)
    }
    
    getPost()
    
  }, [])
  
  useEffect(() => {
    const filteredResults = getPost?.Allpost?.filter(post =>
      post && post.title && post.title.toLowerCase()?.includes(Search?.toLowerCase())
    );
  
    setresult(filteredResults);
  }, [Search]);
  
  


  return (
    <>
      <Nav setSearch={setSearch}/>
      {
          
      

      }
    <div className='h-screen  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-"'>
   
  {
  loading? <Loader/> :
    
    
  
    
      getPost && (
        result?.length > 0 ? 
        result?.slice().reverse().map((e, index) => <Card key={index} data={e} />)
          : getPost?.Allpost?.slice().reverse().map((e, index) => <Card key={index} data={e} />)
      )
    
  }

    
      
    </div>
    </>
  )
}

export default Home

