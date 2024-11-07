import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [Token, setToken] = useState(true);  

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray'>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex item-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to="/">
            Home
          </NavLink>
          <hr/>
        </li>
        <li className='py-1'>
          <NavLink to="/doctors">
            All Doctors
          </NavLink>
          <hr/>
        </li>
        <li className='py-1'>
          <NavLink to="/about">
            About
          </NavLink>
          <hr/>
        </li>
        <li className='py-1'>
          <NavLink to="/contacts">
            Contact
          </NavLink>
          <hr />
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        {
          Token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img onClick={() => navigate('/')} className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img src={assets.dropdown_icon} alt="" />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-grey-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                  <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={() => navigate('my-appointment')} className='hover:text-black cursor-pointer'>My Appointment</p>
                  <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div>
          : <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
              Create Account
            </button>
        }
      </div>
    </div>
  );
};

export default Navbar;