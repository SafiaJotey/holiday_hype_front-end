import React from 'react';
import about from '../../Images/about.jpg';
import Bandarban from '../../Images/Bandarban.jpeg';
import jaflong from '../../Images/jaflong.jpg';
import sajek from '../../Images/sajek.jpg';
import Shundarban from '../../Images/shun.jpg';
import './About.css';

const About = () => {
  return (
    <div className="container vision " id="about">
      <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-start align-items-center  ">
        <h2 className="text-start ms-md-5 mb-3">
          Welcome to beautiful <br />
          <span className="highlight">Bangladesh</span>
        </h2>
        <div className="col-md-6 gallery">
          <div className="row">
            <div className="col-md-6 ">
              <img className="img  ms-md-3" src={about} alt="" />
              <img className="img my-2  ms-md-3" src={jaflong} alt="" />
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-start align-items-start ">
              {' '}
              <div className="d-flex  justify-content-between">
                <img className="img mt-2 mt-md-5" src={Bandarban} alt="" />
              </div>
              <img className="img my-2 " src={sajek} alt="" />
            </div>

            {/* <img className="img" src={about} alt="" /> */}
          </div>
          <p className="mt-5 text-start">
            {' '}
            A Comprehensive list of best places to visit bangladesh you can't
            miss on your trip for a memorable experience of the country. Want to
            visit them with convenience? check out our website.
          </p>
        </div>
        <div className="col-md-6 p-3">
          <p className="title-paragraph text-start">
            Bangladesh, beautiful country of south-central Asia, located in the
            delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers
            in the northeastern part of the Indian subcontinent. Traveling is a
            medium to build human connections with one another by learning about
            culture, food, new sites, music, and the way people live their day
            to day lives in different parts . It's the best on-site learning a
            person can get. Traveling is also important for human happiness and
            mental health.We are here to help you
          </p>
          <img className="img my-1 " src={Shundarban} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
