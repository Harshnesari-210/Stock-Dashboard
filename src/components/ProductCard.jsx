import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="relative bg-gray-100 rounded-md overflow-hidden shadow-sm flex flex-col items-center justify-center p-1">
      {/* Quantity overlay at top-left */}
      <div className="absolute top-1 left-1 bg-black bg-opacity-70 text-white px-1 py-0.5 rounded text-xs font-bold z-10">
        {quantity}
      </div>
      {/* Image */}
      <img
        src={imageSrc}
        alt="product"
        className="w-20 h-20 object-contain"
      />
    </div>
  );
}

export default ProductCard;
