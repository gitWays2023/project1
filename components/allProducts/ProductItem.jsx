import React from 'react'
import Dress from "@/components/allProducts/img/dress.png"
import Image from 'next/image'
function ProductItem({Img,itemName,price}) {
 
  return (
    <section className='shadow-sm'>
        <div className=' w-full h-[15rem]'>
            <Image
            src={Img}
           
            alt='l;l'
            className='h-full w-full'
            />
            
        </div>
        <div className='bg-[whitesmoke] px-3'>
         {itemName}
          <p>{price}</p>
        </div>
    </section>
  )
}

export default ProductItem