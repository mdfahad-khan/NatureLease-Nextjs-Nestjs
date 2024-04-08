//main dashboard
import { FaUser } from "react-icons/fa";
import { FaMoneyBillAlt, FaShoppingCart, FaBalanceScale } from "react-icons/fa";
const MainDashboard = () => {
  return (
    <div className="w-full bg-gray-50 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {/* User Card */}
        <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between hover:scale-105">
          <div>
            <h2 className="text-[17px] font-semibold text-gray-500">User</h2>
            <h1 className="text-4xl font-semibold text-gray-600 ml-6">5</h1>
            <p class="text-gray-500 text-xs mt-3 border-b-[3px] border-transparent hover:border-blue-500 transition-all duration-500">
              User details here
            </p>
          </div>

          <div className="bg-gray-100 w-10 h-10 mt-8 rounded-full justify-center items-center">
            <FaUser className="w-5 h-5 mt-[9px] ml-[10px]  text-[#006266]" />
          </div>
        </div>

        {/* Earning Card */}
        <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between hover:scale-105">
          <div>
            <h2 className="text-lg text-[17px] font-semibold text-gray-500">Earning</h2>
            <h1 className="text-4xl font-semibold text-gray-600 ml-6">500</h1>
            <p class="text-gray-500 text-xs mt-3 border-b-[3px] border-transparent hover:border-blue-500 transition-all duration-500">
              Earning details here
            </p>
          </div>

          <div className="bg-gray-100 w-10 h-10 mt-8 rounded-full justify-center items-center">
            <FaMoneyBillAlt className="w-5 h-5 mt-[9px] ml-[10px]   text-[#006266]" />
          </div>
        </div>

        {/* Order Card */}
        <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between hover:scale-105">
          <div className="relative">
            <h2 className="text-lg text-[17px] font-semibold text-gray-500">Order</h2>
            <h1 className="text-3xl font-semibold text-gray-600 ml-6">5</h1>

            <p class="text-gray-500 text-xs mt-3 border-b-[3px] border-transparent hover:border-blue-500 transition-all duration-500">
              Order details here
            </p>
          </div>

          <div className="bg-gray-100 w-10 h-10 mt-8 rounded-full justify-center items-center">
            <FaShoppingCart className="w-5 h-5 mt-[9px] ml-[10px]   text-[#006266]" />
          </div>
        </div>

        {/* My Balance Card */}
        <div className="bg-white rounded-lg shadow-md p-2 flex items-center justify-between hover:scale-105">
          <div>
            <h2 className="text-lg text-[17px] font-semibold text-gray-500">My Balance</h2>
            <h1 className="text-4xl font-semibold text-gray-600 ml-6">500</h1>

            <p class="text-gray-500 text-xs mt-3 border-b-[3px] border-transparent hover:border-blue-500 transition-all duration-500">
              Balance details here
            </p>
          </div>

          <div className="bg-gray-100 w-10 h-10 mt-8 rounded-full justify-center items-center">
            <FaBalanceScale className="w-5 h-5 mt-[9px] ml-[10px]  text-[#006266]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainDashboard;
