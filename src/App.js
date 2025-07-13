import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import CartIcon from "./components/CartIcon";
import AddToCartModal from "./components/AddToCartModal";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [recentProductName, setRecentProductName] = useState("");
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, quantity: 1, discounted_price: product.actual_price },
      ]);
    }
    setRecentProductName(product.name);
    setShowAddModal(true);
    setTimeout(() => setShowAddModal(false), 2000);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      return removeFromCart(productId);
    }
    if (newQuantity >= 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  const applyOffer = (productId) => {
    setCartItems(
      cartItems.map((item) => {
        if (item.id === productId) {
          const discounted_price =
            item.actual_price -
            (item.actual_price * item.offer_percentage) / 100;
          return { ...item, discounted_price };
        }
        return item;
      })
    );
  };
  const removeOffer = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, discounted_price: item.actual_price } : item
      )
    );
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (<>
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <header className="shadow-md bg-white">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shopping Cart</h1>
          <div className="flex items-center space-x-4">
            <CartIcon
              cartCount={cartCount}
              onClick={() => setIsCartOpen(true)}
            />
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <ProductList addToCart={addToCart} />
      </main>
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        setCartItems={setCartItems}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
        applyOffer={applyOffer}
        removeOffer={removeOffer}
      />
    </div>
    <AddToCartModal
  isOpen={showAddModal}
  onClose={() => setShowAddModal(false)}
  productName={recentProductName}
/>
</>
  );
}

export default App;
