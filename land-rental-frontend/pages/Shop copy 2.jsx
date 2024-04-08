// Shop.js
import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { ShopContext } from "./shop-context";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const { addToCart, cartItems } = useContext(ShopContext);
  const [cartNotification, setCartNotification] = useState(null);
  const [Error, setError] = useState("");

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

  const handleSearch = (value) => {
    const lowerCaseTerm = value.toLowerCase();
    setSearchTerm(lowerCaseTerm);

    const suggestions = allProducts.filter((product) =>
      product.name.toLowerCase().includes(lowerCaseTerm)
    );
    setSearchSuggestions(suggestions);
  };

  const uniqueCategories = [
    "All",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartNotification(product);
    setTimeout(() => {
      setCartNotification(null);
    }, 2000);
  };

  return (
    <div className="container mx-auto mt-12 mb-20 w-[1100px]">
      <h2 className="text-3xl font-bold mb-3 text-center text-[#34495e]">Shop Here</h2>
      {cartNotification && (
        <div className="bg-green-500 text-white py-2 px-4 rounded-md fixed top-10 right-10">
          Added {cartNotification.name} to cart
        </div>
      )}
      <div className="flex space-x-52 justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search here"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              className="w-64 h-10 px-4 border border-gray-300 rounded-full"
            />
            {searchTerm && searchSuggestions.length > 0 && (
              <div className="absolute bg-white border border-gray-300 rounded mt-2 w-64 max-h-40 overflow-y-auto">
                {searchSuggestions.map((suggestion) => (
                  <div
                    key={suggestion.ProductId}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => {
                      setSearchTerm(""); // Clear search term
                      setSearchSuggestions([]); // Clear suggestions
                    }}
                  >
                    {suggestion.name}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center">
            <label
              htmlFor="category"
              className="text-lg font-semibold text-gray-500 mr-2"
            >
              Category:
            </label>
            <select
              id="category"
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
              className="border border-gray-300 px-2 py-1 rounded"
            >
              {uniqueCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="bg-green-700 hover:bg-blue-600 text-white font-[50px] py-2 px-4 rounded inline-flex items-center">
          <Link href="/Cart/Cart">
            <FontAwesomeIcon icon={faShoppingCart} />
            cart
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {searchSuggestions.map((product) => (
          <div key={product.ProductId} className="product max-h-[300px] flex items-start text-left">
            <div className="image-container">
              <img
                src={`http://localhost:7000/manager/getproductimage/${product.picture}`}
                alt={product.name}
                width={150}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="description leading-tight mt-0">
              <span className="text-[#273c75] font-bold text-md mb-0">
                {product.price} Tk
              </span>
              <span className="text-sm font-semibold mb-0 block overflow-hidden whitespace-nowrap">
                {product.name}
              </span>
              <span className="text-xs mb-6 overflow-hidden whitespace-nowrap">
                {product.description}
              </span>

              <div className="button w-[250px] flex ">
                <button className="addToCartBtn1 text-[13px] mt-0 mb-0 w-[160px] h-6 flex items-center" onClick={() => handleAddToCart(product)}>
                  <span className="mx-auto">Add To Cart</span>
                </button>

                <button className="addToCartBtn ml-4 text-sm mt-0 mb-0 w-[160px] h-6 flex items-center">
                  <span className="mx-auto">Details</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop; 