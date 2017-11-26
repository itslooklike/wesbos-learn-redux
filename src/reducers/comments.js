import commentsData from '../data/comments';

const initialState = commentsData;

const comments = (state = initialState, { type, payload }) => {
  switch (type) {
    case '':
      return state;
    default:
      return state;
  }
};

export default comments;
