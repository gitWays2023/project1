'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoArrowBack, IoReorderThreeSharp, IoScanCircle } from "react-icons/io5";

function NavCategory() {
    const [value,setValue] = useState(false)
    const textContent = [


        {
            text: "Gadgets",
            url: "",
            fontWeight: "font-normal",
            id: crypto.randomUUID()
        },
        {
            text: "Furnitures",
            url: "",
            fontWeight: "font-normal",
            id: crypto.randomUUID()
        },
        {
            text: "Phones",
            url: "",
            fontWeight: "font-normal",
            id: crypto.randomUUID()
        },
        {
            text: "Electronic",
            url: "",
            fontWeight: "font-normal",
            id: crypto.randomUUID()
        },
        {
            text: "Clothes",
            url: "",
            fontWeight: "font-normal",
            id: crypto.randomUUID()
        },
    ]

    function responisveNavCategory(){
const navCategoryFixed = document.getElementById("navCategoryFixed")
navCategoryFixed.classList.toggle("flexNavCategory")
    }


    return (
        <ul className='flex  bg-[#F7F6FB]'>

            <>
                <div onClick={()=> setValue(!value)} className='font-bold cursor-pointer  flex gap-3'><IoReorderThreeSharp className='text-[1.5rem] cursor-pointer' /> All</div>
                {
                    textContent.map((item) => (
                        < >

                            <li key={item.id} className='pl-[1rem] hidden mxs:flex'><Link href={""} className={`${item.fontWeight}`} >{item.text}</Link></li>

                        </>
                    ))
                }

                {
                    value &&(
<div  className=' flex  fixed top-0 bottom-0 bg-[whitesmoke] w-[200px]'>
                    <IoArrowBack onClick={()=> setValue(!value)} className='absolute top-[50%] translate-y-[-50%] right-[-0.8rem] cursor-pointer bg-[red] w-[25px] h-[25px] rounded' />
                    <div className='flex flex-col gap-10 mt-[1rem]'>


                        {
                            textContent.map((item) => (
                                < >

                                    <li key={item.id} className='pl-[1rem]'><Link href={""} className={`${item.fontWeight}`} >{item.text}</Link></li>


                                </>
                            ))
                        }
                    </div>
                </div>
                    )
                }
                

            </>

        </ul>
    )
}

export default NavCategory