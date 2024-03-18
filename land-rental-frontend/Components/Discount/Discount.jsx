import React from 'react'
import DisplayImage from "../../public/Assets/discount.png";

const Discount = () => {
  return (
    <div>
        <div
        className="flex-shrink-0 w-full xl:h-[80vh] lg:h-[70vh] md:h-[60vh] sm:h-[50vh] h-[20vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${DisplayImage.src})` }}></div>
    </div>
  )
}

export default Discount