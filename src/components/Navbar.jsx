import { ViewTransition } from 'react';
import { Link, NavLink } from 'react-router';
import '../styles/navbar.css';

function Pill() {
    return (
        <ViewTransition name='nav-pill'>
            <span className='nav-pill' aria-hidden="true" />
        </ViewTransition>
    )
}

export default function Navbar({ cart }) {
    const itemCount = cart.reduce((sum , i) => sum + i.qty, 0);
    return (
        <nav className='navbar'>
            <Link to='/' className='logo'>shopfront</Link>
            <div className="link-group">
                <NavLink to='/' end>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='nav-label nav-label-home'>Home</span>
                        </>
                    )}
                </NavLink>
                <NavLink to='/shop'>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='nav-label nav-label-shop'>Shop</span>
                        </>
                    )}
                </NavLink>
                <NavLink to='/cart'>
                    {({ isActive }) => (
                        <>
                            {isActive && <Pill />}
                            <span className='nav-label nav-label-cart'>
                                Cart
                                {itemCount > 0 && <span className='items-in-cart'>{itemCount}</span>}
                            </span>
                        </>
                    )}
                </NavLink>
            </div>
        </nav>
    );
}