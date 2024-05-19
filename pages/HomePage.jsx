import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-4xl font-bold mb-8 animate-fade-in">Welcome to our eCommerce Store</div>
      <p className="text-lg text-gray-600 mb-4 animate-fade-in">Explore our wide range of products and find the perfect one for you.</p>
      <Link to="/products"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg animate-fade-in">
        Shop Now
      </button></Link>
    </div>
  );
};

export default HomePage;
