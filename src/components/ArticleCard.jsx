import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <h3>{article.author}</h3>
      {/* <h3>{article.body}</h3> */}
      <h4>
        votes:{article.votes}
        -----
        <Link to={`/article/${article.article_id}/comments`}>
          comments:{article.comment_count}
        </Link>
        -----
        <Link to={`/topics/${article.topic}`}> {article.topic}</Link>
      </h4>
    </div>
  );
};

export default ArticleCard;
