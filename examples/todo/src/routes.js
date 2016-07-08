import Notifications from './screens/Notifications';
import Home from './screens/Home';
import Profile from './screens/Profile';
import TodoList from './components/TodoList';
import Header from './components/Header';
import ViewerQueries from './queries/ViewerQueries';

export default [
    {
        path: '/',
        component: Home,
        queries: ViewerQueries,
        indexRoute: {
            component: Home,
            queries: ViewerQueries,
            prepareParams: () => ({status: 'any'}),
        },
        childRoutes: [
            {
                path: ':status',
                component: TodoList,
                queries: ViewerQueries,
            },
        ],
    },
    {
        path: 'notification',
        component: Notifications,
        queries: ViewerQueries,
    },


];
