import React from 'react';
import About from '../../Components/About/About';
import AllServices from '../../Components/AllServices/AllServices';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import Faq from '../../Components/Faq/Faq';
import Social from '../../Components/Social/Social';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Card></Card>
      <About></About>
      <AllServices></AllServices>
      <Faq></Faq>
      <Social></Social>
    </div>
  );
};

export default Home;
