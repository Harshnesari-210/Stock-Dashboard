import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div className="bg-gray-100 rounded-md overflow-hidden shadow-md flex flex-col items-center p-2">
      {/* Quantity above image, centered */}
      <div className="mb-2 text-center font-bold text-gray-700 text-lg">
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
