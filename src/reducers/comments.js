import { removeAt } from "timm";
import commentsData from "../data/comments";

const initialState = commentsData;

const comments = (
  state = initialState,
  { type, postId, author, comment, i }
) => {
  switch (type) {
    case "ADD_COMMENT":
      const newState = { ...state };
      newState[postId]
        ? newState[postId].push({ text: comment, user: author })
        : (newState[postId] = [].concat({ text: comment, user: author }));
      return newState;
    case "REMOVE_COMMENT":
      const newStateR = { ...state };
      newStateR[postId].splice(i, 1);
      return newStateR;
    default:
      return state;
  }
};

export default comments;
