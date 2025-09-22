// ProductCard.jsx
import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="bg-gray-900 rounded-lg shadow-md flex flex-col items-center justify-center p-3 hover:bg-gray-800 transition">
      {/* Quantity above image */}
      <div className="mb-2 px-2 py-1 rounded-md bg-black/70 text-yellow-400 font-bold text-xs shadow">
        {quantity}
      </div>

      {/* Image */}
      <img
        src={imageSrc}
        alt="product"
        className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
      />
    </div>
  );
}

export default ProductCard;
