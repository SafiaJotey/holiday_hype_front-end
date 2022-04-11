import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lotties/banner.json';
import useMediaQuery from '../Hooks/useMediaQuery';
import './Banner.css';

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
    <div className="banner-container ">
      <div className="banner">
        <div className="row d-flex  align-items-center justify-content-center">
          <div className="col-md-6 p-5">
            <h1 className="title ">
              WELCOME TO <br />
              <span className="highlight">HOLIDAY</span> HYPE
            </h1>
            <p className=" text-center mt-5">
              Are you thinking about going on a long trip around the world, too,
              but don’t know how to go about planning such an endeavour? Read
              the article to find out a few most important things to know before
              going on a one-year trip around the world.
            </p>
            <button className="mt-3 about-btn">Know more</button>
          </div>
          <div className="col-md-6  ">
            <div className=" pe-none">
              <Lottie
                options={defaultOptions}
                isClickToPauseDisabled={true}
                width={isDesktop ? 600 : isTablet ? 400 : 300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
