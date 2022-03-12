import { useState, useEffect } from "react";
import * as api from "../api";
import { useParams } from "react-router-dom";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";
import VoteButton from "./VoteButton";

export const ArticleSingle = () => {
  const [vote, setVote] = useState(0);
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
      <h4>votes: {singleArticle.votes + vote} </h4>
      <VoteButton
        setVote={setVote}
        votes={singleArticle.votes}
        article_id={article_id}
      />
      <h3>
        comments:
        {singleArticle.comment_count}
      </h3>
      <h4>topic: {singleArticle.topic}</h4>
      <CommentList article_id={article_id} />
    </div>
  );
};
