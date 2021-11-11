import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllServices.css";

const AllServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://limitless-oasis-74220.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="p-3 country">
      <h2>Visit Your Dream Country</h2>
      <div className="services">
        <div className="row container mx-auto">
          {services?.map((service) => (
            <div className="col-md-4">
              <div className="service-card border border my-2 p-3">
                <div className="services-img ">
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h6>{service?.name}</h6>
                
                <p>{service?.description}</p>
                <h3 className="text-danger"> Cost : $ {service?.price}</h3>
                <Link to={`/booking/${service._id}`}>
                  <button className="btn ">Book Now</button>
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