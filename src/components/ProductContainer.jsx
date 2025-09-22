  import React, { useEffect, useState } from "react";
  import ProductCard from "./ProductCard";
  import sample1 from "../data/api_responses/sample_response_1.json";
  import sample2 from "../data/api_responses/sample_response_2.json";
  import sample3 from "../data/api_responses/sample_response_3.json";

  const responses = [sample1, sample2, sample3];

  function ProductContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [step, setStep] = useState(0);

    const fetchProducts = () => {
      setLoading(true);
      const data = responses[step]; // pick current JSON
      const productArray = Object.keys(data)
        .map((id) => ({
          productId: id,
          quantity: data[id],
          imageSrc: `/images/${id}.png`, // served from public/images
        }))
        .filter((p) => p.quantity > 0);

      setProducts(productArray);
      setLoading(false);
      setStep((prev) => (prev + 1) % responses.length); // cycle through JSONs
    };

    useEffect(() => {
      fetchProducts(); // initial load
      const interval = setInterval(fetchProducts, 60000); // update every 60s
      return () => clearInterval(interval);
    }, []);

    return (
  <div className="w-full h-screen overflow-auto p-12 bg-black ">
    {loading ? (
      <div className="text-center text-gray-400">Loading products...</div>
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
