import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/banner.json';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Banner = () => {
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="bg-dark d-flex justify-content-center py-5 ">
      <div
      // className="bg-dark"
      >
        <div className="bg-dark  row d-flex  align-items-center justify-content-center w-100 ">
          <div className="col-md-6  p-4">
            <h5 className="text-Primary fs-6 fw-bold ">WELCOME TO </h5>
            <h1 className="text-Primary fs-1 ">
              {' '}
              <span className="text-secondary fw-bold">HOLIDAY</span> HYPE
            </h1>
            <p className=" text-justify  px-4">
              Are you thinking about going on a long trip around the world, too,
              but don’t know how to go about planning such an endeavour? Read
              the article to find out a few most important things to know before
              going on a one-year trip around the world.
            </p>
            <button className="mt-3 mx-1 bg-primary pe-auto px-4 py-2 rounded border border-secondary border-start-3">
              <a href="home#about" className=" text-decoration-none text-white">
                Know More
              </a>
            </button>
            <button className="mt-3  mx-1 bg-secondary px-5 py-2 rounded border pe-auto border-secondary border-start-3">
              <a
                href="home#packages"
                className=" text-decoration-none text-white"
              >
                Buy Now
              </a>
            </button>
          </div>
          <div className="col-md-6  ">
            <div className=" pe-none">
              <Lottie
                options={defaultOptions}
                isClickToPauseDisabled={true}
                width={isDesktop ? 600 : isTablet ? 400 : 250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
