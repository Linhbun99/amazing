import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import routes from '../constants/route';

export default function PublicRoute({ Component, restricted, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken && restricted ? (
          <Redirect to={routes.HOME} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}
