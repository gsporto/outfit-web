import React from 'react';
import {
  Switch,
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

export function Route({ isPrivate = false, component: Component, ...rest }:RouteProps) {
  const { user } = useAuth();
  return (
    <Switch>
      <ReactDOMRoute
        {...rest}
        render={({ location }) => (isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        ))}
      />
    </Switch>
  );
}
