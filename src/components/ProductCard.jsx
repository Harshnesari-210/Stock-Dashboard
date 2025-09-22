import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="bg-gray-800 rounded-md overflow-hidden shadow-lg flex flex-col items-center p-2">
      <div className="mb-1 px-3 py-1 rounded-full bg-black text-yellow-400 font-bold text-sm shadow">
        {quantity}
      </div>
      <img
        src={imageSrc}
        alt="product"
        className="w-16 h-16 object-contain"
      />
    </div>
  );
}

export default ProductCard;
