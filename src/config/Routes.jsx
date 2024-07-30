import React from 'react';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/portafolio',
        element: <Portfolio />,
    },
]);

export default router;
