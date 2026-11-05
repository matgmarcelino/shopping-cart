import { useEffect, useState } from "react";

const useProducts = () => {
	const [products, setProducts] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getAllProducts = async () => {
			try {
				const response = await fetch("https://fakestoreapi.com/products");
				if (!response.ok) throw new Error("network error");

				const data = await response.json();
				setProducts(data);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		getAllProducts();
	}, []);

	return { products, error, loading };
};

export default useProducts;
