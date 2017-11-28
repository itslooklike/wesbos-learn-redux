import React from "react";
import styled from "react-emotion";
import { Card, Button } from "antd";
import Photo from "./Photo";

const Content = styled("div")`
  display: flex;
  flex-wrap: wrap;
`;

const List = styled("div")`
  margin-bottom: 20px;
  margin-left: 20px;
`;

const CardWrap = styled("div")`margin-bottom: 20px;`;

const Single = props => {
  const { postId } = props.routeProps.match.params;
  const post = props.posts.find(item => item.code === postId);

  let userInput = null;
  let commentInput = null;

  return (
    <Content>
      <div>
        <Photo {...post} {...props} />
        <div>
          <input
            type="text"
            ref={input => {
              userInput = input;
            }}
          />
          <input
            type="text"
            ref={input => {
              commentInput = input;
            }}
          />
          <div>
            <Button
              onClick={() => {
                if ((userInput.value != "") & (commentInput.value != "")) {
                  props.addComment(postId, userInput.value, commentInput.value);
                  userInput.value = "";
                  commentInput.value = "";
                }
              }}
            >
              add
            </Button>
          </div>
        </div>
      </div>

      {props.comments[postId] && (
        <List>
          {props.comments[postId].map((item, idx) => (
            <CardWrap key={idx}>
              <Card title={item.user} style={{ width: 300 }}>
                <p>
                  {item.text}
                  <span
                    onClick={() => {
                      props.removeComment(postId, idx);
                    }}
                  >
                    {" "}
                    delete
                  </span>
                </p>
              </Card>
            </CardWrap>
          ))}
        </List>
      )}
    </Content>
  );
};

export default Single;
