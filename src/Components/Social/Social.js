import React from 'react';

const Social = () => {
  return (
    <div className="container connected my-5">
      <h5 className="text-gray">Stay Connected</h5>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <a href="https://www.facebook.com/" className="text-primary fs-1 p-2">
            <i className="fab fa-facebook-f"></i>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="text-primary fs-1 p-2">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/" className="text-primary fs-1 p-2">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Social;
