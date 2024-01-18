// Checkout.js
import React, { useState } from "react";

const Checkout = ({ cartItems, onClose, onCheckout }) => {
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("CreditCard");
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!customerInfo.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!customerInfo.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerInfo.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!customerInfo.address.trim()) {
      newErrors.address = "Address is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmOrder = () => {
    if (validateForm()) {
      // Implement your checkout logic here
      // For simplicity, we'll just log the customer info, cart items, and payment method to console
      console.log("Customer Info:", customerInfo);
      console.log("Cart Items:", cartItems);
      console.log("Payment Method:", paymentMethod);

      // Clear the customer info and close the checkout modal
      setCustomerInfo({
        name: "",
        email: "",
        address: "",
      });

      // Trigger the onCheckout callback
      onCheckout();

      onClose();
    }
  };

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={customerInfo.name}
          onChange={handleInputChange}
          className={`w-full border p-2 rounded ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={customerInfo.email}
          onChange={handleInputChange}
          className={`w-full border p-2 rounded ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-semibold text-gray-600">
          Address:
        </label>
        <textarea
          id="address"
          name="address"
          value={customerInfo.address}
          onChange={handleInputChange}
          rows="3"
          className={`w-full border p-2 rounded ${errors.address ? "border-red-500" : ""}`}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="payment" className="block text-sm font-semibold text-gray-600">
          Payment Method:
        </label>
        <select
          id="payment"
          name="payment"
          value={paymentMethod}
          onChange={handlePaymentChange}
          className="w-full border p-2 rounded"
        >
          <option value="CreditCard">Credit Card</option>
          <option value="PayPal">PayPal</option>
          <option value="BankTransfer">Bank Transfer</option>
        </select>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="bg-green-700 hover:bg-blue-600 text-white font-[16px] py-2 px-4 rounded"
      >
        Confirm Order
      </button>
    </div>
  );
};

export default Checkout;
