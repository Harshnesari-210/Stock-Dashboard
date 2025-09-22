import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="bg-gray-900 rounded-md overflow-hidden shadow-lg flex flex-col items-center p-4">
      {/* Quantity above image */}
      <div className="mb-2 px-3 py-1 rounded-full bg-black text-yellow-400 font-bold text-sm shadow">
        {quantity}
      </div>
      <img
        src={imageSrc}
        alt="product"
        className="w-24 h-24 object-contain"
      />
    </div>
  );
}

export default ProductCard;
