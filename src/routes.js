import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { scrollBefore } from './utils/routerInterceptor';

import App from './App';
import Home from './containers/Home';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} onEnter={scrollBefore} />
  </Route>
);
