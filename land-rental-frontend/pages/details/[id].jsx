// pages/details/[id].js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Products } from "../products";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    
 <div>
<div className="flex h-screen">
  <div className="w-1/3  p-20 flex flex-col">
    <div>
      <img
          src={`http://localhost:7000/manager/getlandimage/${land.picture}`}
          alt={land.landname}
        className="object-cover w-full group-hover:scale-105 transition-all duration-300"
      />
    </div>
    
    </div>
  </div>
  <div className="w-2/3 pt-24">
    <h2 className="font-bold">iPhone 15 Valentine Special Combo</h2>
    <div className="flex  gap-3 mt-2">
      <button className="bg-gray-300 w-auto h-8 p-1">
        Cash Discount Price: 124593৳ 107150৳
      </button>
      <button className="bg-gray-300 w-auto h-8 p-1">
        Status: In Stock
      </button>
      <button className="bg-gray-300 w-auto h-8 p-1">
        {" "}
        Product Code: 0
      </button>
    </div>
    <div className="mt-3">
      <ul className="list-disc list-inside gap-1">
        <li>Lorem ipsum dolor, sit amet consectetur </li>
        <li>Lorem ipsum dolor, sit amet consectetur </li>
        <li>Lorem ipsum dolor, sit amet consectetur </li>
        <li>Lorem ipsum dolor, sit amet consectetur </li>
        <li>Lorem ipsum dolor, sit amet consectetur </li>
      </ul>
    </div>
    <div className="flex items-center space-x-4 mt-4">
      <div className="flex items-center space-x-2  ">
        <button className="px-3 py-1 bg-gray-200 rounded-md">-</button>
        <span>1</span>
        <button className="px-3 py-1 bg-gray-200 rounded-md">+</button>
      </div>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Buy Now
      </button>
      <button className="px-4 py-2 bg-green-500 text-white rounded-md">
        Add to Cart
      </button>
    </div>
  </div>
</div>

  );
};

export default Details;
