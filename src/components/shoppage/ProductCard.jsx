import { useState } from 'react';
import '../../styles/shoppage/product-card.css';

export default function ProductCard({ product, addToCart }) {

    const [quantity, setQuantity] = useState(1);

    if (!product) return (
        <p>Error: no product</p>
    );

    function decrementQuantity() {
        setQuantity(Math.max(1, (Number(quantity) || 1) - 1));
    }

    function incrementQuantity() {
        setQuantity((Number(quantity) || 0) + 1);
    }

    function handleChange(e) {
        const value = e.target.value;
        if (value === '') {
            setQuantity('');
            return;
        }
        const parsed = parseInt(value, 10);
        setQuantity(Number.isNaN(parsed) ? 1 : Math.max(1, parsed));
    }

    function handleSubmit() {
        addToCart(product.id, Number(quantity) || 1);
    }

    return (
        <li className="shop-card">
            <img src={product.image} alt="" className="shop-image" />
            <div className="shop-info">
                <p className="product-title">
                    {product.title.length > 50 ? `${product.title.substring(0, 48)}...` : product.title}
                </p>
                <p className="product-price">${product.price}</p>
                <div className="product-price-field">
                    <button type='button' className='product-btn' onClick={decrementQuantity}>-</button>
                    <input type="number" className='product-price-input' min='1' value={quantity} onChange={handleChange} />
                    <button type='button' className='product-btn' onClick={incrementQuantity}>+</button>
                </div>
                <button type='button' className="btn btn-primary" onClick={handleSubmit}>Add to cart</button>
            </div>
        </li>
    )

}