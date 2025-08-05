import { RouteArchitect } from './routerConfig'
import * as Icons from 'lucide-react'

const renderComponent = (key: string) => {
  const Component = RouteArchitect[key];
  return <Component />
};

const renderIcon = (key: string) => {
  const IconComponent = (Icons as any)[key];
  return IconComponent ? <IconComponent size={24} color="white" /> : null;
};

export const routes = [
  {
    key: 'public',
    path: '/',
    routes: [
      { key: 'login', path: '/', component: renderComponent('Login') },
      { key: '404', path: '*', component: renderComponent('NotFound') },
    ],
  },
  {
    key: 'App',
    path: '/app',
    sidebar: true,
    layout: renderComponent('AppShell'),
    routes: [
      {
        key: 'dashboard-home',
        path: '/app/dashboard',
        component: renderComponent('Dashboard'),
        title: 'Dashboard',
        icon: renderIcon('LayoutDashboardIcon'),
        isMenu: true,
      },
      {
        key: 'tasks',
        path: '/app/tasks',
        component: renderComponent('Tasks'),
        title: 'Tasks',
        icon: renderIcon('ClipboardCheckIcon'),
        isMenu: true,
      },
      {
        key: 'calendar',
        path: '/app/calendar',
        component: renderComponent('Calendar'),
        title: 'Calendar',
        icon: renderIcon('CalendarIcon'),
        isMenu: true,
      },
    ],
  },
]