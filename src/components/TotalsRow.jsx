import React, { useEffect, useState } from "react";
import sample1 from "../data/api_responses/sample_response_1.json";
import sample2 from "../data/api_responses/sample_response_2.json";
import sample3 from "../data/api_responses/sample_response_3.json";
import values from "../data/api_responses/value.json";

const responses = [sample1, sample2, sample3];

function TotalsRow() {
  const [step, setStep] = useState(0);
  const [totals, setTotals] = useState({ coins: 0, platinum: 0, totalWealth: 0 });

  const fetchTotals = () => {
    const data = responses[step];

    const coinsQty = data[995] || 0;
    const platinumQty = data[13204] || 0;

    let totalWealth = 0;
    Object.keys(data).forEach((productId) => {
      const quantity = data[productId];
      const price = values[productId] || 0;
      totalWealth += quantity * price;
    });

    setTotals({
      coins: coinsQty,
      platinum: platinumQty,
      totalWealth,
    });

    setStep((prev) => (prev + 1) % responses.length);
  };

  useEffect(() => {
    fetchTotals();
    const interval = setInterval(fetchTotals, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-between items-center mb-6 p-4 bg-gray-900 rounded-lg shadow-lg">
      {/* Coin Box */}
      <div className="flex flex-col justify-between w-1/3 p-2 bg-gray-800 rounded-lg">
        <span className="text-sm text-yellow-400 font-semibold">Coins</span>
        <span className="text-lg font-bold">{totals.coins}</span>
      </div>

      {/* Platinum Box */}
      <div className="flex flex-col justify-between w-1/3 p-2 bg-gray-800 rounded-lg mx-2">
        <span className="text-sm text-yellow-400 font-semibold">Platinum</span>
        <span className="text-lg font-bold">{totals.platinum}</span>
      </div>

      {/* Total Wealth Box */}
      <div className="flex flex-col justify-between w-1/3 p-2 bg-gray-800 rounded-lg">
        <span className="text-sm text-yellow-400 font-semibold">Total Wealth</span>
        <span className="text-lg font-bold">{totals.totalWealth}</span>
      </div>
    </div>
  );
}

export default TotalsRow;
