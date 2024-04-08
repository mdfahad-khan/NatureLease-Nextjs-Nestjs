// import React, { useState, useEffect, useContext } from "react";
// import axios from 'axios';
// import { ShopContext } from "../shop-context";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import Link from 'next/link';

// const Product = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [error, setError] = useState('');
//   const { addToCart, cartItems } = useContext(ShopContext);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await axios.get(
//         'http://localhost:7000/manager/getAllProduct',
//         {
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         }
//       );
//       if (response.data.success) {
//         setAllProducts(response.data.data);
//       } else {
//         setError('No products available');
//       }
//     } catch (error) {
//       setError(`An error occurred trying to fetch products: ${error.message}`);
//     }
//   };

//   const handleDetailsClick = (id) => {
//     router.push(`./details/${id}`);
//   };

//   const cartItemCount = cartItems[allProducts.ProductId];

//   const filteredProducts = allProducts.filter(product => {
//     return product.name.toLowerCase().includes(searchTerm.toLowerCase());
//   });

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
//       {filteredProducts.map((product) => (
//         <div key={product.ProductId} className="product max-h-[300px] flex items-start text-left">
//           <div className="image-container">
//             <img
//               src={`http://localhost:7000/manager/getproductimage/${product.picture}`}
//               alt={product.name}
//               width={150}
//               height={150}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           <div className="description leading-tight mt-0">
//             <span className="text-[#273c75] font-bold text-md mb-0">
//               {product.Price} Tk
//             </span>
//             <span className="text-sm font-semibold mb-0 block overflow-hidden whitespace-nowrap">
//               {product.name}
//             </span>
//             <span className="text-xs mb-6 overflow-hidden whitespace-nowrap">
//               {product.description}
//             </span>

//             <div className="button w-[250px] flex ">
//               <button className="addToCartBtn1 text-[13px] mt-0 mb-0 w-[160px] h-6 flex items-center" onClick={() => addToCart(product.ProductId)}>
//                 <span className="mx-auto">Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}</span>
//               </button>

//               <button className="addToCartBtn ml-4 text-sm mt-0 mb-0 w-[160px] h-6 flex items-center" onClick={() => handleDetailsClick(product.ProductId)}>
//                 <span className="mx-auto">Details</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Product;
