import React from 'react';

// This is a dynamic route, `params.slug` will contain the computer's ID or slug
// In a real application, you would fetch data based on this slug.

interface ComputerDetails {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  specifications: string[];
}

const DUMMY_COMPUTER_DETAILS: { [key: string]: ComputerDetails } = {
  'dell-xps-15': {
    id: '1',
    name: 'Dell XPS 15',
    price: 1899,
    imageUrl: 'https://via.placeholder.com/600x400?text=Dell+XPS+15',
    description: 'The Dell XPS 15 is a powerhouse laptop designed for creative professionals and demanding users. It combines a stunning InfinityEdge display with powerful internals for seamless multitasking and content creation.',
    specifications: [
      'Intel Core i7 Processor',
      '16GB RAM',
      '512GB SSD',
      'NVIDIA GeForce RTX 3050',
      '15.6-inch FHD+ Display',
    ],
  },
  'hp-spectre-x360': {
    id: '2',
    name: 'HP Spectre x360',
    price: 1499,
    imageUrl: 'https://via.placeholder.com/600x400?text=HP+Spectre+x360',
    description: 'The HP Spectre x360 is a versatile 2-in-1 convertible laptop that offers premium design, excellent performance, and a flexible form factor. Perfect for work, creativity, and entertainment.',
    specifications: [
      'Intel Core i7 Processor',
      '16GB RAM',
      '1TB SSD',
      'Intel Iris Xe Graphics',
      '13.5-inch 3K2K OLED Touch Display',
    ],
  },
  // Add more dummy data as needed
};

interface ComputerProductPageProps {
  params: {
    slug: string;
  };
}

const ComputerProductPage = ({ params }: ComputerProductPageProps) => {
  const computer = DUMMY_COMPUTER_DETAILS[params.slug];

  if (!computer) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold text-red-600">Computer Not Found</h1>
        <p className="text-gray-700 mt-4">The computer you are looking for does not exist.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img src={computer.imageUrl} alt={computer.name} className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{computer.name}</h1>
          <p className="text-xl text-blue-600 font-semibold mb-6">${computer.price.toLocaleString()}</p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">{computer.description}</p>

          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Specifications:</h2>
          <ul className="list-disc list-inside text-lg text-gray-700 mb-8">
            {computer.specifications.map((spec, index) => (
              <li key={index}>{spec}</li>
            ))}
          </ul>

          <div className="flex space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
              Add to Cart
            </button>
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg transition duration-300 ease-in-out">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerProductPage;