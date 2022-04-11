import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const [blog, setBlog] = useState([]);
  const { blogId } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/details/${blogId}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  console.log(blog);
  return (
    <div className="container">
      <h3 className="m-5">{blog.title} </h3>

      <img className="float-md-start m-3" src={blog.image} alt="" />
      <div className="d-flex justift-content-between align-items-center mt-5">
        <h4 className="me-auto">Publish date: {blog.publishDate}</h4>
        <h4> Author Name: {blog.author}</h4>
      </div>
      <p
        className="text-start my-3 "
        dangerouslySetInnerHTML={{ __html: blog.body }}
      />
    </div>
  );
};

export default BlogDetails;
