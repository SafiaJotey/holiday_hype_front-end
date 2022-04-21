import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
const Card = () => {
  return (
    <div className="container my-2">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="p-2">
          <a href="home#packages" className="about ">
            <div className="row  card">
              <div className="col-12 my-5  d-flex flex-column justify-content-center align-items-center  my-md-0 ">
                <a href="#">
                  <i class="fas fa-box"></i>
                </a>
                <div className="my-5 my-md-2">
                  <h4>Attractive Packages</h4>
                  <p className="">
                    {' '}
                    Choose your one and have a affordable, beautiful vacation to
                    you dream country{' '}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="p-2">
          <Link to="/addBlog" className="about">
            <div className="row  card">
              <div className="col-12  my-5 d-flex flex-column  justify-content-center align-items-center my-md-0 ">
                <a href="#">
                  <i class="fab fa-readme"></i>
                </a>
                <div className="my-5 my-md-2">
                  <h4>Informative Blogs</h4>
                  <p className="">
                    Our clients and user are always sharing about their tour
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="p-2">
          <Link to="/publish" className="">
            <div className="row  card">
              <div className="col-12  my-5 d-flex flex-column justify-content-center align-items-center my-md-0">
                <a href="#">
                  <i class="fas fa-pen"></i>
                </a>

                <div className="my-5  my-md-2">
                  <h4>Share Your Experiences</h4>
                  <p className="">
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

export default Card;
