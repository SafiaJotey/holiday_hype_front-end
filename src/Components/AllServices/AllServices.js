import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './AllServices.css';

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('https://guarded-scrubland-87252.herokuapp.com/allServices')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-3 country" id="packages">
      <div className="package">
        <h2>
          Visit Beautiful <span className="highlight">Bangladesh</span>
        </h2>
        <p className="title-paragraph package">
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
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h6>{service?.title}</h6>

                <p>{service?.subTitle}</p>
                <h3 className="text-warning"> Cost : $ {service?.price}</h3>
                <Link to={`/booking/${service._id}`}>
                  <button className="btn ">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllServices;
