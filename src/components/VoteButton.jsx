import { useState } from "react";
import * as api from "../api";

const VoteButton = ({ votes, article_id }) => {
  const [vote, setVote] = useState(votes);

  const incrementVote = () => {
    setVote((preVote) => preVote + 1);
    api.patchArticlesById(article_id, 1).catch(() => {
      setVote((preVote) => preVote - 1);
    });
  };

  const decrementVote = () => {
    if (vote > 0) {
      setVote((preVote) => preVote - 1);
      api.patchArticlesById(article_id, -1).catch(() => {
        setVote((preVote) => preVote + 1);
      });
    }
  };

  return (
    <div>
      <button onClick={incrementVote}>👍</button>
      <span>{vote}</span>
      <button onClick={decrementVote}>👎</button>
    </div>
  );
};

export default VoteButton;
