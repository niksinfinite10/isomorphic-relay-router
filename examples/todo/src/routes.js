import Login from './screens/Login';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';

import ViewerQueries from './queries/ViewerQueries';

export default [
  {
      path: '/notifications',
      component: Notifications,
      queries: ViewerQueries,
  },
  {
      path: '/profile',
      component: Profile,
      queries: ViewerQueries,
  },
  {
      path: '/login',
      component: Login,
      queries: ViewerQueries,
  },
    {
        path: '/',
        component: Home,
        queries: ViewerQueries,
        childRoutes: [
           {
               path: ':userId',
               component: Home,
               queries: ViewerQueries,
           },
       ],
      },


];
