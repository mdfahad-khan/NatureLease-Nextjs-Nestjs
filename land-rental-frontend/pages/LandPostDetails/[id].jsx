// LandPostDetails.jsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";

const LandPostDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Fetch the id from the router query parameters
  const [land, setLand] = useState(null);

  useEffect(() => {
    const fetchLandDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:7000/manager/single/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data) {
          setLand(response.data);
        } else {
          console.log("No details available for the land post");
        }
      } catch (error) {
        console.error("Failed:", error);
      }
    };

    if (id) {
      fetchLandDetails();
    }
  }, [id]);

  if (!land) {
    return <div>Loading...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
        <img
          src={`http://localhost:7000/manager/getlandimage/${land.picture}`}
          alt={land.landname}
          className="w-full h-64 object-cover mb-6 rounded-md"
        />
        <div>
          <h1 className="text-3xl font-semibold text-gray-800 mb-2">
            {land.landname}
          </h1>
          <p className="text-xl font-bold text-red-600 mb-4">${land.price}</p>
          <p className="text-lg text-gray-700 mb-1">{land.size}</p>
          <p className="text-lg text-gray-700 mb-1">{land.location}</p>
          <p className="text-lg text-gray-700 mb-1">{land.description}</p>
          {/* Add more details as needed */}
          <Link href="/">
            <button className="bg-green-700 text-white align-middle px-2 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Back To LandPost
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandPostDetails;
