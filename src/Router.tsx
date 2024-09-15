import { Navigate, createBrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import { PublicProfile } from './pages/PublicProfile/PublicProfile';
import Layout from './components/Layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: ':username',
                element: <PublicProfile />,
            },
            {
                path: '*',
                element: <Navigate to="/" replace={true} />,
            },
        ],
    },
]);
