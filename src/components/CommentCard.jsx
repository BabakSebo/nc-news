import React from "react";

const CommentCard = ({ comments }) => {
  return (
    <div>
      {comments.map((comment) => {
        return (
          <div className="commentCard" key={comment.comment_id}>
            <h3 className="authorCC">{comment.author}</h3>
            <h2 className="bodyCC">{comment.body}</h2>
            <h3 className="votesCC">votes: {comment.votes}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default CommentCard;
