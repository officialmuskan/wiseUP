import React from 'react'
import { assets, dummyEducatorData } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const eductorData = dummyEducatorData;
  const { user } = useUser();
  
  return (
    <div className='flex items-center justify-between bg-zinc-800 text-gray-100 px-4 md:px-8 border-b border-gray-500 py-3'>
      <Link to='/'>
        <h1 alt="Logo" className='w-28 text-2xl lg:w-32'>WiseUp </h1>
      </Link>

      <div className='flex items-center gap-5 text-gray-300 relative'>
        <p>Hi! {user ? user.fullName : 'Developers'}</p>
        {user ? <UserButton/> : <img className='max-w-8' src={assets.profile_img} alt="" /> }
      </div>
    </div>
  )
}

export default Navbar