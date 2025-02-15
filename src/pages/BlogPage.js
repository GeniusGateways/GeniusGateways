import React, { useEffect, useState } from "react";
import { fetchBlogs } from "../api/blogApi";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/blogPage.css"; // Import CSS

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const data = await fetchBlogs();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <div className="container py-5">
      {/* Blog Header */}
      <div className="blog-header text-center">
        <h2 className="blog-title">Blog</h2>
      </div>

      {/* Blog Grid */}
      <div className="row justify-content-center">
        {blogs.map((blog, index) => (
          <div key={blog._id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
            <div className="blog-card">
              {/* Blog Image */}
              <div className="blog-image">
                <img src={blog.imageUrl} alt={blog.title} />
              </div>

              {/* Blog Content */}
              <div className="blog-content text-center">
                <h6 className="blog-title">{blog.title}</h6>
                <p className="blog-description">
                  {blog.description.length > 80
                    ? `${blog.description.substring(0, 80)}...`
                    : blog.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;