import "./App.css";
import { useRef, useState, lazy, Suspense } from "react";
import Expertise from "./components/Expertise/Expertise";
import Footer from "./components/Footer/Footer";
import "./hamburgers.css";
import { BrowserRouter as Router, Outlet, Route, Routes } from "react-router-dom";
// import Main from "./components/Main/Main";
import LocalNavbar from "./components/LocalNavbar/LocalNavbar";
// import Article from "./components/Article/Article";
// import Blog from "./components/Blog/Blog";
// import Proximy from "./components/Client Website/Proximy/Proximy";
// import Midstride from "./components/Client Website/Midstride/Midstride";
// import Tension from "./components/Client Website/Tension/Tension";
// import Minebright from "./components/Client Website/Minebright/Minebright";
import blogsData from "./blogs/blogs-headers.json";
import { linkify } from "./helpers";
import Spinner from "react-bootstrap/Spinner";

const Main = lazy(() => import("./components/Main/Main"));
const Article = lazy(() => import("./components/Article/Article"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Proximy = lazy(() => import("./components/Client Website/Proximy/Proximy"));
const Midstride = lazy(() => import("./components/Client Website/Midstride/Midstride"));
const Tension = lazy(() => import("./components/Client Website/Tension/Tension"));
const Minebright = lazy(() => import("./components/Client Website/Minebright/Minebright"));

function App() {
  const [scrollGoal, setScrollGoal] = useState("");
  const mainRef = useRef();

  function updateScrollPath(path) {
    if (window.location.pathname !== "/expertise" && !window.location.pathname.includes("resources")) {
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
          <Suspense fallback={<div className="Overlay"><div className="d-flex justify-content-center h-100 align-items-center"><Spinner animation="border" role="status" /></div></div>}>
            <Routes>
              <Route path="/" element={<Main ref={mainRef} scrollGoal={scrollGoal} />} />
              <Route path="expertise" element={<Expertise />} />
              <Route path="clients" element={<div className="StandalonePageParent" style={{ fontSize: '18px' }}><Outlet /></div>}>
                <Route path="proximy" element={<Proximy />} />
                <Route path="midstride" element={<Midstride />} />
                <Route path="tension" element={<Tension />} />
                <Route path="minebright" element={<Minebright />} />
              </Route>
              <Route path="resources" element={<Blog />} />
              {blogsData.map((blog) => (
                <Route
                  key={blog.title}
                  path={`resources/${linkify(blog.title)}`}
                  element={<Article blog={blog} />}
                />
              ))}
            </Routes>
          </Suspense>
        </div >
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
      </Router >
    </div >
  );
}

export default App;
