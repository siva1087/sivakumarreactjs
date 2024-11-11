import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Doctors } from '../assets/assets'; // Ensure this is an array of doctor objects

const Doctorslist = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(Doctors.filter(doc => doc.speciality === speciality));
    } else {
      setFilterDoc(Doctors);
    }
  };

  useEffect(() => {
    applyFilter(); // Call applyFilter when speciality changes
  }, [speciality]); // Only depend on speciality

  return (
    <div>
      <p className='text-gray-600'>Browse through the Doctors' specialties.</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4  text-sm text-gray-600'>
          <p onClick={()=>speciality==='General Physician'? navigate('/doctors'):navigate('/doctors/General Physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer${speciality==="General Physician"?"bg-indigo-100 text-black":""} `}>General Physician</p>
          <p onClick={()=>speciality==='Gynecologist'? navigate('/doctors'):navigate('/doctors/Gynecologist')}  className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gynecologist"?"bg-indigo-100 text-black":""}`} >Gynecologist</p>
          <p onClick={()=>speciality==='Dermatologist'? navigate('/doctors'):navigate('/doctors/Dermatologist') }className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Dermatologist"?"bg-indigo-100 text-black":""} `} >Dermatologist</p>
          <p onClick={()=>speciality==='Pediatrician'? navigate('/doctors'):navigate('/doctors/Pediatrician') }className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Pediatrician"?"bg-indigo-100 text-black":""} `}>Pediatrician</p>
          <p onClick={()=>speciality==='Neurologist'? navigate('/doctors'):navigate('/doctors/Neurologist') }className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer  ${speciality==="Neurologist"?"bg-indigo-100 text-black":""}`}>Neurologist</p>
          <p  onClick={()=>speciality==='Gastroenterologist'? navigate('/doctors'):navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality==="Gastroenterologist"?"bg-indigo-100 text-black":""} `} >Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {filterDoc.map((item) => (
            <div
              onClick={() => navigate(`appointment/${item._id}`)}
              className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition all duration-500'
              key={item._id} // Use unique ID for key
            >
              <img className='bg-blue-50' src={item.image} alt={item.name} />
              <div className='p-4'>
                <div className='flex items-center text-sm text-center text-green-500'>
                  <p className='w-2 h-2 bg-green-500 rounded-full'>Available</p>
                </div>
              </div> 
              <p className='text-grey-900 text-lg font-medium'>{item.name}</p>
              <p className='text-grey-600 text-sm'>{item.speciality}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctorslist;