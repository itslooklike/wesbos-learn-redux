import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

const App = props => {
  return (
    <div>
      {console.log(props)}
      <h1>
        <Link to="/">Reduxstagram</Link>
        <Link to="/view">222</Link>
      </h1>

      <Route
        exact
        path="/"
        render={routeProps => <PhotoGrid routeProps={routeProps} {...props.state} />}
      />

      <Route path="/view" component={Single} />
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

export default connect(stateToProps, disToProps)(App);
