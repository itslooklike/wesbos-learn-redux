import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import { increment } from './actions/actionCreators';

const App = props => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
      </h1>

      <Route
        exact
        path="/"
        render={routeProps => (
          <PhotoGrid routeProps={routeProps} {...props.state} increment={props.increment} />
        )}
      />

      <Route
        path="/view/:postId"
        render={routeProps => <Single routeProps={routeProps} {...props.state} />}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => ({
  increment: index => {
    dispatch(increment(index));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
