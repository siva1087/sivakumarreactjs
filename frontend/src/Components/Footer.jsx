import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*-----Leftside-------*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum molestiae delectus iusto quod, modi voluptate eligendi unde dolor inventore voluptatum reprehenderit sint, eaque nesciunt laudantium rem quibusdam id, accusantium voluptas!
          </p>
        </div>
        {/*-----centerside-------*/}
        <div>
          <p className='text-xl text-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/*-----Right side-------*/}
        <div>
          <p className='text-xl text-medium mb-5'>Get In Touch</p>
          <ul>
            <li>+91 6380395800</li>
            <li>sivakumardev@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;