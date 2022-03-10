import { useState, useEffect } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";

export const ArticleSingle = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const { article_id } = useParams();

  useEffect(() => {
    api.fetchArticlesById(article_id).then((singleArticleItem) => {
      setSingleArticle(singleArticleItem);
    });
  }, [article_id]);

  return (
    <div className="articleSingle">
      <h2>{singleArticle.title}</h2>
      <h4>{singleArticle.author}</h4>
      <h3>{singleArticle.body}</h3>
      <h4>
        votes: {singleArticle.votes} ---- comments:{" "}
        {singleArticle.comment_count}----{singleArticle.topic}
      </h4>
    </div>
  );
};
