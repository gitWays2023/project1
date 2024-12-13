
import React from 'react'
import { IoReorderThreeSharp, IoSearch } from "react-icons/io5";
import { LuMessageCircle } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import Link from 'next/link';
import Image from 'next/image';
import NavCategory from './NavCategory';
import NavGarageHeader from './NavGarageHeader';
import NavSectionTwo from './NavSectionTwo';



function NavContainer() {
  
  return (
    <main  className='fixed top-0 left-0 bg-white right-0'>
      <section className='flex flex-col py-3 w-[98%] mxs:flex-row mxs:justify-between mxs:items-center gap-3 mx-auto'>
      
<NavGarageHeader />

      <NavSectionTwo r />
      </section>
      <NavCategory />
    </main>
  )
}

export default NavContainer