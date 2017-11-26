import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

const Main = props => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      <Route
        exact
        path="/"
        render={routeProps => <PhotoGrid routeProps={routeProps} {...props.state} />}
      />

      <Route path="/view/:postId" component={Single} />
    </div>
  );
};

const stateToProps = state => ({
  state: state,
});

const disToProps = dis => ({
  test: () => {
    console.log(dis);
  },
});

export default connect(stateToProps, disToProps)(Main);
