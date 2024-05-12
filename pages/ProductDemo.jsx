import React from 'react';

const ProductDemo = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className="max-w-xl bg-white shadow-md rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Product Image"
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Product Title</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla lacinia magna ac eros
            pretium, eget ultricies elit viverra.
          </p>
          <div className="flex justify-between items-center">
            <span className="text-xl font-semibold text-gray-800">$99.99</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDemo;
