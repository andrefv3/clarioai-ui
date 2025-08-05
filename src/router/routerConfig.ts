import type { ReactElement } from 'react'

//Pages
import Login from '../pages/login/login'
import NotFound from '../pages/notFound/notFound'
import Dashboard from '../pages/dashboard/dashboard'
import Tasks from '../pages/tasks/tasks'
import Calendar from '../pages/calendar/calendar'

//Layouts
import AppShell from '../layouts/AppShell'

export const RouteArchitect: any = {
  AppShell,
  Login,
  NotFound,
  Dashboard,
  Tasks,
  Calendar,
}

export type AppRoute = {
  key: string
  path: string
  layout?: ReactElement | null
  component?: ReactElement | null
  icon?: ReactElement | null
  title?: string
  routes?: AppRoute[]
}


