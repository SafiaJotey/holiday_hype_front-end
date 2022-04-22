import React from 'react';
import './Social.css';

const Social = () => {
  return (
    <div className="container connected mt-5">
      <h5>Stay Connected</h5>
      <div className="social">
        <div>
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
