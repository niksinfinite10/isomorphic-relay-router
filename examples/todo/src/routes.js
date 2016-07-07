import TodoApp from './screens/Notifications';
import TodoList from './components/TodoList';
import Header from './components/Header';
import ViewerQueries from './queries/ViewerQueries';

export default [
    {
        path: '/',
        component: TodoApp,
        queries: ViewerQueries,
        indexRoute: {
            component: TodoList,
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
        path: '/user',
        component: Header,
        queries: ViewerQueries,
        indexRoute: {
            component: TodoList,
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
];
