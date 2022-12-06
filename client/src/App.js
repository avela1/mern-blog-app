import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";

//Components
import Navbar from "./components/Navbar";
//pages
import Article from "./pages/Article";
import ArticleList from "./pages/ArticleList";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="max-w-screen-md mx-auto pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles/:name" element={<Article />} />
          <Route path="/articles-list" element={<ArticleList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
