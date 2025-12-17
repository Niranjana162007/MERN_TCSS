import { createContext, useState, useEffect } from "react";

/* ✅ Named export */
export const StoreContext = createContext(null);

/* ✅ Default export */
export default function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [user, setUser] = useState(null);
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);

  /* 🛡️ Safe localStorage loading */
  useEffect(() => {
    const loadData = () => {
      try {
        const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
        const savedOrders = JSON.parse(localStorage.getItem("orders") || "[]");

        const savedUserRaw = localStorage.getItem("user");
        const savedUser = savedUserRaw ? JSON.parse(savedUserRaw) : null;

        setCart(savedCart);
        setOrders(savedOrders);
        setUser(savedUser);
      } catch (error) {
        console.error("Corrupted localStorage detected. Resetting…", error);
        localStorage.clear();
        setCart([]);
        setOrders([]);
        setUser(null);
      }
    };

    loadData();
  }, []);

  /* 🛒 Cart handlers */
  const addToCart = (item) => {
    const existingItem = cart.find(c => c.id === item.id);
    let updatedCart;

    if (existingItem) {
      updatedCart = cart.map(c =>
        c.id === item.id
          ? { ...c, quantity: c.quantity + (item.quantity || 1) }
          : c
      );
    } else {
      updatedCart = [...cart, { ...item, quantity: item.quantity || 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  /* 📦 Orders */
  const placeOrder = (item) => {
    const order = {
      ...item,
      orderId: Date.now(),
      orderDate: new Date().toLocaleDateString(),
      status: "Confirmed",
    };

    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    removeFromCart(item.id);

    setShowOrderSuccess(true);
    setTimeout(() => setShowOrderSuccess(false), 3000);
  };

  /* 👤 Auth */
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        orders,
        placeOrder,
        user,
        login,
        logout,
        showOrderSuccess,
        setShowOrderSuccess,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
