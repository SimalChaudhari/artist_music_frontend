import { lazy } from 'react';

const OrdersApp = lazy(() => import('./OrdersApp'));

const OrdersAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/orders',
      element: <OrdersApp />,
    },
  ],
};

export default OrdersAppConfig;
