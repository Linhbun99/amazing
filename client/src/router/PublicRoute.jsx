import React from 'react';
import { Route } from 'react-router-dom';


export default function PublicRoute({ Component, restricted, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        // accessToken && restricted ? (
        //   <Redirect to={routes.HOME} />
        // ) : (
        <Component {...props} />
        // )
      }
    />
  );
}
