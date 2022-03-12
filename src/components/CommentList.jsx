import { useState, useEffect } from "react";
import * as api from "../api";
import CommentCard from "./CommentCard";

const CommentList = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    api.fetchCommentsById(article_id).then((commentList) => {
      setComments(commentList);
    });
  }, [article_id]);

  return (
    <div className="commentList">
      {show ? <CommentCard comments={comments} /> : null}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide comments" : "Show comments"}
      </button>
    </div>
  );
};

export default CommentList;
