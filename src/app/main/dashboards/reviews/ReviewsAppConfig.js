import { lazy } from 'react';

const ReviewsApp = lazy(() => import('./ReviewsApp'));

const ReviewsAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/reviews',
      element: <ReviewsApp />,
    },
  ],
};

export default ReviewsAppConfig;
