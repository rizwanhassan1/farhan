import React from 'react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <Link href={`/computers/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover object-center"
        />
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-semibold text-blue-600">${product.price.toLocaleString()}</span>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg text-sm">
              View Details
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;