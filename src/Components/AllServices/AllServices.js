import React, { useEffect, useState } from 'react';

import PackageSlider from '../../utils/PackageSlider/PackageSlider';
// import './AllServices.css';

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://guarded-scrubland-87252.herokuapp.com/allServices')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="my-5 p-3 country" id="packages">
      <div className="container">
        <h2 className="text-primary">
          Visit Beautiful <span className="text-secondary">Bangladesh</span>
        </h2>
        <h5 className="text-primary text-bold"> Upcoming Events</h5>
        <p>
          Welcome to beautyful Bangladesh.Bangladesh is situated in the
          north-east part of South Asia which is blessed with natural beauty,
          ranging from mountains, rivers, beaches, biodiversity, ancient
          archaeological sites, medieval monasteries to temples, pagodas,
          mosques, churches and many more.We are providing our Exclusive
          packages to you.{' '}
        </p>
      </div>
      <div className="services">
        <div className="row container mx-auto">
          <PackageSlider services={services}></PackageSlider>
        </div>
        <div className="tag"></div>
      </div>
    </div>
  );
};

export default AllServices;
