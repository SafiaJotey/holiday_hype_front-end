import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Images/logo.png';

// import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="bg-primary mt-5 p-5 text-white text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className=" text-center">
                <div>
                  <img className="w-75" src={logo} alt="" />
                </div>

                <p className="mt-4 ">
                  <small>
                    * provides a wide range of integrated travel and tourism
                    services making it one of the leading travel agents in
                    Jordan and neighboring countries. Our expertise, talent,
                    hospitality, flexibility, and proficient are united in
                    harmony to match your desires and fit all your travel and
                    enjoyment needs. Our services are for individuals and
                    groups, and for all budgets.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Holiday Hype©By Safia Ahmed.</small>
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f text-white p-2"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-twitter text-white p-2"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-instagram text-white p-2"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div>
                <ul className="my-5 d-flex flex-column">
                  <li className="list-unstyled my-2 pe-auto">
                    <Nav.Link as={Link} to="/home">
                      {' '}
                      Home
                    </Nav.Link>
                  </li>

                  <li className="list-unstyled my-2 pe-auto">
                    {' '}
                    <Nav.Link as={Link} to="/addBlog">
                      {' '}
                      Blogs
                    </Nav.Link>
                  </li>
                  <li className="list-unstyled my-2 pe-auto">
                    {' '}
                    <Nav.Link as={Link} to="/login ">
                      {' '}
                      Login
                    </Nav.Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div>
                <h3>Sign up for the newsletter</h3>
                <input
                  className="p-2  my-3 w-75 text-start border-none"
                  type="text"
                  placeholder="Enter  your Email"
                />

                <div className="map d-flex align-items-center justify-content-center">
                  <div>
                    <p>
                      Holding No. 100 (1st Floor), Bir Uttam A K Khandaker Road,
                      <br /> Mohakhali C/A, Dhaka-1212.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
