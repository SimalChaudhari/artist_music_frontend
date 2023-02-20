import { lazy } from 'react';

const RatingsApp = lazy(() => import('./RatingsApp'));

const RatingsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/ratings',
      element: <RatingsApp />,
    },
  ],
};

export default RatingsAppConfig;
