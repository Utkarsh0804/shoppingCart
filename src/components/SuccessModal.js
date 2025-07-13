const SuccessModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded shadow-xl max-w-sm text-center space-y-3">
        <h3 className="text-green-600 text-xl font-semibold">✅ Order Placed!</h3>
        <p className="text-gray-700 text-sm">
          The invoice has been sent to your registered mobile number.
        </p>
        <p className="text-gray-700 text-sm">Thank you for shopping with us!</p>
        <button
          onClick={onClose}
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessModal;
