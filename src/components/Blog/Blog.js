import { NavLink } from "react-router-dom";
import blogsData from "../../blogs/blogs-headers.json";
import "./Blog.css";

export default function Blog() {
  function toggleScaleThumbnail(event) {
    event.currentTarget
      .getElementsByTagName("img")[0]
      .classList.toggle("BlogThumbnailScaled");
  }

  return (
    <div className="Blog">
      {blogsData.map((blog) => (
        <div
          key={blog.title}
          onMouseEnter={toggleScaleThumbnail}
          onMouseLeave={toggleScaleThumbnail}
        >
          <NavLink
            className="container BlogLink"
            to={blog.title.replace(/\s+/g, "-").toLowerCase()}
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
                <div className="text-center" style={{ fontSize: "20px" }}>
                  {blog.title}
                </div>
              </div>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
}
