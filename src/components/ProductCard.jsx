import React from "react";

function ProductCard({ imageSrc, quantity }) {
  return (
    <div
      className="relative group rounded-xl p-3 bg-[#222533] ring-1 ring-white/6 hover:ring-white/10 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.6)] transition-transform duration-250 ease-out flex flex-col items-center hover:translate-y-[-2px]"
    >
      {/* Quantity Badge */}
      <div className="absolute -top-2 right-2 px-2 py-0.5 rounded-full text-[10px] font-semibold text-white/85 bg-[#2E3244] ring-1 ring-white/10 shadow-[0_4px_12px_-6px_rgba(0,0,0,0.6)]">
        {quantity}
      </div>

      {/* Product Image */}
      <img
        src={imageSrc}
        alt="product"
        className="w-[116px] h-[116px] object-contain mt-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] transition-transform duration-250 ease-out group-hover:scale-[1.06]"
      />
    </div>
  );
}

export default ProductCard;
