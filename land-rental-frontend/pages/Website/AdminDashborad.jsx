// import React, { useState } from "react";
// import {
//   FaSearch,
//   FaBell,
//   FaSun,
//   FaMoon,
//   FaUsers,
//   FaBox,
//   FaClipboardList,
//   FaUser,
//   FaSignOutAlt,
// } from "react-icons/fa";
// import { MdPublic, MdDashboard, MdChatBubble } from "react-icons/md";
// import { IoIosSettings } from "react-icons/io";
// import Image from "next/image";
// import { ThemeProvider } from "./ThemeProvider";
// import { useTheme } from "next-themes";
// //main dashboard
// import {  FaMoneyBillAlt, FaShoppingCart, FaBalanceScale } from 'react-icons/fa';


// const AdminNavbar = () => {
//   const { theme, setTheme } = useTheme();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const toggleDropdown = () => setShowDropdown(!showDropdown);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <div className="flex items-center border border-gray-400  w-full h-16 bg-[#FFFFFF]">
//       <div className="ml-12 text-xl font-bold">Fahad</div>
//       <div className="p-4  flex justify-between w-full">
//         <div className="flex justify-start ml-32 bg-white rounded-md">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-32 bg-transparent border-none"
//           />
//           <FaSearch className="text-gray-500 mt-1 mr-2" />
//         </div>
//         <div className="flex justify-end space-x-8 text-gray-600 text-xl">
//           <div className="flex items-center space-x-4">
//             <MdPublic />
//             <span>English</span>
//           </div>
//           {theme === "light" ? (
//             <FaSun onClick={toggleTheme} />
//           ) : (
//             <FaMoon onClick={toggleTheme} />
//           )}{" "}
//           {/* Day/Night mode icon */}
//           <FaBell />
//           <MdChatBubble />
//           <Image
//             src="/Assets/display.jpg"
//             alt="Description of image"
//             width={30}
//             height={30}
//             className="rounded-full"
//           />
//           <div onClick={toggleDropdown}>
//             {" "}
//             <IoIosSettings />
//           </div>
//           {showDropdown && (
//             <div className="absolute right-0 mt-12 w-48 bg-white rounded-sm shadow-xl z-10 ">
//               {/* Dropdown content */}
//               <div className="py-1">
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Setting 1
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Setting 2
//                 </a>
//                 <a
//                   href="#"
//                   className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
//                 >
//                   Setting 3
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };



// const MainDashboard = () => {
//   return (
//     <div className="w-full bg-gray-50 p-4">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//         {/* User Card */}
//         <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">User</h2>
//             <h1 className="text-4xl font-semibold text-gray-600 ml-6">5</h1>
//             <p className="text-gray-500">User details here</p>
//           </div>
//           <FaUser className="w-5 h-5 mt-8 text-blue-500" />
//         </div>

//         {/* Earning Card */}
//         <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">Earning</h2>
//             <h1 className="text-4xl font-semibold text-gray-600 ml-6">500</h1>
//             <p className="text-gray-500">Earning details here</p>
//           </div>
//           <FaMoneyBillAlt className="w-5 h-5 mt-8 text-blue-500" />
//         </div>

//         {/* Order Card */}
//         <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">Order</h2>
//             <h1 className="text-4xl font-semibold text-gray-600 ml-6">5</h1>
//             <p className="text-gray-500">Order details here</p>
//           </div>
//           <FaShoppingCart className="w-5 h-5 mt-8 text-blue-500" />
//         </div>

//         {/* My Balance Card */}
//         <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between">
//           <div>
//             <h2 className="text-lg font-semibold">My Balance</h2>
//             <h1 className="text-4xl font-semibold text-gray-600 ml-6">500</h1>
//             <p className="text-gray-500">Balance details here</p>
//           </div>
//           <FaBalanceScale className="w-5 h-5 mt-8 text-blue-500" />
//         </div>
//       </div>
//     </div>
//   );
// };




// const SideBar = () => {
//   return (
//     <div className="bg-[#FFFFFF] border border-gray-400 h-full
//      w-56 flex-none p-4">
//       <div>
//         MAIN
//         <div className="flex items-center space-x-4 bg-gray-100 p-1 hover:scale-105 rounded-sm">
//           <MdDashboard className="text-[#3867d6] text-[20px]" />
//           <span>Dashboard</span>
//         </div>
//       </div>
//       <div className="mt-4">
//         LIST
//         <div>
//           <div className="flex items-center space-x-4  bg-gray-100 p-1 hover:scale-105 rounded-sm">
//             <FaUsers className="text-[#3867d6] text-[20px]" />
//             <span>Users</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
//             <FaBox className="text-[#3867d6] text-[20px]" />
//             <span>Product</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
//             <FaClipboardList className="text-[#3867d6] text-[20px]" />
//             <span>Order</span>
//           </div>
//         </div>
//       </div>
//       <div className="mt-4">
//         USER
//         <div>
//           <div className="flex items-center space-x-4  bg-gray-100 p-1 hover:scale-105 rounded-sm">
//             <FaUser className="text-[#3867d6] text-[20px]" />
//             <span>Profile</span>
//           </div>
//           <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
//             <FaSignOutAlt className="text-[#3867d6] text-[20px]" />
//             <span>Logout</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// const Dashboard = () =>{
//   return(
//     <div>Dashboard</div>
//   )
// }

// const AdminDashboard = () => {
//   return (
//     <ThemeProvider
//       attribute="class"
//       defaultTheme="system"
//       enableSystem
//       disableTransitionOnChange
//     >
//       <div className="w-full h-screen bg-gray-100">
//         <AdminNavbar />
//         <div className="flex">
//           <SideBar />
//           <MainDashboard />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default AdminDashboard;
