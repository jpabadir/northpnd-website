import "./App.css";
import { useState } from "react";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import "./hamburgers.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import LocalNavbar from "./components/LocalNavbar/LocalNavbar";
import Articles from "./components/Articles/Articles";
import Blog from "./components/Blog/Blog";
import blogsData from "./blogs/blogs-headers.json";
import { linkify } from "./helpers";

function App() {
  const [scrollGoal, setScrollGoal] = useState("");
  function updateScrollPath(path) {
    setScrollGoal(path);
  }

  return (
    <div>
      <Router>
        <LocalNavbar scrollHandler={updateScrollPath} />
        <div className="CentralContent">
          <Routes>
            <Route path="/" element={<Main scrollGoal={scrollGoal} />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="articles" element={<Blog />} />
              {blogsData.map((blog) => (
                <Route
                  key={blog.title}
                  path={`articles/${linkify(blog.title)}`}
                  element={<Articles blog={blog} />}
                />
              ))}
          </Routes>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "#212129",
          }}
        >
          <div
            className="element"
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
