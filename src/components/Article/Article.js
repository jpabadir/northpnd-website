import React, { useState, useLayoutEffect } from "react";
import "./Article.css";
import { linkify } from "../../helpers";

export default function Article(props) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    function updateIsMobile() {
      setIsMobile(document.documentElement.clientWidth < 992);
    }
    window.addEventListener('resize', updateIsMobile);
    updateIsMobile();
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  const ComponentToRender = require("../../blogs/" +
    linkify(props.blog.title)).default;

  return (
    <div className="StandalonePageParent">
      <div className="Article">
        <div style={{ maxWidth: "1100px" }}>
          <div className="text-left mb-4">
            <h1>{props.blog.title}</h1>
            {/* <h4 className="Subtitle">{props.blog.subtitle}</h4> */}
            <div className="Date">
              {new Date(props.blog.publishDate).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="d-flex align-items-center">
              <img className="ProfilePicture" src={props.blog.profilePic} style={{ objectFit: 'cover' }} />
              <div className="Author">{props.blog.author}</div>
            </div>
          </div>
          <div className="d-flex align-items-center flex-column">
            <div className="ArticleImage">
              <img
                className="ArticleImage"
                src={props.blog.image}
                alt={props.blog.title}
              />
              <p className="ImageCaption">{props.blog.imageCaption}</p>
            </div>
          </div>
          {props.blog.isStaff &&
            (<div className={"d-flex pt-1 mb-4 " + (isMobile ? 'flex-column' : '')} style={{ maxWidth: '900px' }}>
              <div className={"d-flex align-items-center justify-content-center " + (isMobile ? 'mb-2' : '')}>
                <div className="pill darkpill" style={{ color: 'red', borderColor: 'red' }}>
                  Internal
                </div>
              </div>
              <div style={{ opacity: 0.7, paddingLeft: '10px' }}>
                This is an internal article, intended to provide North P&D's developers with guidance about company processes. If someone outside of our company happens to find value in this article, that's great, but that's not its primary purpose.
              </div>
            </div>
            )}
          <div className="BlogContent">
            <ComponentToRender />
          </div>
        </div>
      </div>
    </div>
  );
}
