import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // -----------------------------
  // Cart State
  // -----------------------------
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // -----------------------------
  // Save Cart to Local Storage
  // -----------------------------
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // -----------------------------
  // Add Product
  // -----------------------------
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item
        );
      }

      return [
        ...prevCart,
        {
          ...product,
          quantity,
        },
      ];
    });
  };

  // -----------------------------
  // Remove Product
  // -----------------------------
  const removeFromCart = (id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== id)
    );
  };

  // -----------------------------
  // Increase Quantity
  // -----------------------------
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // -----------------------------
  // Decrease Quantity
  // -----------------------------
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity > 1
                  ? item.quantity - 1
                  : 1,
            }
          : item
      )
    );
  };

  // -----------------------------
  // Set Quantity Directly
  // -----------------------------
  const setQuantity = (id, quantity) => {
    const newQuantity = Math.max(1, Number(quantity) || 1);

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: newQuantity,
            }
          : item
      )
    );
  };

  // -----------------------------
  // Clear Cart
  // -----------------------------
  const clearCart = () => {
    setCart([]);
  };

  // -----------------------------
  // Check if Product Exists
  // -----------------------------
  const isInCart = (id) => {
    return cart.some((item) => item.id === id);
  };

  // -----------------------------
  // Get Single Cart Item
  // -----------------------------
  const getCartItem = (id) => {
    return cart.find((item) => item.id === id);
  };

  // -----------------------------
  // Total Quantity
  // -----------------------------
  const cartCount = useMemo(() => {
    return cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cart]);

  // -----------------------------
  // Total Price
  // -----------------------------
  const cartTotal = useMemo(() => {
    return cart.reduce(
      (total, item) =>
        total + item.price * item.quantity,
      0
    );
  }, [cart]);

  // -----------------------------
  // Context Provider
  // -----------------------------
  return (
    <CartContext.Provider
      value={{
        cart,

        addToCart,
        removeFromCart,

        increaseQuantity,
        decreaseQuantity,
        setQuantity,

        clearCart,

        isInCart,
        getCartItem,

        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// -----------------------------
// Custom Hook
// -----------------------------
export const useCart = () => {
  return useContext(CartContext);
};