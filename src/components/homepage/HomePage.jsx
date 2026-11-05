import { Link } from 'react-router';
import FeatureCard from './FeatureCard';
import '../../styles/homepage/home-page.css';

export default function HomePage() {
    return (
        <main>
            <section className="hero" aria-labelledby="hero-title">
                <p className="hero-eyebrow">New arrivals every week</p>
                <h1 className='hero-title' id='hero-title'>Simple goods for everyday life.</h1>
                <p className="hero-lead">
                    A small, curated store. Browse the shop, pick what you like, and keep track of it all in your cart.
                </p>
                <div className="hero-actions">
                    <Link to='/shop' className='btn btn-primary'>Browse the shop</Link>
                    <Link to='/cart' className='btn btn-secondary'>View cart</Link>
                </div>
            </section>

            <section className='features' aria-labelledby='features-title'>
                <h2 id="features-title" className='visually-hidden'>Why shop with us</h2>
                <ul className="features-list">
                    <FeatureCard title="Curated catalog" text="A handful of items, not thousands. Easy to browse." />
                    <FeatureCard title="Live cart" text="The cart count in the navbar updates as you add items." />
                    <FeatureCard title="Adjust anytime" text="Change quantities or remove items right from the cart." />
                </ul>
            </section>
        </main>
    );
}