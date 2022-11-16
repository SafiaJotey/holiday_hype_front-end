import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import animationData from '../../assets/lotties/blog.json';
import useMediaQuery from '../../Hooks/useMediaQuery';

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
    <div className=" ">
      <div className="d-flex  align-items-center justify-content-center container ">
        <div className=" bg-dark my-5 shadow">
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
              <Link to="/publish">
                <button className="mt-3 bg-primary  px-3 py-2 rounded border border-secondary border-start-3 text-white pe-auto">
                  Add a new blog
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="allBlogs d-flex flex-column justify-content-center align-items-center mt-5 ">
        <div className="w-50 ">
          <h2 className="text-primary fw-bold">
            See All <span className="text-secondary fw-bold">Blogs</span>
          </h2>
          <p>
            See what others share. Know about the attractive tourist spots of
            Bangladesh.
          </p>
        </div>
        <div className="row d-flex justify-content-center align-items-center my-3 ">
          {blogs.map((blog) => (
            <div
              className="p-2  rounded border border-1 border-line m-1"
              style={{ width: '18rem' }}
            >
              <img src={blog.image} class="card-img-top mt-2" alt="..." />
              <div class="card-body ">
                <h4 class="card-text fs-5 fw-bold text-primary">
                  {blog.title}
                </h4>

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
      </div>
    </div>
  );
};

export default Blog;
