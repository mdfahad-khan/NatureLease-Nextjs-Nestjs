import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "../shop-context";
import { Products } from "../products";
import CartItem from "./CartItem";
import Checkout from "../Checkout";

const Cart = () => {
  const { cartItems, getTotalCartAmount, clearCart } = useContext(ShopContext);
  const [discount, setDiscount] = useState(0);
  const [shippingFee, setShippingFee] = useState(5);
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

  const handleApplyDiscount = (coupon) => {
    if (coupon === "SAVE10") {
      setDiscount(10);
    } else if (coupon === "SAVE20") {
      setDiscount(20);
    }
  };

  return (
    <div className="flex min-h-screen">
      <div className="w-2/3 p-4 bg-state-200">
        <div className="bg-white p-4 shadow-xl rounded-sm">
          <h1 className="font-arial font-bold text-4xl mb-4">Your cart</h1>
          <table className="w-full">
            <thead className="w-full">
              <tr className="bg-gray-200 text-center text-lg">
                <th className="p-4">Item</th>
                <th className="p-4">Name</th>
                <th className="p-4">Description</th>
                <th className="p-4">Price</th>
                <th className="p-4">Quantity</th>
              </tr>
            </thead>
          </table>
          <div className="cartItems">
            {Products.map(
              (product) =>
                cartItems[product.id] !== 0 && (
                  <CartItem data={product} key={product.id} />
                )
            )}
          </div>
        </div>
      </div>
      <div className="w-1/3 bg-state-200 flex flex-col items-center">
        <div className="p-8 shadow-xl">
          <div className="checkout w-full max-w-md bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="mb-4">
              <p className="text-lg">Subtotal: {totalAmount} tk</p>
            </div>
            <div className="mb-2 flex">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="w-full border border-gray-300  text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                className="w-36  py-2 bg-blue-500 text-white text-sm  hover:bg-blue-600 transition duration-300 focus:outline-none"
                onClick={() => handleApplyDiscount("SAVE10")}
              >
                Apply Coupon
              </button>
            </div>
            <div className="mb-4">
              <p className="text-lg">Shipping Fee: {shippingFee} tk</p>
            </div>
            <div className="border-t border-gray-300 mb-4"></div>
            <div className="mb-4">
              <p className="text-lg font-semibold">
                Total: {totalAmount - discount + shippingFee} tk
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <button
                className="w-full py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                onClick={backToTheShopping}
              >
                Continue Shopping
              </button>
              <button
                className="w-full py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
                onClick={handleOpenCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          {isCheckoutOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <Checkout
                cartItems={cartItems}
                onClose={handleCloseCheckout}
                onCheckout={handleCheckout}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
