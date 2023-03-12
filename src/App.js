import "./App.css";
import { useRef, useState } from "react";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import "./hamburgers.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
import Main from "./components/Main/Main";
import LocalNavbar from "./components/LocalNavbar/LocalNavbar";
import Article from "./components/Article/Article";
import Blog from "./components/Blog/Blog";
import Proximy from "./components/Client Website/Proximy/Proximy";
import Midstride from "./components/Client Website/Midstride/Midstride";
import Tension from "./components/Client Website/Tension/Tension";
import blogsData from "./blogs/blogs-headers.json";
import { linkify } from "./helpers";

function App() {
  const [scrollGoal, setScrollGoal] = useState("");
  const mainRef = useRef();

  function updateScrollPath(path) {
    if (window.location.pathname !== "/expertise" && window.location.pathname !== "/articles") {
      mainRef.current.scrollTo(path);
    } else {
      setScrollGoal(path);
    }
  }

  return (
    <div>
      <Router>
        <LocalNavbar scrollHandler={updateScrollPath} />
        <div className="CentralContent">
          <Routes>
            <Route path="/" element={<Main ref={mainRef} scrollGoal={scrollGoal} />} />
            <Route path="expertise" element={<Expertise />} />
            <Route path="clients" element={<div className="StandalonePageParent"><Outlet /></div>}>
              <Route path="proximy" element={<Proximy />} />
              <Route path="midstride" element={<Midstride />} />
              <Route path="tension" element={<Tension />} />
            </Route>
            <Route path="articles" element={<Blog />} />
            {blogsData.map((blog) => (
              <Route
                key={blog.title}
                path={`articles/${linkify(blog.title)}`}
                element={<Article blog={blog} />}
              />
            ))}
          </Routes>
        </div>
        <div
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            backgroundColor: "black",
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
