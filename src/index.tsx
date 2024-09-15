import React from 'react';
import ReactDOM from 'react-dom/client';
import { router } from './Router';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './context/UserContext';
import './app.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const getUserData = () => {
    const localUserData = localStorage.getItem('userData');
    return localUserData ? JSON.parse(localUserData) : null;
};

root.render(
    <React.StrictMode>
        <AuthContextProvider userData={getUserData()}>
            <RouterProvider router={router} />
        </AuthContextProvider>
    </React.StrictMode>
);
