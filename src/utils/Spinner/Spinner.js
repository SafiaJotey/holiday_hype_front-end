import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lotties/spinner.json';
import useMediaQuery from '../../Hooks/useMediaQuery';

const Spinner = () => {
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
    <div className="vh-100 d-flex justify-content-center align-items-center ">
      <div className="pe-none">
        <Lottie
          options={defaultOptions}
          isClickToPauseDisabled={true}
          width={isDesktop ? 300 : isTablet ? 200 : 150}
        />
      </div>
    </div>
  );
};

export default Spinner;
