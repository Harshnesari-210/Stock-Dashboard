// // ProductContainer.jsx
// import React, { useEffect, useState } from "react";
// import ProductCard from "./ProductCard";
// import values from "../data/api_responses/value.json";
// import sample1 from "../data/api_responses/sample_response_1.json";
// import sample2 from "../data/api_responses/sample_response_2.json";
// import sample3 from "../data/api_responses/sample_response_3.json";
// import CoinsImg from "../data/frontend/coins/Coins.png";
// import PlatinumImg from "../data/frontend/coins/Platinum.png";
// import ValueImg from "../data/frontend/coins/Value.png";

// const responses = [sample1, sample2, sample3];

// function ProductContainer() {
//   const [products, setProducts] = useState([]);
//   const [totals, setTotals] = useState({ coins: 0, platinum: 0, totalWealth: 0 });
//   const [step, setStep] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const fetchProducts = () => {
//     const data = responses[step];

//     const productArray = Object.keys(data)
//       .map((id) => ({
//         productId: id,
//         quantity: data[id],
//         imageSrc: `/images/${id}.png`,
//       }))
//       .filter((p) => p.quantity > 0);

//     setProducts(productArray);

//     // Totals
//     const coinsQty = data[995] || 0;
//     const platinumQty = data[13204] || 0;
//     let total = 0;
//     Object.keys(data).forEach((id) => {
//       const price = values[id] || 0;
//       total += price * data[id];
//     });

//     setTotals({ coins: coinsQty, platinum: platinumQty, totalWealth: total });
//     setStep((prev) => (prev + 1) % responses.length);
//     setLoading(false);
//   };

//   useEffect(() => {
//     fetchProducts();
//     const interval = setInterval(fetchProducts, 60000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black p-6 rounded-lg shadow-lg text-white">
//       {/* Totals Row */}
//       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
//         {/* Coins */}
//         <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
//           <div className="flex flex-col justify-between">
//             <span className="text-sm text-gray-400">Coins</span>
//             <span className="text-yellow-400 font-bold text-lg">{totals.coins}</span>
//           </div>
//           <img src={CoinsImg} alt="Coins" className="w-12 h-12 object-contain" />
//         </div>

//         {/* Platinum */}
//         <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
//           <div className="flex flex-col justify-between">
//             <span className="text-sm text-gray-400">Platinum</span>
//             <span className="text-yellow-400 font-bold text-lg">{totals.platinum}</span>
//           </div>
//           <img src={PlatinumImg} alt="Platinum" className="w-12 h-12 object-contain" />
//         </div>

//         {/* Total Wealth */}
//         <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
//           <div className="flex flex-col justify-between">
//             <span className="text-sm text-gray-400">Total Wealth</span>
//             <span className="text-yellow-400 font-bold text-lg">{totals.totalWealth}</span>
//           </div>
//           <img src={ValueImg} alt="Total Wealth" className="w-12 h-12 object-contain" />
//         </div>
//       </div>

//       {/* Products Grid */}
//       {loading ? (
//         <div className="text-center text-gray-400">Loading products...</div>
//       ) : (
//         <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-3">
//           {products.map((p) => (
//             <ProductCard
//               key={p.productId}
//               imageSrc={p.imageSrc}
//               quantity={p.quantity}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default ProductContainer;

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

    // Totals
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
      {/* Totals Section Heading */}
      <h2 className="text-xl font-semibold text-white mb-4">Overview</h2>

      {/* Totals Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {/* Coins */}
        <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
          <div className="flex flex-col justify-between">
            <span className="text-sm text-gray-400">Coins</span>
            <span className="text-yellow-400 font-bold text-lg">{totals.coins}</span>
          </div>
          <img src={CoinsImg} alt="Coins" className="w-12 h-12 object-contain" />
        </div>

        {/* Platinum */}
        <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
          <div className="flex flex-col justify-between">
            <span className="text-sm text-gray-400">Platinum</span>
            <span className="text-yellow-400 font-bold text-lg">{totals.platinum}</span>
          </div>
          <img src={PlatinumImg} alt="Platinum" className="w-12 h-12 object-contain" />
        </div>

        {/* Total Wealth */}
        <div className="flex items-center justify-between bg-gray-900 rounded-xl p-4 shadow hover:bg-gray-800 transition">
          <div className="flex flex-col justify-between">
            <span className="text-sm text-gray-400">Total Wealth</span>
            <span className="text-yellow-400 font-bold text-lg">{totals.totalWealth}</span>
          </div>
          <img src={ValueImg} alt="Total Wealth" className="w-12 h-12 object-contain" />
        </div>
      </div>

      {/* Products Section Heading */}
      <h2 className="text-xl font-semibold text-white mb-4">Inventory</h2>

      {/* Products Grid */}
      {loading ? (
        <div className="text-center text-gray-400">Loading products...</div>
      ) : (
        <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-16 gap-3">
          {products.map((p) => (
            <ProductCard key={p.productId} imageSrc={p.imageSrc} quantity={p.quantity} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductContainer;
