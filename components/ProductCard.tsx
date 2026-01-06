
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[2/3] overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Heart Icon */}
        <button className="absolute top-3 right-3 text-2xl text-white hover:text-black transition-colors drop-shadow-md">
          <i className="fa-regular fa-heart"></i>
        </button>

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isBogo && (
            <span className="bg-red-600 text-white text-[10px] font-black px-2 py-0.5 rounded-sm">BOGO</span>
          )}
          {product.isNew && (
            <span className="bg-black text-white text-[10px] font-black px-2 py-0.5 rounded-sm">NEW!</span>
          )}
          {product.tags?.map(tag => (
            <span key={tag} className="bg-red-800 text-white text-[10px] font-black px-2 py-0.5 rounded-sm">{tag}</span>
          ))}
        </div>

        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-black text-white py-3 text-xs font-bold uppercase rounded-full hover:bg-zinc-800 shadow-xl">
            Quick Add
          </button>
        </div>
      </div>

      <div className="mt-3 space-y-1">
        <h3 className="text-xs font-medium text-gray-900 group-hover:underline truncate">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-red-700 font-bold">₦{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-gray-400 text-xs line-through">₦{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        {product.promoText && (
          <p className="text-[10px] text-red-700 font-bold leading-tight">
            {product.promoText}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
