import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { assets, Doctors } from '../assets/assets';
import RelatedDoctor from '../Components/RelatedDoctor'; 

const Appointment = () => {
  const currencySymbol = '$';
  const dayOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const { docId } = useParams();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null); 

  const getAvailableSlots = async () => {
    setDocSlots([]); 
    let today = new Date();
    let allSlots = []; 

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); 

      // Adjust start time for today
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10); 
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        currentDate.setMinutes(currentDate.getMinutes() + 30); 
      }
      allSlots.push({ date: currentDate.toDateString(), slots: timeSlots });
    }

     
    setDocSlots(allSlots); 
  };

  useEffect(() => {
    getAvailableSlots(); 
  }, []); 

  useEffect(() => {
     const fetchDocInfo = () => {
      const doctor = Doctors.find(doc => doc._id === docId);
      setDocInfo(doctor);
    };

    fetchDocInfo(); 
  }, [docId]); 

  if (!docInfo) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt={docInfo.name} />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
            {docInfo.name} <img className='w-5' src={assets.verified_icon} alt="Verified" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-2 text-sm font-medium text-gray-900'>About 
              <img src={assets.info_icon} alt="Info" /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>       
          </div>
          <p className='text-gray-500 font-medium mt-4'>Appointment Fees:<span className ='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>
      
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-lg font-semibold'>Booking Slots</p>
        <div className='flex gap-3 items-center w-full overflow-x-auto mt-4'>
          {
            docSlots.length > 0 && docSlots.map((item, index) => (
              <div key={index} className='bg-primary text-white text-sm font-light p-4 rounded-full my-6 flex flex-col items-center'>
                <p className='font-bold'>{item.slots[0] && dayOfWeek[item.slots[0].datetime.getDay()]}</p>
                <p className='text-xs'>{item.slots[0] && item.slots[0].datetime.getDate()}</p>
                <div className=''>
                  {item.slots.map((slot, slotIndex) => (
                    <div
                      key={slotIndex}
                      onClick={() => setSelectedSlot(slot.time)}
                      className={`text-center py-2 px-4 mx-1 rounded-full cursor-pointer transition duration-200 ${selectedSlot === slot.time ? 'bg-white text-primary' : 'border border-gray-700 text-white'}`}
                    >
                      {slot.time.toLowerCase()}
                    </div>
                  ))}
                </div>
              </div>
            ))
          }
        </div>
        <button className='bg-primary text-white text-sm font-light px-6 py-2 rounded-full my-6 transition duration-200 hover:bg-opacity-80'>Book an Appointment</button>
      </div>
      
      <RelatedDoctor docId={docId} specialty={docInfo.speciality} />
    </div>
  );
};

export default Appointment;