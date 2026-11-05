import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import useProducts from '../hooks/use-products';
import Navbar from './Navbar';

export default function Layout() {

    const { products, error, loading } = useProducts();
    const [cart, setCart] = useState(() => {
        try { 
            const saved = JSON.parse(localStorage.getItem('cart'));
            return Array.isArray(saved) ? saved : []; }
        catch { return []; }
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function addToCart(id, qty = 1) {
        const item = cart.find(i => i.id === id);

        if (item) updateQty(id, item.qty + qty);
        else setCart(prev => [...prev, { id, qty }]);
    }

    function updateQty(id, qty) {
        const idx = cart.findIndex(i => i.id === id);
        if (idx === -1) return;

        setCart(prev => prev.map(i => i.id === id ? { ...i, qty } : i));
    }

    function removeFromCart(id) {
        const idx = cart.findIndex(i => i.id === id);
        if (idx === -1) return;

        const newCart = [...cart];
        newCart.splice(idx, 1);

        setCart(newCart);
    }

    return (
        <>
            <Navbar cart={cart} />
            <Outlet context={{
                products,
                error,
                loading,
                cart,
                addToCart,
                updateQty,
                removeFromCart,
            }}/>
        </>
    )
}