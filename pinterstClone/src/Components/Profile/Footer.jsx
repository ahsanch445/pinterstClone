import React from 'react'

const footer = ({formClick}) => {
  return (
    <div>
      <div className=" p-5 flex justify-end w-[80%] ">
        <button onClick={formClick} className=' p-2 rounded-xl text-white text-bold  bg-[#E60023] hover:bg-[red]'> Save</button>
      </div>
    </div>
  )
}

export default footer
