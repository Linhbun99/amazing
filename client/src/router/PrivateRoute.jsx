import React from 'react';
import { Redirect, Route } from 'react-router-dom';

import routes from '../constants/route';

export default function PrivateRoute({ Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        accessToken ? <Component {...props} /> : <Redirect to={routes.LOGIN} />
      }
    />
  );
}
