import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, Doctors } from '../assets/assets';

const Appointment = () => {
  const currencySymbol = '$';
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);

  const getAvailableSlots = async () => {
    setDocSlots([]); // Clear previous slots
    let today = new Date();
    let allSlots = []; // Array to hold all slots

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Set end time to 9 PM

      // Adjust start time for today
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); // Start at 10 AM for future dates
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30); // Increment by 30 minutes
      }
      allSlots.push({ date: currentDate.toDateString(), slots: timeSlots });
    }

    setDocSlots(allSlots); // Set all slots at once
  };

  useEffect(() => {
    getAvailableSlots(); // Call the function to get available slots
  }, []); // Run only once when the component mounts

  useEffect(() => {
    const fetchDocInfo = () => {
      const doctor = Doctors.find(doc => doc._id === docId);
      setDocInfo(doctor);
    };

    fetchDocInfo(); // Call fetchDocInfo when docId changes
  }, [docId]); // Only depend on docId

  // Handle loading state or case when doctor is not found
  if (!docInfo) {
    return <div>Loading...</div>; // Or a message indicating the doctor was not found
  }

  return (
    <div>
      {/*---------doctors details-----------*/}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/*---------doctors name degree experience-----------*/}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="Verified" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/*---------doctors about-----------*/}
          <div>
            <p className='flex items center gap-2 text-sm font-medium text-gray-900'>About 
              <img src={assets.info_icon} alt="Info" /></p>
            <p className='text sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>       
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment Fees:<span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      {/*---------available slots-----------*/}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div key={index}> 
                <p>{item.slots[0] && dayOfWeek[item.slots[0].datetime.getDay()]}</p>
                <p>{item.slots[0] && item.slots[0].datetime.getDate()}</p>
                <div>
                  {item.slots.map((slot, slotIndex) => (
                    <div onClick={()=>setDocSlots(index)} className='text-center px-6   min-w-16 rounded-full border bg-primary border-primary-200' key={slotIndex}>
                      <span>{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Appointment;