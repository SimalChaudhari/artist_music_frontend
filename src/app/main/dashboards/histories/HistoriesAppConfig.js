import { lazy } from 'react';

const HistoriesApp = lazy(() => import('./HistoriesApp'));

const HistoriesAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/histories',
      element: <HistoriesApp />,
    },
  ],
};

export default HistoriesAppConfig;
