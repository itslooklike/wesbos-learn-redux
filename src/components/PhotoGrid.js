import React from "react";
import styled from "react-emotion";

import Photo from "./Photo";

const Container = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 5px;
  }
`;

const PhotoGrid = props => {
  const { posts, ...rest } = props;
  return (
    <div>
      <h1>PhotoGrid</h1>
      <Container>
        {posts.map((item, index) => <Photo key={index} {...item} {...rest} />)}
      </Container>
    </div>
  );
};

export default PhotoGrid;
