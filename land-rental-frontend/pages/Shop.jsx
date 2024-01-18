import { React, useState } from "react";
import { Products } from "./products";
import Product from "./Shop/Product";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
 
  const uniqueCategories = [
    "All",
    ...new Set(Products.map((product) => product.category)),
  ];

  const handleSearch = (value) => {
    const lowerCaseTerm = value.toLowerCase();
    setSearchTerm(lowerCaseTerm);

    // Generate suggestions based on the search term
    const suggestions = Products.filter((product) =>
      product.productName.toLowerCase().includes(lowerCaseTerm)
    ).slice(0, 7); // Take only the first 7 suggestions
    setSearchSuggestions(suggestions);
  };

  return (
    <div className="container mx-auto mt-12 mb-20 w-[1100px]">
      <h2 className="text-3xl font-bold mb-3 text-center text-[#34495e]">Shop Here</h2>
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
            key={suggestion.id}
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            onClick={() => {
              setSearchTerm(suggestion.productName.toLowerCase());
              setSearchSuggestions([]); // Clear suggestions on selection
            }}
          >
            {suggestion.productName}
          </div>
        ))}
      </div>
    )}
          </div>
          <div className="flex items-center">
            <label htmlFor="category" className="text-lg font-semibold text-gray-500 mr-2">
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
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {Products.filter((product) => {
          const isMatchingCategory =
            selectedCategory === "All" || product.category === selectedCategory;
          const isMatchingSearch =
            product.productName.toLowerCase().includes(searchTerm) ||
            product.productDescription.toLowerCase().includes(searchTerm);
          return isMatchingCategory && isMatchingSearch;
        }).map((product) => (
          <div key={product.id} className="hover:translate-y-[-3px] transition-transform">
            <Product data={product} />
          </div>
        ))}

        {Products.filter((product) => {
          const isMatchingCategory =
            selectedCategory === "All" || product.category === selectedCategory;
          const isMatchingSearch =
            product.productName.toLowerCase().includes(searchTerm) ||
            product.productDescription.toLowerCase().includes(searchTerm);
          return isMatchingCategory && isMatchingSearch;
        }).length === 0 && (
          <div className="text-2xl text-red-500 text-center mt-8">
            No products found
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
