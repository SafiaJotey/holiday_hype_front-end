import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ViewAll = () => {
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch(
      'https://holiday-hype-back-end.onrender.com/api/v1/packages/getPackages'
    )
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);
  console.log(services);
  return (
    <div className="my-5 p-3 country" id="packages">
      <div className="container">
        <h2 className="text-primary">
          Visit Beautiful <span className="text-secondary">Bangladesh</span>
        </h2>
        <h5 className="text-primary text-bold"> Upcoming Events </h5>
      </div>
      <p className="container">
        Welcome to beautyful Bangladesh.Bangladesh is situated in the north-east
        part of South Asia which is blessed with natural beauty, ranging from
        mountains, rivers, beaches, biodiversity, ancient archaeological sites,
        medieval monasteries to temples, pagodas, mosques, churches and many
        more.We are providing our Exclusive packages to you.{' '}
      </p>
      <div className="row container mx-auto">
        {Array.isArray(services) &&
          services?.map((service) => (
            <div className="col-md-4 p-2">
              <div className="bg-dark border border-line my-2 p-2 shadow">
                <div>
                  <img className="w-100" src={service?.image} alt="" />
                </div>

                <h6 className="text-primary fw-bold my-2">{service?.title}</h6>

                <p>{service?.subTitle}</p>
                <h5 className="text-secondary fw-bold ">
                  {' '}
                  Cost : $ {service?.price}
                </h5>
                <Link to={`/booking/${service._id}`}>
                  <button className=" bg-primary text-white px-3 py-2 rounded border border-secondary border-start-3">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ViewAll;
