import React from 'react'
import ProductItem from './ProductItem'
import { productsArr } from './ProudctArr'

function ProductParents() {
  return (
    <main className=' m-auto w-[98%] mt-[8rem]'>

      <section className='flex justify-between flex-col md:flex-row'>
        <div>
          <h1 className='font-medium text-[1.4rem] md:text-[1.8rem] lg:text-[2rem]'>All Products</h1>
        </div>

        <div className='flex flex-col xs:flex-row gap-4 mt-2'>
          <select name="" id="" className='p-3  outline-none rounded-md w-[10rem]'>
            <option value="EST">United Kingdom</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
          </select>

          <select name="" id="" className='p-3 outline-none rounded-md w-[10rem]' >
            <option value="EST">United Kingdom</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
            <option value="EST">Eastern Standard Time (EST)</option>
          </select>
        </div>
      </section>

      <section className='item-container w-full mt-4'>
        {
          productsArr.map((item)=>(
            <ProductItem key={item.id} {...item}/>

          ))
        }

      </section>
    </main>
  )
}

export default ProductParents