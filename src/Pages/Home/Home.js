import React from 'react';
import About from '../../Components/About/About';
import AllServices from '../../Components/AllServices/AllServices';
import Banner from '../../Components/Banner/Banner';
import Social from '../../Components/Social/Social';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <AllServices></AllServices>
            <Social></Social>

        </div>
    );
};

export default Home;