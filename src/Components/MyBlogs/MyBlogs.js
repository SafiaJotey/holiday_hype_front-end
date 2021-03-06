import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from './../Hooks/useAuth';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://guarded-scrubland-87252.herokuapp.com/myBlog/${user.email}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
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
            <div class="card" style={{ width: '18rem' }}>
              <img src={blog.image} class="card-img-top mt-2" alt="..." />
              <div class="card-body blogText">
                <h4 class="card-text">{blog.title}</h4>
                <small className="smallText text-Success">
                  Status: {blog.status}
                </small>
                <hr />

                <div className=" row d-flex justift-content-between align-items-center">
                  <div className="col-7 d-flex justift-content-between align-items-center">
                    <small className="smallText">{blog.publishDate}</small>
                    <small className="smallText"> by {blog.author}</small>
                  </div>
                  <div className="col-5">
                    <Link className="blogLink" to={`/details/${blog._id}`}>
                      Read more..
                    </Link>
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
