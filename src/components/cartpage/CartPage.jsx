import { Link, useOutletContext } from 'react-router';
import '../../styles/cartpage/cart-page.css';
import CartItem from './CartItem';

export default function CartPage() {

    const { cart, products, loading, error } = useOutletContext();

    if (error) return (
        <main>
            <p>Error: {error.message}</p>
        </main>
    );

    if (loading) return (
        <main className='main-loading'>
            <p>Loading...</p>
        </main>
    );

    const items = cart.reduce((sum, i) => sum + i.qty, 0);

    const total = cart.reduce((sum, i) => {
        const product = products.find(p => p.id === i.id);
        if (!product) return sum;

        return sum + (Number(product.price) * Number(i.qty));
    }, 0).toFixed(2);

    return (
        <main className='cart-page'>
            <h1 className='cart-title'>Your cart</h1>

            <div className="cart-layout">
                <section className='cart-items' aria-labelledby="cart-items-heading">
                    <h2 id='cart-items-heading' className='visually-hidden'>Items in your cart</h2>

                    {cart.length === 0 ? <p className='cart-empty'>Your cart is empty.</p> : 
                        <ul className="cart-list">
                            {cart.map(i => {
                                const product = products.find(p => p.id === i.id);
                                if (!product) return null;
                                
                                return <CartItem product={product} qty={i.qty} key={i.id} />
                            })}
                        </ul>}

                    <footer>
                        <Link to="/shop" className='cart-link'><span aria-hidden='true'>←</span>Continue Shopping</Link>
                    </footer>
                </section>

                <section aria-labelledby='summary-heading' className='summary'>
                    <h2 id="summary-heading">Summary</h2>

                    <dl aria-live='polite'>
                        <div>
                            <dt>Items</dt>
                            <dd>{items}</dd>
                        </div>
                        <div className="summary-total">
                            <dt>Total</dt>
                            <dd><data value={total}>${total}</data></dd>
                        </div>
                    </dl>
                </section>

            </div>


        </main>
    )


}