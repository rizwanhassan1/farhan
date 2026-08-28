import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 mt-12 shadow-inner">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3">Farhan Computers</h3>
            <p className="text-gray-400">Your trusted partner for buying and selling computers online.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Home</Link></li>
              <li><Link href="/computers" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Shop Computers</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">Connect With Us</h3>
            <p className="text-gray-400">
              Email: farhanhaider8678491@gmail.com <br />
              Phone: 0️⃣3️⃣4️⃣5️⃣8️⃣6️⃣7️⃣8️⃣4️⃣9️⃣1️⃣
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 mt-6">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Farhan Computers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;