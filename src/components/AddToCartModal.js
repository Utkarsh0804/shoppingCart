
const AddToCartModal = ({ isOpen, onClose, productName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white px-6 py-4 rounded-lg shadow-lg text-center w-full max-w-xs">
        <h3 className="text-green-600 font-semibold text-lg">✅ Added to Cart</h3>
        <p className="text-gray-700 text-sm mt-1">
          <strong>{productName}</strong> has been added to your cart.
        </p>
        <button
          onClick={onClose}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default AddToCartModal;
