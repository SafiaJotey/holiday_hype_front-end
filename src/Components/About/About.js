import React from 'react';
import { Link } from 'react-router-dom';
import about from '../../Images/about.jpg';
import './About.css';
const About = () => {
  return (
    <div className="container vision my-5" id="about">
      <h2>
        ABOUT <span className="highlight">US</span>
      </h2>
      <p className="title-paragraph">
        Bangladesh, beautiful country of south-central Asia, located in the
        delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in
        the northeastern part of the Indian subcontinent. Traveling is a medium
        to build human connections with one another by learning about culture,
        food, new sites, music, and the way people live their day to day lives
        in different parts . It's the best on-site learning a person can get.
        Traveling is also important for human happiness and mental health.We are
        here to help you
      </p>
      <div className="row text-center d-flex flex-column d-md-flex flex-md-row justify-content-center align-items-center  ">
        <div className="col-md-7">
          <div>
            <img className="img" src={about} alt="" />
          </div>
        </div>
        <div className="col-md-5">
          <a href="home#packages" className="about">
            <div className="row  card">
              <div className="col-12 my-5  d-md-flex justify-content-center align-items-center  my-md-0 ">
                <a href="#">
                  <i class="fas fa-box"></i>
                </a>
                <div className="my-5 my-md-2">
                  <h4>Attractive Packages</h4>
                  <p className=" ms-5">
                    {' '}
                    Choose your one and have a affordable, beautiful vacation to
                    you dream country{' '}
                  </p>
                </div>
              </div>
            </div>
          </a>
          <Link to="/addBlog" className="about">
            <div className="row  card">
              <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0 ">
                <a href="#">
                  <i class="fab fa-readme"></i>
                </a>
                <div className="my-5 my-md-2">
                  <h4>Informative Blogs</h4>
                  <p className="ms-5">
                    Our clients and user are always sharing about their tour
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/publish" className="about">
            <div className="row  card">
              <div className="col-12  my-5 d-md-flex justify-content-center align-items-center my-md-0">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>

                <div className="my-5  my-md-2">
                  <h4>Share Your Experiences</h4>
                  <p className="ms-5">
                    You can write blogs on your experiences too so that people
                    can get a ideas.{' '}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
