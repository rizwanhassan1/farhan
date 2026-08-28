import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">Welcome to Farhan Computers!</h1>
      <p className="text-xl text-gray-700 mb-8">
        Your ultimate destination for buying and selling high-quality computers.
      </p>
      <div className="flex justify-center space-x-4">
        <Link href="/computers" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
          Explore Computers
        </Link>
        <Link href="/about" className="bg-green-500 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
          Learn More About Us
        </Link>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Featured Products</h2>
        {/* Placeholder for featured products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Example Product Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Gaming PC Pro</h3>
            <p className="text-gray-600 mb-4">High performance for serious gamers.</p>
            <span className="text-2xl font-semibold text-blue-600">$1500</span>
            <button className="block w-full mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">Workstation Laptop</h3>
            <p className="text-gray-600 mb-4">Powerful and portable for professionals.</p>
            <span className="text-2xl font-semibold text-blue-600">$1200</span>
            <button className="block w-full mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;