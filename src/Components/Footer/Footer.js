import React from 'react';
import logo from '../../Images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-center">
                <div>
                  <img src={logo} alt="" />
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
                  <small>DreamTravel © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul className="my-5">
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">About</li>
                  <li className="footer-menu">Contact </li>
                  <li className="footer-menu">Blogs </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <input
                  className="footer-input my-5"
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
