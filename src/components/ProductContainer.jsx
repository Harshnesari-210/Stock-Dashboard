import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get("http://localhost:4000"); // replace with actual API
      const data = response.data;

      // Filter out products with quantity 0 first, then map
      const productArray = Object.keys(data)
        .filter((id) => data[id] > 0)  // ✅ Only include quantity > 0
        .map((id) => ({
          productId: id,
          quantity: data[id],
          imageSrc: `/images/${id}.png`, // ensure images exist
        }));

      setProducts(productArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // initial fetch
    const interval = setInterval(fetchProducts, 60000); // update every 60s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen overflow-auto p-4 bg-gray-50">
      {loading ? (
        <div className="text-center text-gray-500">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500">No products available</div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {products.map((p) => (
            <ProductCard
              key={p.productId}
              imageSrc={p.imageSrc}
              quantity={p.quantity}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductContainer;
