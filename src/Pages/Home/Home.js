import React from 'react';
import About from '../../Components/About/About';
import AllServices from '../../Components/AllServices/AllServices';
import Banner from '../../Components/Banner/Banner';
import Card from '../../Components/Card/Card';
import Faq from '../../Components/Faq/Faq';
import Footer from '../../Components/Footer/Footer';
import Social from '../../Components/Social/Social';
import VisitBlog from '../../Components/VisitBlog/VisitBlog';
import WhyToChoose from '../../Components/WhyToChoose/WhyToChoose';
import useAuth from '../../Hooks/useAuth';
import Spinner from '../../utils/Spinner/Spinner';

const Home = () => {
  const { isLoading } = useAuth();
  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          {' '}
          <Banner></Banner>
          <Card></Card>
          <About></About>
          <AllServices></AllServices>
          <VisitBlog></VisitBlog>
          <WhyToChoose></WhyToChoose>
          <Faq></Faq>
          <Social></Social>
          <Footer></Footer>{' '}
        </div>
      )}
    </div>
  );
};

export default Home;
