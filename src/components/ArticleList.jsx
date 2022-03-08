import * as api from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleCard from "./ArticleCard";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    api.fetchArticles(topic).then((articlesNc) => {
      setArticles(articlesNc);
      setIsLoading(false);
    });
  }, [topic]);

  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="articleList">
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
      )}
    </>
  );
};

export default ArticleList;
