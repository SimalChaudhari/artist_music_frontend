import i18next from 'i18next';
import DocumentationNavigation from '../main/documentation/DocumentationNavigation';

import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import authRoles from '../auth/authRoles';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'dashboards',
    title: '',
    subtitle: '',
    type: 'group',
    icon: 'heroicons-outline:home',
    translate: 'DASHBOARDS',
    children: [
      {
        id: 'dashboards.dashboard',
        title: 'DashBoard',
        type: 'item',
        icon: 'heroicons-outline:view-boards',
        url: '/dashboards/dashboard',
      },
      {
        id: 'dashboards.orders',
        title: 'Orders',
        type: 'item',
        icon: 'material-outline:reorder',
        url: '/dashboards/orders',
      },
      {
        id: 'dashboards.histories',
        title: 'Histories',
        type: 'item',
        icon: 'material-outline:history',
        url: '/dashboards/histories',
      },
      {
        id: 'dashboards.videos',
        title: 'Videos',
        type: 'item',
        icon: 'material-outline:video_library',
        url: '/dashboards/videos',
      },
      {
        id: 'dashboards.reviews',
        title: 'Reviews',
        type: 'item',
        icon: 'material-outline:reviews',
        url: '/dashboards/reviews',
      },
      {
        id: 'dashboards.ratings',
        title: 'Ratings',
        type: 'item',
        icon: 'heroicons-outline:star',
        url: '/dashboards/ratings',
      },
      {
        id: 'dashboards.project',
        title: 'Reports',
        type: 'item',
        icon: 'heroicons-outline:document-report',
        url: '/dashboards/project',
      },
      {
        id: 'dashboards.analytics',
        title: 'Settings',
        type: 'item',
        icon: 'heroicons-outline:support',
        url: '/dashboards/analytics',
      },
    ],
  },
];

export default navigationConfig;
