import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets';
import { NavLink } from 'react-router-dom';
import {FaUser, FaBookOpen, FaPlusCircle, FaHome} from 'react-icons/fa';
const Sidebar = () => {

  const { isEducator } = useContext(AppContext);

  const menuItems = [
    { name: 'Dashboard', path: '/educator', icon: FaHome},
    { name: 'Add Course', path: '/educator/add-course', icon: FaPlusCircle},
    { name: 'My Courses', path: '/educator/my-courses', icon: FaBookOpen},
    { name: 'Student Enrolled', path: '/educator/student-enrolled', icon: FaUser},
  ]

  return isEducator &&  (
    <div className='md:w-64 w-16 border-r min-h-screen bg-zinc-900 text-white text-base border-gray-500 py-2 flex flex-col'>
      {menuItems.map((item) => (
        <NavLink
        to={`${item.path}`}
        key={item.name}
        end={item.path === '/educator'}
        className={({isActive}) =>`flex items-center md:flex-row flex-col md:justify-start justify-center py-3.5 md:px-10 gap-3 ${isActive ? 'bg-zinc-800 border-r-[6px] border-cyan-500/90' : 'hover:bg-zinc-800/90 border-r-[6px] border-zinc-600 hover:border-gray-100/90' }`}
        >
          <div className='text-cyan-500 w-6 h-6'><item.icon className="w-full h-full"/></div>
          <p className='md:block hidden text-center'>{item.name}</p>
        </NavLink>
      ))}
    </div>
  )
}

export default Sidebar