import Link from 'next/link';
import Image from 'next/image';
import 'typeface-lobster';

const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState("");

  // const handleSearch = (value) => {
  //   const lowerCaseTerm = value.toLowerCase();
  //   setSearchTerm(lowerCaseTerm);
  // }

  return (
    <div className="bg-white text-[#006266] p-6 text-sm font-Poppins">
      <div className="container mx-auto flex items-center justify-center">
        <div className="mr-6 text-center flex ml-10">
        <div className="flex items-center">

      <div className="">
      <Image
          src="/Assets/logo.png" // Adjust the path based on your project structure
          alt="Manager"
          className="w-12 h-12 mt-2"
          width={500} // Set your desired width
          height={500} // Set your desired height
        />
      </div>
      <div>
        <h4 className="text-2xl font-bold font-lobster">NatureLease</h4>
      </div>
    </div>
        </div>
        <div className="flex-grow">
          <ul className="flex justify-center font-semibold text-xl cursor-pointer">
            <li className="mr-4">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-4">
              <Link href="/Website/About">About</Link>
            </li>
            <li className="mr-4">
              <Link href="/Website/Contact">Contact</Link>
            </li>
            <li className="mr-4">
              <Link href="/Shop">Shop</Link>
            </li>
            <li className="mr-4">
              <Link href="/Website/Service">Service</Link>
            </li>
            <li className="mr-4">
              <Link href="/Website/News">News</Link>
            </li>
          </ul>
        </div>
        <div className="text-center flex mr-10">
          <input
            type="text"
            placeholder="Find Land"
            // value={searchTerm}
            //   onChange={(e) => handleSearch(e.target.value)}
            className="text-red border border-solid border-green-600 rounded-full mr-4 text-center"
          />
          <Link href="/Auth/Signup" className='text-[#006266] text-lg font-Poppins font-bold'>Signup</Link>
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
