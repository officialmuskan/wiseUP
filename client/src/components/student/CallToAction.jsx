import React from 'react'
import { assets } from '../../assets/assets'
import {FaArrowRight} from "react-icons/fa"
const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-200 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-300 sm:text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptates recusandae maxime expedita ipsa omnis.</p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='px-10 py-3 rounded-md text-white bg-cyan-600'>Get started</button>
        <button className='flex border-cyan-600 text-cyan-500 rounded-md items-center gap-2'> <i>Learn more</i>  <FaArrowRight size={12} /></button>
      </div>
    </div>
  )
}

export default CallToAction