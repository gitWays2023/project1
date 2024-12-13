
import React from 'react'
import Link from 'next/link'
import { LuMessageCircle } from 'react-icons/lu'
import { IoCartOutline, IoSearch } from 'react-icons/io5'

function NavSectionTwo() {
  return (
    <div id='responsiveNav' className='flexNav flex-col sm:flex-row xs:flex gap-3 sm:gap-[5rem] xl:gap-[4rem] 3xl:gap-[7rem] mxs:justify-center mxs:items-center '>
          
    <form action="" className='w-full mxs:hidden  xl:w-[24rem] 2xl:w-[28rem] sm:flex relative'>
      <IoSearch className='absolute top-[50%] translate-y-[-50%] left-6'/>
      <input type="text" className='w-full px-[4rem] py-[0.4rem] rounded-md outline-none border-2 border-[whitesmoke] border-solid'/>
    </form>
  

  <ul className='flex gap-8 flex-col mxs:flex-row mxs:justify-center mxs:items-center justify-start sm:gap-[3rem]  2xl:gap-[3.2rem] 3xl:gap-[4rem]'>

 <li><Link href={""} className='flex sm:justify-center items-start xs:items-center  gap-3'><LuMessageCircle /> Messages</Link></li>   
  <li><Link href={""} className='flex sm:justify-center items-center gap-3'><IoCartOutline /> Cart</Link></li> 
   <li><Link href={""} className='flex sm:justify-center items-center gap-3 xl:text-black 3xl:text-[red]'>Login</Link></li> 
 <li className='hidden mxs:flex sm:hidden cursor-pointer'><Link href={""} className='flex  gap-3'><IoSearch className='text-[#7858CA] ' /> </Link></li>   

  <li><button className='bg-[#7858CA] text-[whitesmoke] sm:w-[7rem] px-3 py-2 rounded-md'>Start Selling</button></li>  
  </ul>

</div>
  )
}

export default NavSectionTwo