import React from 'react';
import Banner from '../Components/Banner';
import { Header } from '../Components/Header';
import SpecialityMenu from '../Components/SpecialityMenu';
import TopDoctors from '../Components/TopDoctors';

function Home() {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
}

export default Home;