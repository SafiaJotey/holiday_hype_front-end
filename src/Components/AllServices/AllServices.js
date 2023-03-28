import { CTooltip } from '@coreui/react';
import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PackageSlider from '../../utils/PackageSlider/PackageSlider';
const AllServices = () => {
  const [services, setServices] = useState({});
  useEffect(() => {
    fetch(
      'https://holiday-hype-back-end.onrender.com/api/v1/packages/getPackages'
    )
      .then((res) => res.json())
      .then((data) => setServices(data.data));
  }, []);

  return (
    <div className="my-5 p-3 country  " id="packages">
      <div className="container ">
        <h2 className="text-primary">
          Visit Beautiful <span className="text-secondary">Bangladesh</span>
        </h2>
        <h5 className="text-primary text-bold"> Upcoming Events </h5>
        <p>
          Welcome to beautyful Bangladesh.Bangladesh is situated in the
          north-east part of South Asia which is blessed with natural beauty,
          ranging from mountains, rivers, beaches, biodiversity, ancient
          archaeological sites, medieval monasteries to temples, pagodas,
          mosques, churches and many more.We are providing our Exclusive
          packages to you.{' '}
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {' '}
        <CTooltip content="View All upcomming events." placement="right">
          <Link
            to="/view"
            className=" w-auto text-secondary fw-bold  pe-auto d-flex justify-content-center container align-items-center "
          >
            <small className="fw-bold  text-secondary">
              <AiFillEye className="fs-5" />
            </small>
            <small className="fw-bold fs-6  text-secondary">View All</small>
          </Link>
        </CTooltip>{' '}
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
