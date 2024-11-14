import React, { useContext } from "react";

import { Doctors } from "../assets/assets";

const MyAppointments=() =>{
;  
  return(
    <div>
      <p className="pb-3 mt-12  font-medium  text-znic-700 border-b">My Appointment</p>
      <div>
        {
           Doctors.slice(0, 2).map((item, index) => (
          <div className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 border-b" key={index}>
            <div>
            <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-2 text-sm text-znic-600">
             <p className="text-neutral-800  font-semibold">{item.name}</p>
              <p>{item.speciality}</p> 
              <p className="text-znic-700 font-medium mt-1" >Address: </p>
               <p className="text-xs">{item.address.line1}</p>
               <p className="text-xs">{item.address.line2}</p> 
               <p className="text-xs mt-1"><span className="text-sm text-neutral-700 font-medium">Date& time:</span>25,july,2024</p>
           </div>
            
       
            <div></div>
            <div className='flex flex-col gap-2 justify-end'>
           <button className="text-sm text-white  text-stone-500   hover:bg-primary  transition-all duration-300 text-center sm:min-w-48 py-2  border  rounded text-white">Pay Online</button>
           <button className="text-sm text-white  text-stone-500   hover:bg-red-600  transition-all duration-300  text-center sm:min-w-48 py-2 text-white border rounded text-white">Cancel Appointment</button>
            </div>
          
              </div>
         
           
         
        ))}
      
      </div>
    </div>
  );
};

export default MyAppointments;
