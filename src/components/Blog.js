import React from "react";
import BlogData from "./BlogData";
import BlogCard from "./BlogCard";

const Blog = (props) => {
  return (
    <div className="container" style={{marginTop: "4rem"}}>
      <div className="row">
        <BlogCard blogData={BlogData} />
      </div>
    </div>
  );
};

export default Blog;
