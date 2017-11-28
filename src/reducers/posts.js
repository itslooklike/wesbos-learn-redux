import { merge } from 'timm';
import postsData from "../data/posts";

const initialState = postsData;

const posts = (state = initialState, { type, index }) => {
  switch (type) {
    case "INCREMENT_LIKES":
      const post = state.findIndex(item => item.code === index);
      const newState = [...state];
      newState[post].likes += 1;
      return newState;
    default:
      return state;
  }
};

export default posts;
