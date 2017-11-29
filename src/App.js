import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import 'antd/dist/antd.css';

import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import * as actionCreators from './actions/actionCreators';

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
        render={routeProps => (
          <Single
            routeProps={routeProps}
            {...props.state}
            increment={props.increment}
            addComment={props.addComment}
            removeComment={props.removeComment}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  state,
});

const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
