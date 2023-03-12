import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import blogsData from "../../blogs/blogs-headers.json";
import "./Blog.css";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })

  function toggleScaleThumbnail(event) {
    event.currentTarget
      .getElementsByTagName("img")[0]
      .classList.toggle("BlogThumbnailScaled");
  }

  return (
    <div className="StandalonePageParent">
      <div className="Blog">
        {blogsData.filter(blog => !blog.hide).map((blog) => (
          <div
            key={blog.title}
            onMouseEnter={toggleScaleThumbnail}
            onMouseLeave={toggleScaleThumbnail}
          >
            <NavLink
              className="container BlogLink"
              to={blog.title.replace(/\s+/g, "-").toLowerCase()}
              style={{ textDecoration: "none" }}
            >
              <div className="row justify-content-center">
                <div className="col-lg-5 text-center">
                  <div className="BlogThumbnailParent">
                    <img
                      className="BlogThumbnail"
                      src={blog.image}
                      alt={blog.title}
                    />
                  </div>
                </div>
                <div className="col-lg-5 d-flex align-items-center justify-content-center">
                  <div className="">
                    <div className="pill darkpill text-center" style={{ color: 'red', borderColor: 'red' }}>
                      Internal
                    </div>
                  </div>
                  <div style={{ fontSize: "20px", paddingLeft: '10px' }}>
                    <span className="animate-underline">{blog.title}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}
