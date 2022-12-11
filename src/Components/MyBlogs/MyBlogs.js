import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(
      `https://holiday-hype-back-end.onrender.com/api/v1/blog/myBlog/${user.email}`
    )
      .then((res) => res.json())
      .then((data) => setBlogs(data.data));
  }, [user.email, blogs]);
  return (
    <div className="container">
      <h1 className="order my-5">
        Your <span className="highlight">Blogs</span>{' '}
      </h1>
      {blogs.length === 0 ? (
        <div className="d-flex justify-content-center">
          <h5>You haven't placed any order yet!</h5>
        </div>
      ) : (
        <div className="row ">
          {blogs.map((blog) => (
            <div
              className="p-2  rounded border border-1 border-line m-1"
              style={{ width: '18rem' }}
            >
              <img src={blog.image} class="card-img-top mt-2" alt="..." />
              <div class="card-body blogText">
                <h4 class="card-text fs-5 fw-bold text-primary">
                  {blog.title}
                </h4>
                <small className="smallText text-Success">
                  Status: {blog.status}
                </small>
                <hr />

                <div className=" row d-flex justift-content-between align-items-center">
                  <div className="col-8 d-flex justift-content-between align-items-center">
                    <small className="smallText ">{blog.publishDate}</small>{' '}
                    &nbsp;
                    <small className="smallText "> by {blog.author}</small>
                  </div>
                  <div className="col-4">
                    <small>
                      <Link
                        className="blogLink pe-auto fs-7 fw-bold text-secondary "
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
      )}
    </div>
  );
};

export default MyBlogs;
