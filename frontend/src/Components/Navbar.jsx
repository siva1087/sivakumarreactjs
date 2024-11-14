import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Adjust the path as necessary
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // State to control mobile menu visibility
  const [token, setToken] = useState(true); // State to manage user authentication

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray'>
      <img
        onClick={() => navigate('/')}
        className='w-44 cursor-pointer'
        src={assets.logo}
        alt="Logo"
      />
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <li className='py-1'>
          <NavLink to="/" activeClassName="text-blue-500">
            Home
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to="/doctors" activeClassName="text-blue-500">
            All Doctors
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to="/about" activeClassName="text-blue-500">
            About
          </NavLink>
        </li>
        <li className='py-1'>
          <NavLink to="/contacts" activeClassName="text-blue-500">
            Contact
          </NavLink>
        </li>
      </ul>
      <div className='flex items-center gap-4'>
        {token ? (
          <div className='flex items-center gap-2 cursor-pointer group relative'>
            <img
              onClick={() => navigate('/')}
              className='w-8 rounded-full'
              src={assets.profile_pic}
              alt="Profile"
            />
            <img src={assets.dropdown_icon} alt="Dropdown" />
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                <p onClick={() => navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}
        <img
          className='w-6 md:hidden cursor-pointer'
          onClick={() => setShowMenu(true)}
          src={assets.menu_icon}
          alt="Menu"
        />
        {/*------ Mobile Menu -----*/}
        <div className={`fixed right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300 ${showMenu ? 'w-full' : 'h-0 w-0'}`}>
          <div className='p-4'>
            <img src={assets.logo} alt="Logo" className="mb-4" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt="Close Menu"
              className="cursor-pointer mb-4"
            />
          </div>
          <ul className='flex flex-col items-center'>
            <li className='mb-2'>
              <NavLink to="/" onClick={() => setShowMenu(false)} activeClassName="text-blue-500"><p>Home</p></NavLink>
            </li>
            <li className='mb-2'>
              <NavLink to="/doctors" onClick={() => setShowMenu(false)} activeClassName="text-blue-500"><p>All Doctors</p></NavLink>
            </li>
            <li className='mb-2'>
              <NavLink to="/about" onClick={() => setShowMenu(false)} activeClassName="text-blue-500"><p>About</p></NavLink>
            </li>
            <li className='mb-2'>
              <NavLink to="/contacts" onClick={() => setShowMenu(false)} activeClassName="text-blue-500 "><p>Contact</p></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
