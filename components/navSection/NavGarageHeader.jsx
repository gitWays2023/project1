'use client'
import React from 'react'
import { IoReorderThreeSharp } from 'react-icons/io5'



function NavGarageHeader() {
  
    const navResFunc = () =>{
       const element = document.querySelector(".flexNav")
      //  element.classList.toggle("flexNav")
       element.classList.toggle("hiddenNav")

       
       console.log(element)
        }

  return (
    <div className='  flex justify-between items-center'>
    <h1 className='text-[1.9rem] font-bold'>Garage</h1>
    <div className='mxs:hidden' onClick={()=> navResFunc()}><IoReorderThreeSharp className='text-[2rem] cursor-pointer' /></div>
  </div>
  )
}

export default NavGarageHeader