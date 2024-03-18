// Importing images in Next.js
import DisplayImage from "../../public/Assets/Home.jpg";
const Display = () => {
  return (
    <div className="relative flex items-center">
      <div
        className="flex-shrink-0 w-full xl:h-[80vh] lg:h-[450px] md:h-[400px] sm:h-[300px] h-60 bg-cover bg-center"
        style={{ backgroundImage: `url(${DisplayImage.src})` }}></div>

      <div className="absolute inset-0 flex items-center xl:ml-36 lg:ml-28 md:ml-20 ml-1 sm:ml-10 ">
        <div className="xl:p-8 lg:p-4 md:p-2 p-2  text-[#0a3d62] text-left ">
          <h6 className="xl:text-[25px] lg:text-[20px] md:text-[17px] sm:text-[15px] text-[14px] font-bold xl:mb-2 mb-1">
            100% Healthier Natural Food
          </h6>
          <h1 className="xl:text-[48px] lg:text-[42px] md:text-[38px] sm:text-[32px] text-[20px] font-bold mb-4">
            Choose the Best <br />
            Healthier Way <br />
            of Life
          </h1>
          <button className="bg-[#006266] hover:bg-blue-600 text-white xl:px-4 lg:px-4 lg:py-2 md:px-3 md:py-1.5 px-2 py-2 xl:py-2 rounded flex items-center">
  Explore <span className="ml-2">→</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default Display;
