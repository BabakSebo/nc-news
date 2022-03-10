import React from "react";
import { Link } from "react-router-dom";
import VoteButton from "./VoteButton";

const ArticleCard = ({ article }) => {
  return (
    <div className="articleCard">
      <Link to={`/article/${article.article_id}`}>
        <h2>{article.title}</h2>
      </Link>
      <h3>{article.author}</h3>
      <h4>
        <Link to={`/article/${article.article_id}/comments`}>
          comments:{article.comment_count}
        </Link>
        <></>
        <Link to={`/topics/${article.topic}`}> {article.topic}</Link>
        <VoteButton votes={article.votes} article_id={article.article_id} />
      </h4>
    </div>
  );
};

export default ArticleCard;
