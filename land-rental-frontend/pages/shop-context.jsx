import React, { createContext, useState, useEffect } from "react";
import axios from 'axios'; // Import Axios

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get(
        'http://localhost:7000/manager/getAllProduct',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      if (response.data.success) {
        setAllProducts(response.data.data);
      } else {
        setError('No products available');
      }
    } catch (error) {
      setError(`An error occurred trying to fetch products: ${error.message}`);
    }
  };

  const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < allProducts.length; i++) {
      cart[allProducts[i].ProductId] = 0;
    }
    return cart;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product.ProductId === Number(item));
        if (itemInfo) { // Check if itemInfo is defined
          totalAmount += cartItems[item] * itemInfo.Price; // Use itemInfo.Price instead of itemInfo.price
        }
      }
    }
    return totalAmount;
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
