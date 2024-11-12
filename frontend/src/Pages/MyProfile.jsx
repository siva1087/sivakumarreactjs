import React, { useState } from 'react';
import profilePic from '../assets/profile_pic.png'; // Adjust the path to your profile picture

const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edware Vincent",
    image: profilePic, // Use the correct variable for the image
    email: 'sivakumardev@gmail.com', // Corrected the email domain
    phone: '+91 6380395800',
    address: {
      line1: "23. Azalgu Nagar, Coimbatore", // Corrected spelling and formatting
      line2: "Tamil Nadu"
    },
    gender: "male",
    dob: '2000-01-20' // Corrected the year format
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <img src={userData.image} alt="Profile" className="w-32 h-32 rounded-full" />
      <div className="mt-4">
        {isEdit ? (
          <input
            type='text'
            value={userData.name}
            onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))}
            className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
          />
        ) : (
          <p className="text-medium text-3xl text-nutral-800 mt-4">{userData.name}</p>
        )}
        <hr className='bg-zinc-400 h-[1px] border-none' />
        <div >
          <p className='text-neutral-500 underline mt-3' >ContaCT Information</p>
            <div>

         
      </div>
      <div className="grid grid-col=[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">
        <p className='font-medium'>Email: </p>
        <p className='text-blue-500' > {userData.email}</p>
        <p className='font-medium' >Phone: </p>
     
        {
          isEdit ? (
            <input
              type='text'
              value={userData.phone}
              onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))}
              className="border border-gray-300 rounded p-2"
            />
          ) : (
            <p className='text-blue-400'>{userData.phone}</p>
          )}
        <p className='font-medium'>Address:  </p>
        {
           isEdit ? <p>
            <input
            type='text'
            value={userData.line1}
            onChange={e => setUserData(prev => ({ ...prev, address:{...prev, address,line1: e.target.value }}))}
            className="border border-gray-300 rounded p-2 bg-gray-50"
          /> 
           <input
            type='text'
            value={userData.line2}
            onChange={e => setUserData(prev => ({ ...prev, address:{...prev, address,line2: e.target.value }}))}
            className="border bg-gray-50 border-gray-300 rounded p-2"
          /> 
          <br/>
          </p>:
          

        
        <p className='text-gray-500'>{userData.address.line1}
        <br/>
          {userData.address.line2}</p>


}
</div>

  <p className='text-neutral-500 underline mt-3'>Basics Information</p>
</div>
        <p>Gender: {userData.gender}</p>
       {
        isEdit ?<select   type='text' className='max-w-20 bg-gray-100'
        value={userData.gender}
        onChange={e => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select> :
        
          <p className="text-xl font-semibold text-gray-100">{userData.gender}</p>
        
        }
        <p className='font-medium'>Birthday:</p>
       {
        isEdit
        ?
        <input className='max-w-28 bg-gray-100' type='date'  value={userData.dob}
        onChange={e => setUserData(prev => ({ ...prev, address:{...prev, dob: e.target.value }}))}/>
        :<p className='text-gray-400' >
          {userData.dob}
        </p>
       }
      </div>
      <div>
        {isEdit ?  
        <button
        
        onClick={() => setIsEdit(false)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" >Save Information</button>
        :<button  onClick={() => setIsEdit(true)}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" >Edit</button>
        }
        
         </div>

         </div>
  );
};

export default MyProfile;
