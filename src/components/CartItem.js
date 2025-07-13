const CartItem = ({ item, updateQuantity, removeFromCart, applyOffer, removeOffer }) => {
  const { id, name, actual_price, discounted_price, offer_percentage, quantity } = item;
  const offerApplied = actual_price !== discounted_price;

  return (
    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-200 py-4 gap-4">
      <div className="flex-grow">
        <h4 className="font-semibold text-lg text-gray-900">{name}</h4>
        <div className="flex items-center space-x-2 mt-1">
          <p className={`font-bold text-base ${offerApplied ? 'text-green-600' : 'text-gray-800'}`}>
            ₹{discounted_price.toFixed(2)}
          </p>
          {offerApplied && (
            <p className="text-gray-500 line-through text-sm">₹{actual_price.toFixed(2)}</p>
          )}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="flex items-center border border-gray-300 rounded overflow-hidden">
          <button
            onClick={() => updateQuantity(id, quantity - 1)}
            className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-200 transition"
          >
            -
          </button>
          <span className="px-4 text-sm">{quantity}</span>
          <button
            onClick={() => updateQuantity(id, quantity + 1)}
            className="px-3 py-1 text-lg text-gray-700 hover:bg-gray-200 transition"
          >
            +
          </button>
        </div>

       {!offerApplied ? (
          <button
            onClick={() => applyOffer(id)}
            className="bg-green-500 hover:bg-green-600 text-white text-xs font-medium w-36 h-9 rounded transition"
          >
            Apply {offer_percentage}% Offer
          </button>
        ) : (
          <button
            onClick={() => removeOffer(id)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs font-medium w-36 h-9 rounded transition"
          >
            Remove Offer
          </button>
        )}

        <button
          onClick={() => removeFromCart(id)}
          className="text-red-500 hover:text-red-700 text-xl"
          title="Remove item"
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default CartItem;
