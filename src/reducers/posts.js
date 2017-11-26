import postsData from '../data/posts';

const initialState = postsData;

const posts = (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default posts;
