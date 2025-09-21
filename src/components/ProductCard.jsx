import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="relative bg-gray-100 rounded-md overflow-hidden shadow-md flex flex-col items-center justify-center p-2">
      {/* Quantity on top-left */}
      <div className="absolute top-1 left-1 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm font-bold z-10">
        {quantity}
      </div>
      <img
        src={imageSrc}
        alt="product"
        className="w-24 h-24 object-contain" // keeps images contained
      />
    </div>
  );
}

export default ProductCard;
