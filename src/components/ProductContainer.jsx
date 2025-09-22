import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import values from "../data/api_responses/value.json";
import sample1 from "../data/api_responses/sample_response_1.json";
import sample2 from "../data/api_responses/sample_response_2.json";
import sample3 from "../data/api_responses/sample_response_3.json";
import CoinsImg from "../data/frontend/coins/Coins.png";
import PlatinumImg from "../data/frontend/coins/Platinum.png";
import ValueImg from "../data/frontend/coins/Value.png";

const responses = [sample1, sample2, sample3];

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [totals, setTotals] = useState({ coins: 0, platinum: 0, totalWealth: 0 });
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchProducts = () => {
    const data = responses[step];

    const productArray = Object.keys(data)
      .map((id) => ({
        productId: id,
        quantity: data[id],
        imageSrc: `/images/${id}.png`,
      }))
      .filter((p) => p.quantity > 0);

    setProducts(productArray);

    // Calculate totals
    const coinsQty = data[995] || 0;
    const platinumQty = data[13204] || 0;
    let total = 0;

    Object.keys(data).forEach((id) => {
      const price = values[id] || 0;
      total += price * data[id];
    });

    setTotals({ coins: coinsQty, platinum: platinumQty, totalWealth: total });

    setStep((prev) => (prev + 1) % responses.length);
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
    const interval = setInterval(fetchProducts, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black p-6 rounded-lg shadow-lg text-white">
      {/* Totals Row */}
      <div className="flex justify-between mb-6 flex-wrap gap-4 w-full">
        {/* Coins */}
        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3 shadow flex-1 min-w-[120px]">
          <div className="flex flex-col justify-between h-16">
            <span className="text-sm text-gray-400">Coins</span>
            <span className="text-white font-bold truncate">{totals.coins}</span>
          </div>
          <img src={ValueImg} alt="Total Wealth" className="w-40 h-16 object-contain" />

        </div>

        {/* Platinum */}
        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3 shadow flex-1 min-w-[120px]">
          <div className="flex flex-col justify-between h-16">
            <span className="text-sm text-gray-400">Platinum</span>
            <span className="text-white font-bold truncate">{totals.platinum}</span>
          </div>
          <img src={PlatinumImg} alt="Platinum" className="w-40 h-16 object-contain" />
        </div>

        {/* Total Wealth */}
        <div className="flex items-center justify-between bg-gray-900 rounded-lg p-3 shadow flex-1 min-w-[140px]">
          <div className="flex flex-col justify-between h-16">
            <span className="text-sm text-gray-400">Total Wealth</span>
            <span className="text-white font-bold truncate">{totals.totalWealth}</span>
          </div>
          <img src={CoinsImg} alt="Coins" className="w-40 h-16 object-contain" />
        </div>
      </div>

      {/* Products grid */}
      {loading ? (
        <div className="text-center text-gray-400">Loading products...</div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 mt-10">
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
