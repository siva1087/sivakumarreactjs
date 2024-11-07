import React from 'react';

const Doctor = ({ name, specialty }) => {
  return (
    <div>
      <h1>Doctor: {name}</h1>
      <p>Specialty: {specialty}</p>
    </div>
  );
};

export default Doctor;