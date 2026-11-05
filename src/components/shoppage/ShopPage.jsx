import { useOutletContext } from "react-router";
import ProductCard from "./ProductCard";
import '../../styles/shoppage/shop-page.css';


export default function ShopPage() {
    const { products, loading, error, addToCart } = useOutletContext();

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

    if (!products) {
        return (
            <main>
                <p>No products found.</p>
            </main>
        );
    }

    return (
        <main className='shop-page'>
            <div className="shop-intro">
                <h1 className="shop-title">Shop</h1>
                <p className="shop-lead">{products.length} products</p>
            </div>
            <ul className='shop-products'>
                {products.map(p => 
                    <ProductCard 
                        product={p} 
                        addToCart={addToCart} 
                        key={p.id} />)}
            </ul>
        </main>
    );
}
