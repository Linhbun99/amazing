import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import routes from '../constants/route';

import Footer from '../layout/footer';
import Header from '../layout/header';
import appRoutes from './appRoutes';

export default () => (
  <BrowserRouter>
    <Header />
    <Switch>
      {appRoutes.map(
        ({
          path,
          exact = true,
          component: Component,
          isPrivate = false,
          ...rest
        }) => {
          if (!isPrivate) {
            return (
              <PublicRoute
                key={path}
                exact={exact}
                path={path}
                component={Component}
                {...rest}
              />
            );
          }
          return (
            <PrivateRoute
              key={path}
              exact={exact}
              path={path}
              component={Component}
              {...rest}
            />
          );
        },
      )}
      <Redirect to={routes.HOME} />
    </Switch>
    <Footer />
  </BrowserRouter>
);
