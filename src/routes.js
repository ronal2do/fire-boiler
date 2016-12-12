import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { scrollBefore } from './utils/routerInterceptor';

// Front
import App from './containers/front/app';

// Dashboard
import Dashboard from './containers/dashboard/dashboard';
import Signin from './containers/dashboard/auth/signin';
import Signout from './containers/dashboard/auth/signout';
import Signup from './containers/dashboard/auth/signup';
import Feature from './containers/dashboard/feature';
import RequireAuth from './containers/dashboard/auth/require_auth';
import Welcome from './containers/dashboard/welcome';

export default (
  <Router >
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} onLeave={scrollBefore} />
    </Route>
    <Route path="/dashboard" component={Dashboard}>
      <IndexRoute component={Welcome} />
      <Route path="/" component={RequireAuth(Feature)} />
    </Route>
    <Route path="signin" component={Signin} />
    <Route path="signout" component={Signout} />
    <Route path="signup" component={Signup} />
  </Router>
);
