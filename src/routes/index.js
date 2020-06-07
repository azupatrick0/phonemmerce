import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Loader from 'components/Loader';

const Home = lazy(() => import('pages/index'));

const Routes = () => (
  <BrowserRouter>
    <Suspense
      fallback={
          <Loader />
      }
    >
      <Switch>
        <Route path="/" exact component={(props) => <Home {...props} />} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;
