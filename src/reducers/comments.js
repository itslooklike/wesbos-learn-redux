import { removeAt, set, update, addLast } from "timm";
import commentsData from "../data/comments";

const initialState = commentsData;

const comments = (
  state = initialState,
  { type, postId, author, comment, i }
) => {
  switch (type) {
    case "ADD_COMMENT":
      const newComment = { text: comment, user: author };

      return update(
        state,
        postId,
        val => (val ? addLast(val, newComment) : addLast([], newComment))
      );
    case "REMOVE_COMMENT":
      return set(state, [postId], removeAt(state[postId], i));
    default:
      return state;
  }
};

export default comments;
