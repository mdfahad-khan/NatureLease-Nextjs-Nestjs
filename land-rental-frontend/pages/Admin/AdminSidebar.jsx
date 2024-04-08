import React from "react";
import {
 
  FaUsers,
  FaBox,
  FaClipboardList,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdDashboard} from "react-icons/md";

//main dashboard
const AdminSidebar = () => {
    return (
      <div className="bg-[#FFFFFF] border-r-[2px] border-gray-200  h-full
       w-56 flex-none p-4">
        <div>
          MAIN
          <div className="flex items-center space-x-4 bg-gray-100 p-1 hover:scale-105 rounded-sm">
            <MdDashboard className="text-[#006266] text-[20px]" />
            <span>Dashboard</span>
          </div>
        </div>
        <div className="mt-4">
          LIST
          <div>
            <div className="flex items-center space-x-4  bg-gray-100 p-1 hover:scale-105 rounded-sm">
              <FaUsers className="text-[#006266] text-[20px]" />
              <span>Users</span>
            </div>
            <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
              <FaBox className="text-[#006266] text-[20px]" />
              <span>Product</span>
            </div>
            <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
              <FaClipboardList className="text-[#006266] text-[20px]" />
              <span>Order</span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          USER
          <div>
            <div className="flex items-center space-x-4  bg-gray-100 p-1 hover:scale-105 rounded-sm">
              <FaUser className="text-[#006266] text-[20px]" />
              <span>Profile</span>
            </div>
            <div className="flex items-center space-x-4 mt-2  bg-gray-100 p-1 hover:scale-105 rounded-sm">
              <FaSignOutAlt className="text-[#006266] text-[20px]" />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default AdminSidebar;