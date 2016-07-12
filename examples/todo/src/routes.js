import Login from './screens/Login';
import Home from './screens/Home';
import Home1 from './screens/Home1';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import TodoList from './components/TodoList';
import ProfileCard from './components/ProfileCard';
import MealImpact from './screens/MealImpact';

import ViewerQueries from './queries/ViewerQueries';
import ViewerQueries1 from './queries/ViewerQueries1';

export default [
  {
      path: '/notifications',
      component: Notifications,
      queries: ViewerQueries1,

  },
  {
      path: '/mealimpact',
      component: MealImpact,
      queries: ViewerQueries1,
      childRoutes: [
         {
             path: ':nodeId',
             component: MealImpact,
             queries: ViewerQueries1,
         },
      ],
  },
  // {
  //     path: '/impact',
  //     component: MealImpact,
  //     queries: ViewerQueries1,
  //     childRoutes: [
  //        {
  //            path: ':nodeId',
  //            component: MealImpact,
  //            queries: ViewerQueries1,
  //        },
  //     ],
  // },
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
