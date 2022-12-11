import React from 'react';
import { Link } from 'react-router-dom';

const VisitBlog = () => {
  return (
    <div className="background bg-attachment my-5">
      <div className="overlay">
        <div className="container ">
          <div className="text-white bg-attachment p-5">
            <h3>
              Share Your{' '}
              <span className="text-secondary fw-bold">Experiences</span>
            </h3>

            <p>
              {' '}
              Are you a traveler, love to visit Beautiful places of Bangladesh?
              Share your experiences with us and win attractive prizes. Write
              beatiful blogs share tips for new travelers.Also See what others
              share, get tips from their experiences and choose your next
              destinstion.
            </p>
            <Link to="/addBlog">
              <button className=" bg-secondary pe-auto text-white fs-6 px-5 py-2 pe-auto rounded border border-secondary border-start-3">
                Let's Start
              </button>
            </Link>
          </div>
        </div>{' '}
      </div>
    </div>
  );
};

export default VisitBlog;
