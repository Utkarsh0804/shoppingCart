import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  const { name, description, actual_price, imageUrl } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <div className="p-5 flex-grow">
        <h4 className="text-lg font-bold text-gray-900">{name}</h4>
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover mt-2 rounded" />
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
      <div className="p-5 border-t border-gray-200">
        <div className="text-2xl font-bold text-gray-900">₹ {actual_price.toFixed(2)}</div>
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
