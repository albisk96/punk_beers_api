import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import { routes } from './RoutesList';
import Loader from '../common/Loader';

const Routes = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {routes.map((route, index) => (
        <Route
          path={route.path}
          component={route.component}
          exact={route.exact}
          key={index}
        />
      ))}
    </Switch>
  </Suspense>
);

export default Routes;
