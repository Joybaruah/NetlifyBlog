import React from "react";

const BlogCard = ({ blogData }) => {
  console.log(blogData);
  return (
    <>
      {blogData.map((curElem) => {
        return (
          <div className="col-md-6 col-lg-4" 
          >
            <div key={curElem.id}>
              <div className="card-body border-primary">
                <h2
                  className="card-title"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: "500",
                  }}
                >
                  {curElem.day}
                </h2>
                <p className="card-text">{curElem.description}</p>
              </div>
            </div>
          </div>
          
        );
      })}
    </>
  );
};

export default BlogCard;
