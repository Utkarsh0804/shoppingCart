import { useState } from "react";
import CartItem from "./CartItem";
import SuccessModal from "./SuccessModal";

const Cart = ({
  isOpen,
  onClose,
  cartItems,
  setCartItems,
  updateQuantity,
  removeFromCart,
  applyOffer,
  removeOffer,
}) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
    city: "",
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [errors, setErrors] = useState({});

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.discounted_price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }

    if (!formData.city.trim()) newErrors.city = "City is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Order Submitted:", formData);
      setShowForm(false);
      setShowSuccessModal(true);
      setTimeout(() => {
        setShowSuccessModal(false);
        onClose();
      }, 3500);
      setCartItems([]);
      setFormData({
        name: "",
        phone: "",
        address: "",
        pincode: "",
        city: "",
      });
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      ></div>

      <div className="fixed inset-y-0 right-0 w-full max-w-md md:max-w-lg bg-white shadow-xl z-50 flex flex-col rounded-l-md">
        
       {/* Header */}
         <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button onClick={onClose} className="text-2xl font-bold">
            &times;
          </button>
        </div>

        
        <div className="flex-grow overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-500 mt-4">
              🛒 Your cart is empty.
            </p>
          ) : showForm ? (
            <form onSubmit={handleFormSubmit} className="space-y-3">
              {[
                { name: "name", placeholder: "Name" },
                { name: "phone", placeholder: "Phone (10 digits)" },
                { name: "address", placeholder: "Address" },
                { name: "pincode", placeholder: "Pincode (6 digits)" },
                { name: "city", placeholder: "City" },
              ].map(({ name, placeholder }) => (
                <div key={name}>
                  <input
                    type="text"
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="w-full p-2 border rounded"
                  />
                  {errors[name] && (
                    <p className="text-red-500 text-sm">{errors[name]}</p>
                  )}
                </div>
              ))}

              <div className="flex gap-2 mt-2">
                <button
                  type="submit"
                  className="flex-1 bg-green-500 text-white py-2 rounded hover:bg-green-600"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 text-black py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
                applyOffer={applyOffer}
                removeOffer={removeOffer}
              />
            ))
          )}
        </div>

{/* Footer */}
        {cartItems.length > 0 && !showForm && (
          <div className="p-4 border-t bg-white">
            <h3 className="text-xl font-bold text-right">
              Total: ₹{totalPrice.toFixed(2)}
            </h3>
            <button
              onClick={() => setShowForm(true)}
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Checkout
            </button>
          </div>
        )}
      </div>
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
      />
    </>
  );
};

export default Cart;
