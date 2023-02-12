import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    fetch(`https://holiday-hype-back-end.onrender.com/api/v1/blog/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data[0]));
  }, [blogId]);

  return (
    <div className="container">
      <h3 className="m-5 text-primary fw-bold text-decoration-underline">
        {blog.title}{' '}
      </h3>

      <img
        className="w-50 p-2 img-fluid  float-md-start m-3 border border-1 border-line rounded bg-dark shadow"
        src={blog.image}
        alt=""
      />
      <div className="d-flex justift-content-between align-items-center mt-4 ">
        <h5 className="mt-4 text-secondary fw-bold">
          Publish date: {blog.publishDate}
        </h5>{' '}
        &nbsp; &nbsp;
        <h5 className="mt-4 text-primary fw-bold">
          {' '}
          Author Name: {blog.author}
        </h5>
      </div>

      <p
        className="text-start   p-2 text-base"
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

export default BlogDetails;
