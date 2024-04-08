
// Cart.js
import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "../shop-context";

import CartItem from "./CartItem";
import Checkout from "../Checkout";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const router = useRouter();

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
  };

  const handleCheckout = () => {
    clearCart();
    setIsCheckoutOpen(false);
    router.push("/confirmation");
  };

  const backToTheShopping = () => {
    router.push("/Shop");
  };

  return (
    <div className="cart">
      <div>
        <h1 className="font-serif text-5xl">Your cart</h1>
      </div>
      <div className="cartItems">
        {Object.keys(cartItems).map((productId) => (
          <CartItem
            key={productId}
            data={cartItems[productId]}
            quantity={cartItems[productId]}
            onAddToCart={() => {}}
          />
        ))}
      </div>
      <div className="checkout">
        <p>Total: {totalAmount} tk</p>
        <button onClick={backToTheShopping}>Continue shopping</button>
        <button onClick={handleOpenCheckout}>Checkout</button>

        {isCheckoutOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
            <Checkout cartItems={cartItems} onClose={handleCloseCheckout} onCheckout={handleCheckout} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;