// ManagerDashboard.jsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';

// ManagerDashboard.jsx
// ... (other imports)

const ShowLandPost = () => {
  const router = useRouter();
  const [allLandpost, setAllLandpost] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch products when the component mounts
    GetLandpost();
  }, []);

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
        setAllLandpost(response.data.data);
      } else {
        console.log('No products available');
        setError('No products available');
      }
    } catch (error) {
      console.error('Failed:', error);
      setError(`An error occurred trying to fetch products: ${error.message}`);
    }
  };

  const handleDetailsClick = (id) => {
    console.log("land id" + id);
    router.push(`./LandPostDetails/${id}`);
  };

  const handleContactClick = () => {
    router.push(`/SendEmailManager/`);
  };

  return (
    <div className="bg-[#F1EFF0] text-white min-h-screen py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center text-[#303952]">Land Post</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 ">
          {allLandpost.length > 0 ? (
            allLandpost.map((landpost) => (
              <div key={landpost.landid} className="bg-[#d4d5da] ml-5 overflow-hidden shadow-lg transition-transform transform hover:scale-105 rounded-md">
                <img
                  src={`http://localhost:7000/manager/getlandimage/${landpost.picture}`}
                  alt={landpost.landname}
                  className="w-full h-56 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-[#253243] mb-1">{landpost.landname}</h3>
                  <p className="text-gray-800 mb-4">{landpost.description}</p>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-3 w-3 text-red-500 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      <p className="text-sm text-gray-700 mr-2">{landpost.location}</p>
                    </div>
                    <p className="text-xl font-semibold text-green-800">${landpost.price}</p>
                  </div>
                  {/* Action buttons */}
                  <div className="flex justify-end">
                    <button className="bg-[#0984e3] hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer mr-2"
                      onClick={handleContactClick}
                    >
                      Contact
                    </button>
                    <button className="bg-[#00b894] hover.bg-red-600 text-white px-4 py-2 rounded-md transition duration-300 cursor-pointer"
                      onClick={() => handleDetailsClick(landpost.landid)}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-300">No land posts available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowLandPost;
