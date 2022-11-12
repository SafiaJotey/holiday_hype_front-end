import React from 'react';
import about from '../../assets/Images/about.jpg';
import Bandarban from '../../assets/Images/Bandarban.jpeg';
import jaflong from '../../assets/Images/jaflong.jpg';
import sajek from '../../assets/Images/sajek.jpg';
import Shundarban from '../../assets/Images/shun.jpg';

const About = () => {
  return (
    <div className="container my-5  " id="about">
      <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-start align-items-center  ">
        <h2 className="text-start ms-md-5 mb-3 text-primary">
          Welcome to beautiful <br />
          <span className="text-secondary">Bangladesh</span>
        </h2>
        <div className="col-md-6 gallery">
          <div className="row">
            <div className="col-md-6">
              <img
                className="w-100 border border-2 border-primary my-1  ms-md-3"
                src={about}
                alt=""
              />
              <img
                className="w-100 border border-2 border-primary my-1 my-2  ms-md-3"
                src={jaflong}
                alt=""
              />
            </div>

            <div className="col-md-6 d-flex flex-column justify-content-start align-items-start ">
              {' '}
              <div className="d-flex  justify-content-between">
                <img
                  className="w-100 border border-2 border-primary my-1 mt-2 mt-md-5"
                  src={Bandarban}
                  alt=""
                />
              </div>
              <img
                className="w-100 border border-2 border-primary my-1 my-2 "
                src={sajek}
                alt=""
              />
            </div>

            {/* <img className="img" src={about} alt="" /> */}
          </div>
          <p className="mt-5 fs-6 px-3 text-start">
            {' '}
            A Comprehensive list of best places to visit bangladesh you can't
            miss on your trip for a memorable experience of the country. Want to
            visit them with convenience? check out our website.
          </p>
        </div>
        <div className="col-md-6 p-3">
          <p className="fs-6 px-3 text-start">
            Bangladesh, beautiful country of south-central Asia, located in the
            delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers
            in the northeastern part of the Indian subcontinent. Traveling is a
            medium to build human connections with one another by learning about
            culture, food, new sites, music, and the way people live their day
            to day lives in different parts . It's the best on-site learning a
            person can get. Traveling is also important for human happiness and
            mental health.We are here to help you
          </p>
          <img
            className="w-100 border border-2 border-primary my-1 "
            src={Shundarban}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
