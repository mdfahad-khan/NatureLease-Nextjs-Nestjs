import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section
      className="max-w-full  mx-auto md:h-[85vh] 2xl:h-[60vh] sm:h-auto  p-0 rounded-md shadow-lg text-black bg-[#F1EFF0]  items-center overflow-hidden xl:flex 2xl:flex lg:flex md:flex  "
      id="about"
      
    >
      <div
      
        
        className="w-[340px] sm:w-[620px] md:w-[400px] lg:w-[550px] xl:w-[600px]  2xl:w-[800px]  h-auto xl:h-[500px]  ml-[30px] pl-2 xl:mt-2"
      >
        <h1
         
          className="text-[20px] xl:text-[40px] 
          2xl:text-[45px] sm:text-[23px] md:text-[27px] lg:text-[32px] text-center mt-2 xl:mt-20 duration-100 font-bold mb-2 text-[#3a87e0] "
        >
          About Us
        </h1>
        <div
        
          className="text-black duration-100 text-justify"
        >
          <p className="text-[13px] sm:text[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[32px] md:mb-3 sm:mb-1 font-bold md:mt-2 sm:mt-1">
            🚀 Elevate Your Digital Presence with farseIT! 🌐
          </p>
          <p className="text-[11px] sm:text-[13px] md:text-[14] lg:text-[16px] xl:text-[17px] 2xl:text-[23px]">
          Welcome to FarmConnect, your premier destination for all things
            agriculture and farming. Our commitment is to elevate your farming
            experience, transforming it into a journey of growth and abundance.
            At FarmConnect, innovation and sustainability are at the core of what
            we do. Our intuitive platform ensures seamless access to resources
            empowering.We are dedicated to ensuring your success in farming. Your needs and
            aspirations are our priority, and our passionate team is here to
            support you at every stage of your farming journey.
          </p>
        </div>
      </div>
      <div
       
        className="flex-shrink-0 w-[300px] xl:w-[500px] 2xl:w-[600px] mt-2 xl:ml-6 sm:ml-32 md:ml-10 lg:ml-12  mb-3 sm:mt-8 md:h-[300px] sm:w-[350px] sm:h-[200px] overflow-hidden   ml-8 "
      >
        <Image
          src="/Assets/display.jpg" // Adjust the path based on your project structure
          alt="about"
          className="w-full md:ml-8 sm:ml-0 h-full object-fit "
          width={400} // Set your desired width
          height={350} // Set your desired height
        />
      </div>
    </section>
  );
};

export default About;




