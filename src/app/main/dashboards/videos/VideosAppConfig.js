import { lazy } from 'react';

const VideosApp = lazy(() => import('./VideosApp'));

const VideosAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/videos',
      element: <VideosApp />,
    },
  ],
};

export default VideosAppConfig;
