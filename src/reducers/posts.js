import { updateIn } from "timm";
import postsData from "../data/posts";

const initialState = postsData;

const posts = (state = initialState, { type, index }) => {
  switch (type) {
    case "INCREMENT_LIKES":
      const post = state.findIndex(item => item.code === index);

      return updateIn(state, [post, "likes"], val => val + 1);
    default:
      return state;
  }
};

export default posts;
