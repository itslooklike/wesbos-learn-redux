import React from "react";
import styled from "react-emotion";
import { Button } from "antd";
import { Card } from "antd";

const Content = styled("div")`padding: 10px 16px;`;

const Single = props => {
  const { postId } = props.routeProps.match.params;
  const post = props.posts.find(item => item.code === postId);

  return (
    <div>
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div>
          <img alt="example" width="100%" src={post.display_src} />
        </div>
        <Content>
          <h3>{post.caption}</h3>
          <p>
            <Button
              type="button"
              onClick={evt => {
                evt.preventDefault();
                props.increment(post.code);
              }}
            >
              👉 {post.likes}
            </Button>
          </p>
        </Content>
      </Card>
    </div>
  );
};

export default Single;
