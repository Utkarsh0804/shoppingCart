import React from 'react';
import CartItem from './CartItem';

const Cart = ({ isOpen, onClose, cartItems, updateQuantity, removeFromCart, applyOffer }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.discounted_price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
      <div className="fixed top-0 right-0 h-full w-full max-w-sm bg-white  shadow-xl z-50 flex flex-col">
        <div className="flex justify-between items-center p-4 border-b ">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="p-2">
            &times;
          </button>
        </div>
        <div className="flex-grow p-4 overflow-y-auto">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                applyOffer={applyOffer}
              />
            ))
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="p-4 border-t ">
            <h3 className="text-xl font-bold text-right">Total: ${totalPrice.toFixed(2)}</h3>
            <button className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
