import React from 'react'

function Footer() {
    
    return (
        <main className='bg-[whitesmoke]  mt-[8rem] md'>
            <section className=' flex justify-between flex-wrap gap-8 sm:gap-0 pt-[4rem] w-[90%] mx-auto'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-medium text-[1.7rem]'>Garage</h1>
                    <p className='font-medium text-[1.1rem]'>Get amazing product from trusted reliable  <br />sources in Canada</p>
                </div>

                <div  className='flex flex-col w-full md:w-max gap-4'>
                    <h1 className='font-medium text-[1.3rem]'>Products</h1>
                    <p className='text-[#7D58DA] text-[1.1rem] font-medium'>Overview</p>
                </div>

                <div  className='flex  flex-col gap-4 w-full lg:w-[20rem]'>
                    <h1 className='font-medium text-[1.3rem]'>Stay up to date</h1>
                    <form className='w-full' >
                        <input type="text" className='outline-none py-3 px-[2rem] rounded-md w-full xs:w-[75%]' />
                        <button className='bg-[#7D58DA] py-3 sm:py-2 px-[0.2rem] md:px-[0.8] font-bold'>Subscribe</button>
                    </form>
                </div>
            </section>
            
            <div className='flex flex-wrap gap-3 xs:gap-0 justify-between mt-[5rem] font-medium pt-10 w-[90%] mx-auto'>
                <p>
                    @2024 George, All Right Reserved
                </p>
                <p>Terms & Privacy</p>
            </div>
        </main>
    )
}

export default Footer