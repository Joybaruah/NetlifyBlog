import React from "react";

const BlogCard = ({ blogData }) => {
  console.log(blogData);
  return (
    <>
      {blogData.map((curElem) => {
        return (
          <>
            <div className="col-md-6 col-lg-4">
              <div
                className="card my-2 "
                style={{
                  boxShadow:
                    "0px 14.7px 9.5px rgba(0, 0, 0, 0.055), 0px 117px 76px rgba(0, 0, 0, 0.11)",
                  fontFamily: "'karla', sans-serif",
                }}
                key={curElem.id}
              >
                <img
                  src={curElem.image}
                  class="card-img-top"
                  alt="Programming"
                />
                <div className="card-body">
                  <h2
                    className="card-title "
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
          </>
        );
      })}
    </>
  );
};

export default BlogCard;
