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
    <div className="min-h-screen w-full bg-[#171A24] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white/90 tracking-wide">Overview</h2>
        </div>

        {/* Totals */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {[
            { label: "Coins", value: totals.coins, img: CoinsImg },
            { label: "Platinum", value: totals.platinum, img: PlatinumImg },
            { label: "Total Wealth", value: totals.totalWealth, img: ValueImg },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl p-4 bg-[#222533] ring-1 ring-white/6 hover:ring-white/10 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] transition-colors duration-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-sm text-white/70">{item.label}</span>
                  <span className="text-2xl font-semibold text-white/90 tabular-nums">{item.value}</span>
                </div>
                <img src={item.img} alt={item.label} className="w-14 h-14 object-contain" />
              </div>
            </div>
          ))}
        </div>

        {/* Inventory */}
        <h2 className="text-2xl font-semibold text-white/90 mb-4 tracking-wide">Inventory</h2>
        {loading ? (
          <div className="text-center text-white/50 py-12">Loading products...</div>
        ) : (
          <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-3 sm:gap-4">
            {products.map((p) => (
              <ProductCard key={p.productId} imageSrc={p.imageSrc} quantity={p.quantity} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductContainer;
