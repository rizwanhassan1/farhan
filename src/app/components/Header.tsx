import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-400 hover:text-blue-200 transition-colors duration-200">
          Farhan Computers
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-lg hover:text-blue-400 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/computers" className="text-lg hover:text-blue-400 transition-colors duration-200">
              Computers
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-blue-400 transition-colors duration-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-blue-400 transition-colors duration-200">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;