import * as api from "../api";

const VoteButton = ({ article_id, setVote }) => {
  const incrementVote = () => {
    setVote((preVote) => preVote + 1);
    api.patchArticlesById(article_id, 1).catch(() => {
      setVote((preVote) => preVote - 1);
    });
  };

  const decrementVote = () => {
    setVote((preVote) => preVote - 1);
    api.patchArticlesById(article_id, -1).catch(() => {
      setVote((preVote) => preVote + 1);
    });
  };

  return (
    <div>
      <button onClick={incrementVote}>👍</button>
      <></>
      <button onClick={decrementVote}>👎</button>
    </div>
  );
};

export default VoteButton;
