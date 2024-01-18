import React, { useState, useEffect } from 'react';
import { AiOutlineShop, AiOutlineShoppingCart, AiOutlineUser, AiOutlineEnvironment } from 'react-icons/ai';
// import { MdNotifications,MdDelete } from 'react-icons/md';

// import Link from 'next/link';
// import Image from 'next/image';
import { useRouter } from 'next/router';
import axios from 'axios';
import SellerNav from './SellerNav';
// import { useAuth } from '../authcontext';
// import GraphChart from './GraphChart';
// import LineGraph from './LineGraph';
// import PieChart from './PieChart';
// import UserNav from './UserNav';


const Seller = () => {
  const [allLandpost, setAllLandpost] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [profile, setProfile] = useState({});
  const [allProducts, setAllProducts] = useState(0);
  const [allNotification, setAllNotification] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();
  
  


  useEffect(() => {
      GetProducts();
      GetLandpost();
  });

 

  const GetProducts = async () => {
    try {
      const response = await axios.get('http://localhost:7000/manager/getAllProduct', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response.data);
      console.log(response.success);
      if (response.data.success) {
        console.log('Products:', response.data);
        console.log(response.data.data);
        setAllProducts(response.data.data.length);
      } else {
        console.log('No products available');
        setError('No products available');
      }
    } catch (error) {
      console.error('Failed:', error);
      setError(`An error occurred trying to fetch products: ${error.message}`);
    }
  };

  const GetLandpost = async () => {
    try {
      const response = await axios.get(
        'http://localhost:7000/manager/getAllLandPost',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
       console.log(response.data)
       console.log(response.success)
      if (response.data.success) {
        console.log('Products:', response.data);
        console.log(response.data.data);
        setAllLandpost(response.data.data.length);
      } else {
        console.log('No products available');
        setError('No products available');
      }
    } catch (error) {
      console.error('Failed:', error);
      setError(`An error occurred trying to fetch products: ${error.message}`);
    }
  };

  return (
    <div>
  <SellerNav />
  <div className="grid grid-cols-12 pr-8 pl-8 mb-6 mt-6">
  <div className="col-span-12 bg-[#dfe4ea] text-[#192a56]  shadow-md">
    <h1 className="text-3xl font-bold mb-8 text-center">Seller DashBoard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-center pr-4 pl-4 items-center">
      {/* Card 1 - Total Seller */}
      <div className='bg-[#0abde3] text-white w-full h-40 p-4 shadow-md flex flex-col justify-center items-center rounded-md'>
        <AiOutlineShop size={60} color="#FFFFFF" className="mb-6" />
        <div className="text-xxl font-semibold mb-6">Total Seller</div>
        <p className="text-xxl font-bold">1,234</p>
      </div>

      {/* Card 2 - Total Product */}
      <div className='bg-[#4186be] text-white w-full h-40 p-4 shadow-md flex flex-col justify-center items-center rounded-md'>
        <AiOutlineShoppingCart size={60} color="#FFFFFF" className="mb-2" />
        <div className="text-xxl font-semibold mb-1">Total Product</div>
        <p className="text-xxl font-bold">{allProducts}</p>
      </div>

      {/* Card 3 - Total Users */}
      <div className='bg-[#3a6b54] text-white w-full h-40 p-4 shadow-md flex flex-col justify-center items-center rounded-md'>
        <AiOutlineUser size={60} color="#FFFFFF" className="mb-2" />
        <div className="text-xxl font-semibold mb-1">Total Users</div>
        <p className="text-xxl font-bold">9,012</p>
      </div>

      <div className='bg-[#9b426c] text-white w-full h-40 p-4 shadow-md flex flex-col justify-center items-center rounded-md'>
        <AiOutlineEnvironment size={60} color="#FFFFFF" className="mb-2" />
        <div className="text-xxl font-semibold mb-1">Total Sell</div>
        <p className="text-lg font-bold">{allLandpost}</p>
      </div>
    </div>

    <div className="container mx-auto max-w-screen-lg">
     
     
     
    </div>
    
    
  </div>
</div>

</div>

  );
};


export default Seller;
