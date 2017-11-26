import React from 'react';
import { Link } from 'react-router-dom';

const Photo = props => {
  return (
    <Link to={`/view/${props.code}`}>
      <img src={props.display_src} width="100" height="100" />
      <h1>{props.caption}</h1>
      <div>
        <button
          type="button"
          onClick={evt => {
            evt.preventDefault();
            props.increment(props.code);
          }}
        >
          likes: {props.likes}
        </button>
      </div>
    </Link>
  );
};

export default Photo;
