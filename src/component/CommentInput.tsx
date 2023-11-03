import { comment, setComment } from "../App";

export default function () {
  return (
    <>
      <div>Enter your comment :</div>
      <input
        type="text"
        onChange={(e) => setComment(e.target.value)}
        value={comment()}
      ></input>
    </>
  );
}
