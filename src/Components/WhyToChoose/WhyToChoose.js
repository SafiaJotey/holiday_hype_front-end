import React from 'react';
import Reason from './Reason';

const WhyToChoose = () => {
  return (
    <div className="px-2">
      <h3 className="text-primary fw-bold  ">
        Why To Choose
        <span className="text-secondary"> Holiday Hype</span>{' '}
      </h3>
      <p>
        Travelmate introduces 24/7 support team via online or offline.
        <br /> You can reach us in every method including email, social media or
        phone call. Just feel free to ask anything.{' '}
      </p>
      <div>
        <Reason />
      </div>
    </div>
  );
};

export default WhyToChoose;
