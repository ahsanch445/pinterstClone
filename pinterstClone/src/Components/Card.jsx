import React from 'react'

const Card = (data) => {

  return (
    <div>
   
  <div class="">
     
       

    
        <div class="bg-white p-2 rounded-md shadow-md">
            <img src={data.data.post} alt="Image 2" class="w-full h-auto object-cover mb-1 rounded-xl"/>
            <p  style={{lineHeight:"1.2 ",opacity:"0.8", fontSize:"1.5vw"}} className='p-1'>{data.data.description} </p>
       <div className='flex items-center gap-1 p-2'>

        {
          data.data.title&&data.data.description?<img className=' rounded-full w-[3vw]  h-[3vw] object-cover ' src={data.data.user.image} alt="" />:""
        }
        <h2 style={{fontFamily:"arial", opacity:"0.8"}} className='text-[1.4vw] tracking-tight'>{data.data.title
}</h2>
       </div>
        </div>

      

    </div>






    </div>
  )
}

export default Card
