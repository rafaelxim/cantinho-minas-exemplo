import { Route, Routes } from "react-router-dom";
import "./App.css";
import "./styles/all.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import "./styles/custom.css";
import "./styles/media-query.css";
import "../node_modules/magnific-popup/dist/jquery.magnific-popup.js";
import "magnific-popup/dist/magnific-popup.css";
import Home from "./components/Home.tsx";
import Chef from "./components/chef/Chef.jsx";
import Blog from "./components/blog/Blog.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
