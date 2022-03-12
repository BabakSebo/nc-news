import "./App.css";
import { Header } from "./components/Header";
import ArticleList from "./components/ArticleList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ArticleSingle } from "./components/ArticleSingle";
import CommentList from "./components/CommentList";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <NavBar />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/topics/:topic" element={<ArticleList />} />
          <Route path="/article/:article_id" element={<ArticleSingle />} />
          <Route
            path="/article/:article_id/comments"
            element={<CommentList />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
