import React from 'react';
import { Link } from 'react-router-dom';

const Photo = props => {
  return (
    <div>
      <h1>
        <Link to={`/view/${props.code}`}>Photo</Link>
      </h1>
    </div>
  );
};

export default Photo;
