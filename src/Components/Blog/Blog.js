import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../lotties/blog.json';
import useMediaQuery from '../Hooks/useMediaQuery';
import './Blog.css';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const isTablet = useMediaQuery('(min-width: 656px)');
  const isDesktop = useMediaQuery('(min-width: 900px)');
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  useEffect(() => {
    fetch('https://guarded-scrubland-87252.herokuapp.com/blogs')
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  console.log(blogs);
  return (
    <div>
      <div className="blog-container ">
        <div className="blog">
          <div className="row d-flex  align-items-center justify-content-center">
            <div className="col-md-7 p-5">
              <div className=" pe-none">
                <Lottie
                  options={defaultOptions}
                  isClickToPauseDisabled={true}
                  width={isDesktop ? 500 : isTablet ? 400 : 300}
                />
              </div>
            </div>
            <div className="col-md-5 p-5 ">
              <p>
                Write a new blog and share your tour experience. Let others know
                about our beautiful bangladesh.
              </p>
              <Link to="/publish" className="">
                <button className="blogBtn">Add a new blog</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="allBlogs d-flex flex-column justify-content-center align-items-center mt-5 ">
        <div className="w-50 ">
          <h3>See All Blogs</h3>
          <p>
            See what others share. Know about the attractive tourist spots of
            Bangladesh.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center ">
          {blogs.map((blog) => (
            <div class="card m-1" style={{ width: '18rem' }}>
              <img src={blog.image} class="card-img-top mt-2" alt="..." />
              <div class="card-body blogText">
                <h4 class="card-text">{blog.title}</h4>

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
      </div>
    </div>
  );
};

export default Blog;
