import React from 'react';
import { Route, redirect } from 'react-router-dom';


const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        } else {
            redirect('/login')
        }
      }}
    />
  );
};

export default ProtectedRoute;
