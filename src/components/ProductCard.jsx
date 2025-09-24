import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div
      className="relative my-2 group rounded-xl bg-[#222533] ring-1 ring-white/6 hover:ring-white/10 shadow-lg flex flex-col items-center overflow-visible p-6 transition-transform duration-250 ease-out hover:-translate-y-1"
    >
      {/* Quantity Badge */}
      <div className="absolute -top-2 -left-2 px-2 py-0.5 rounded-full text-[12px] font-semibold text-white/85 bg-[#2E3244] ring-1 ring-white/10 z-10">
        {quantity}
      </div>

      {/* Product Image */}
      <div className="w-full flex-1 flex items-baseline-last justify-center ">
        <img
          src={imageSrc}
          alt="product"
          className="max-w-[300px] max-h-[700px] object-contain transition-transform duration-250 ease-out group-hover:scale-105"
        />
      </div>
    </div>
  );
}

export default ProductCard;
