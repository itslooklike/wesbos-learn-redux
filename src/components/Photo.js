import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'react-emotion';

import Button from 'antd/lib/button';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';

const Content = styled('div')`
  padding: 10px 16px;
`;

const Photo = props => {
  return (
    <Link to={`/view/${props.code}`}>
      <Card style={{ width: 240 }} bodyStyle={{ padding: 0 }}>
        <div>
          <img alt="example" width="100%" src={props.display_src} />
        </div>
        <Content>
          <h3>{props.caption}</h3>
          <p>
            <Button
              onClick={evt => {
                evt.preventDefault();
                props.increment(props.code);
              }}
            >
              <Icon type="heart" />&nbsp;{props.likes}
            </Button>

            <Button onClick={evt => {}}>
              <Icon type="message" />&nbsp;{props.comments[props.code]
                ? props.comments[props.code].length
                : '0'}
            </Button>
          </p>
        </Content>
      </Card>
    </Link>
  );
};

export default Photo;
