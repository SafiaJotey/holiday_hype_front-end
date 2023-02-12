import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch('https://holiday-hype-back-end.onrender.com/api/v1/blog/')
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, []);
  return (
    <div className="my-2 p-3 country" id="packages">
      <div className="container">
        <h2 className="text-primary">
          Know Beautiful<span className="text-secondary">Bangladesh</span>
        </h2>

        <p>
          Share your tour experience with us. Our goal is to represent beautiful
          places of bangladesh tothe world.Let's work together
        </p>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        {' '}
        <div className="row d-flex justify-content-center align-items-center my-3 ">
          {blogs.map((blog) => (
            <div
              className="p-2  rounded border border-1 border-line m-1 "
              style={{ width: '18rem' }}
            >
              <img src={blog.image} class="card-img-top mt-2" alt="..." />
              <div class="card-body ">
                <h4 class="card-text fs-6 fw-bold text-primary">
                  {blog.title}
                </h4>

                <hr />
                <div className=" row d-flex justift-content-between align-items-center ">
                  <div className="col-8 d-flex justift-content-between align-items-center ">
                    <small className="fs-7 ">{blog.publishDate}</small> &nbsp;
                    <small className="fs-7 "> by {blog.author}</small>
                  </div>
                  <div className="col-4">
                    <small className="pe-auto">
                      <Link
                        className="blogLink pe-auto fs-7 fw-bold text-secondary  "
                        to={`/details/${blog._id}`}
                      >
                        Read more
                      </Link>
                    </small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="services"></div>
    </div>
  );
};

export default AllBlogs;
