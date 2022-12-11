import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div className="container my-2">
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
        <div className="p-2 m-4 ">
          <Link to="/view" className="about text-decoration-none text-primary ">
            <div className="row  card shadow-sm bg-dark">
              <div className="col-12 my-5  d-flex flex-column justify-content-center align-items-center  my-md-0 py-4 ">
                <i class="fas fa-box fs-1 fw-bold"></i>

                <div className="my-5 my-md-2">
                  <h4 className="fw-bold">Attractive Packages</h4>
                  <p className="">
                    {' '}
                    Choose your one and have a affordable, beautiful vacation to
                    you dream country{' '}
                  </p>
                  <small className="text-secondary fw-bold">
                    click to Know more
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="p-2 m-4 ">
          <Link
            to="/addBlog"
            className="about text-decoration-none text-primary "
          >
            <div className="row  card shadow-sm bg-dark  px-3">
              <div className="col-12 my-5  d-flex flex-column justify-content-center align-items-center  my-md-0 py-4 ">
                <i class="fab fa-readme fs-1 fw-bold"></i>

                <div className="my-5 my-md-2">
                  <h4 className="fw-bold">Informative Blogs</h4>
                  <p className="">
                    {' '}
                    Our clients and user are always sharing about their tour
                    experiences.{' '}
                  </p>
                  <small className="text-secondary fw-bold">
                    click to Know more
                  </small>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* <div className="p-2 m-4">
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
                  <small className="text-warning">click to Know more</small>
                </div>
              </div>
            </div>
          </Link>
        </div> */}

        {/* <div className="p-2 m-4">
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
                  <small className="text-warning">click to Know more</small>
                </div>
              </div>
            </div>
          </Link>
        </div> */}

        <div className="p-2 m-4 ">
          <Link
            to="/publish"
            className="about text-decoration-none text-primary "
          >
            <div className="row  card shadow-sm bg-dark  ">
              <div className="col-12 my-5  d-flex flex-column justify-content-center align-items-center  my-md-0 py-4 ">
                <i class="fas fa-pen fs-1 fw-bold"></i>

                <div className="my-5 my-md-2">
                  <h4 className="fw-bold">Share Experiences</h4>
                  <p className="px-2">
                    {' '}
                    Our clients and user are always sharing about their tour
                    experiences.{' '}
                  </p>
                  <small className="text-secondary fw-bold">
                    click to Know more
                  </small>
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
