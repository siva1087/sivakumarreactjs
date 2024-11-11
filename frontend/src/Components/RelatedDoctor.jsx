import React, { useEffect, useState } from 'react';
import { Doctors as DoctorData } from '../assets/assets'; // Renamed to avoid conflict
import { useNavigate } from 'react-router-dom';

const RelatedDoctor = ({ specialty, docId }) => {
    const [doctors, setDoctors] = useState([]); // Renamed to avoid conflict
    const [relatedDoctors, setRelatedDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate fetching doctors data
        setDoctors(DoctorData); // Set the doctors from assets
        setLoading(false);
    }, []);

    useEffect(() => {
        if (doctors.length > 0 && specialty) {
            const filteredDoctors = doctors.filter((doc) => doc.speciality === specialty && doc._id !== docId);
            setRelatedDoctors(filteredDoctors); // Update relatedDoctors state
        }
    }, [doctors, specialty, docId]);

    if (loading) {
        return <div>Loading...</div>; // Loading state
    }

    if (error) {
        return <div>Error: {error}</div>; // Error handling
    }

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted Doctors.</p>
            <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
                {relatedDoctors.slice(0, 5).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`appointment/${item._id}`); scrollTo(0, 0); }} 
                        className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' 
                        key={index}
                    >
                        <img className='bg-blue-50' src={item.image} alt={item.name} />
                        <div className='p-4'>
                            <div className='flex items-center text-sm text-center text-green-500'>
                                <p className='w-2 h-2 bg-green-500 rounded-full'>Available</p>
                            </div>
                        </div>
                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                ))}
            </div>
            <button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0); }} 
                className='bg-blue-500 text-gray-600 px-6 py-3 rounded-full mt-10'
            >
                More
            </button>
        </div>
    );
};

export default RelatedDoctor;