import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-center h-19  pt-8 text-white absolute left-[50%] translate-x-[-50%]'>
        <div className='flex bg-black gap-20 rounded-lg h-12 items-center pr-1 mr-2'>
            <h1 className='flex text-3xl items-center pl-5 font-one cursor-pointer'>FONDER</h1>
        <div className='flex gap-13 text-gray-400 items-center text-lg font-three  '>
            <h2 className='hover:text-white duration-200 ease-in-out cursor-pointer'>Solutions</h2>
            <h2 className='hover:text-white duration-200 ease-in-out cursor-pointer'>Work</h2>
            <h2 className='hover:text-white duration-200 ease-in-out cursor-pointer'>Studio</h2>
        </div>
        
        <div className='bg-[#3F3E41] flex justify-center items-center rounded-lg w-30 h-10 hover:bg-[#F23400] duration-220 ease-in-out'>
            <h1 className='text-lg font-three '>Let's Work</h1>
        </div>
            </div>
        <div className='flex justify-center relative items-center bg-black w-12 h-12 rounded-lg '>
            <i className="ri-shopping-cart-2-fill text-gray-400 text-2xl justify-center absolute hover:text-3xl ease-in-out duration-400"></i>
        </div>

    </div>
  )
}

export default Navbar