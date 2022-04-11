import React from 'react';
import About from '../../Components/About/About';
import AllServices from '../../Components/AllServices/AllServices';
import Banner from '../../Components/Banner/Banner';
import Faq from '../../Components/Faq/Faq';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <AllServices></AllServices>
      <Faq></Faq>
    </div>
  );
};

export default Home;
