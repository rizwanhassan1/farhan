import React from 'react';
import Link from 'next/link';
import ProductCard from '@/app/components/ProductCard'; // Assuming you create this component

interface Computer {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

const DUMMY_COMPUTERS: Computer[] = [
  {
    id: '1',
    name: 'Dell XPS 15',
    price: 1899,
    imageUrl: '/de.jpg',
    description: 'Powerful laptop for professionals.',
  },
  {
    id: '2',
    name: 'HP Spectre x360',
    price: 1499,
    imageUrl: '/hp.jpg',
    description: 'Versatile 2-in-1 laptop with premium features.',
  },
  {
    id: '3',
    name: 'Apple MacBook Air M2',
    price: 1199,
    imageUrl: '/app.jpg',
    description: 'Super thin and fast for everyday tasks.',
  },
  {
    id: '4',
    name: 'Custom Gaming PC',
    price: 25000,
    imageUrl: '/ga.jpg',
    description: 'High-end components for ultimate gaming.',
  },
];

const ComputersPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Computer Selection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {DUMMY_COMPUTERS.map((computer) => (
          <ProductCard key={computer.id} product={computer} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Want to Sell Your Computer?</h2>
        <p className="text-lg text-gray-700 mb-6">
          Get a fair quote for your used computer. It's quick and easy!
        </p>
        <Link href="/sell-computer" className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
          Sell Your Computer
        </Link>
      </div>
    </div>
  );
};

export default ComputersPage;