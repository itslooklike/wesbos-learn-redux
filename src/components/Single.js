import React from 'react';

const Single = props => {
  const { postId } = props.routeProps.match.params;
  const post = props.posts.find(item => item.code === postId);

  return (
    <div>
      <img width="200" height="200" src={post.display_src} />
      <h1>{post.caption}</h1>
      <div>{post.likes}</div>
    </div>
  );
};

export default Single;
