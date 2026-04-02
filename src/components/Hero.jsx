import React from 'react'

const Hero = () => {
  return (
    <div className='bg-[#FFD6EC] h-150 flex justify-center items-center -z-10 pb-20'>
        <div className=' items-center justify-center leading-24'>
            <div>
            <h1 className='text-[90px] font-semibold font-four uppercase tracking-tight'>Where great ideas become</h1>
            </div>
        <div className='flex gap-4 justify-center'>
            <h1 className='text-[90px] font-four font-bold uppercase tracking-tighter'>beloved</h1>
            <img className='flex scale-110 pb-3' src="https://cdn.sanity.io/images/zob55qdr/production/43cb14bd4e0c4dd15515e7dfe92cd5f57d374c49-72x72.svg?w=72&auto=format" alt="" />
            <h1 className='text-[90px] font-four font-bold uppercase tracking-tighter'>brands</h1>
        </div>   
             
        </div> 
    </div>
  )
}

export default Hero