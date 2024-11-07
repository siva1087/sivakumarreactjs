import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Doctorslist from './Pages/Doctorslist';
import Login from './Pages/Login';
import About from './Pages/About';
import Contact from './Pages/Contact';
import MyProfile from './Pages/MyProfile';
import MyAppointments from './Pages/MyAppointments';
import Appointment from './Pages/Appointment';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import { Doctors } from './assets/assets';

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctorslist />} />
        <Route path='/doctors/:speciality' element={<Doctorslist/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;