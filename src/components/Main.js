import React from 'react';
import { Link, Route } from 'react-router-dom';

import Single from './Single';
import PhotoGrid from './PhotoGrid';

const Main = props => {
  return (
    <div>
      <h1>
        <Link to="/">Reduxstagram</Link>
        <Link to="/single">Single</Link>
        <Link to="/photo-grid">PhotoGrid</Link>
      </h1>
      <Route path="/single" component={Single} />
      <Route path="/photo-grid" component={PhotoGrid} />
    </div>
  );
};

export default Main;
