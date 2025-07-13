import React from 'react';

const CartItem = ({ item, updateQuantity, removeFromCart, applyOffer }) => {
  const { id, name, actual_price, discounted_price, offer_percentage, quantity } = item;
  const offerApplied = actual_price !== discounted_price;

  return (
    <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4">
      <div className="flex-grow">
        <h4 className="font-bold text-gray-900 dark:text-white">{name}</h4>
        <div className="flex items-center space-x-2 mt-1">
          <p className={`font-bold ${offerApplied ? 'text-green-500' : 'text-gray-800 dark:text-gray-200'}`}>
            ${discounted_price.toFixed(2)}
          </p>
          {offerApplied && (
            <p className="text-gray-500 line-through text-sm">${actual_price.toFixed(2)}</p>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="px-2 py-1 text-lg"
            disabled={quantity <= 1}
          >
            -
          </button>
          <span className="px-3">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="px-2 py-1 text-lg"
          >
            +
          </button>
        </div>
        {!offerApplied && (
          <button
            onClick={() => applyOffer(id)}
            className="bg-green-500 text-white px-2 py-1 rounded text-xs"
          >
            Apply {offer_percentage}% Offer
          </button>
        )}
        <button
          onClick={() => removeFromCart(id)}
          className="text-red-500 hover:text-red-700"
        >
          &#x1F5D1; {/* Trash can icon */}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
