import "../../styles/cartpage/cart-item.css";
import { useOutletContext } from "react-router";

export default function CartItem({ product, qty }) {
	const { updateQty, removeFromCart } = useOutletContext();

	function decrementQuantity() {
		if (qty - 1 <= 0) removeFromCart(product.id);
		else updateQty(product.id, qty - 1);
	}

	function incrementQuantity() {
		updateQty(product.id, qty + 1);
	}

	function handleChange(e) {
		const value = e.target.value;

		if (value === "") return;
		const n = parseInt(value, 10);
		if (Number.isNaN(n)) return;
		if (n <= 0) removeFromCart(product.id);
		else updateQty(product.id, n);
	}

	function handleRemove() {
		removeFromCart(product.id);
	}

	return (
		<li className="cart-item">
			<img src={product.image} alt="" />

			<div className="cart-item-info">
				<h3>{product.title}</h3>
				<p>
					<data value={product.price}>{product.price}</data> each
				</p>
			</div>

			<fieldset
				className="quantity"
				aria-label={`Quantity for ${product.title}`}
			>
				<button
					type="button"
					aria-label="Decrease quantity"
					onClick={decrementQuantity}
				>
					-
				</button>
				<input
					type="number"
					name="qty"
					value={qty}
					min="1"
					inputMode="numeric"
					onChange={handleChange}
				/>
				<button
					type="button"
					aria-label="Increase quantity"
					onClick={incrementQuantity}
				>
					+
				</button>
			</fieldset>

			<button
				type="button"
				className="cart-item-remove"
				onClick={handleRemove}
				aria-label={`Remove ${product.title} from cart`}
			>
				<span aria-hidden="true">×</span>
			</button>
		</li>
	);
}
