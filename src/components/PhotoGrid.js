import React from 'react';
import Photo from './Photo';

const PhotoGrid = props => {
  const { posts, ...rest } = props;
  return (
    <div>
      <h1>PhotoGrid</h1>
      <div>{posts.map((item, index) => <Photo key={index} {...item} {...rest} />)}</div>
    </div>
  );
};

export default PhotoGrid;
