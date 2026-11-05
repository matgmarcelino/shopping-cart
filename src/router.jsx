import { createBrowserRouter } from 'react-router';
import CartPage from './components/cartpage/CartPage';
import ErrorPage from './components/ErrorPage';
import HomePage from './components/homepage/HomePage';
import Layout from './components/Layout';
import ShopPage from './components/shoppage/ShopPage';

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        errorElement: <ErrorPage />,
        children: [
            { index: true, Component: HomePage },
            { path: 'shop', Component: ShopPage },
            { path: 'cart', Component: CartPage },
            { path: '*', Component: ErrorPage },
        ],
    },
]);

export default router;