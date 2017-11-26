import React from 'react';
import Photo from './Photo';

const PhotoGrid = props => {
  return (
    <div>
      <h1>PhotoGrid</h1>
      <div>{props.posts.map((item, index) => <Photo key={index} {...item} />)}</div>
    </div>
  );
};

export default PhotoGrid;
