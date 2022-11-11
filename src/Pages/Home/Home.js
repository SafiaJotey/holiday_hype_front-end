import React from 'react';
import About from '../../Components/About/About';
import AllServices from '../../Components/AllServices/AllServices';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
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
      <Footer></Footer>{' '}
    </div>
  );
};

export default Home;
