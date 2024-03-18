import Link from "next/link";
import Logo from "../../public/Assets/logo.png";
import Image from "next/image";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="mt-12 bg-gray-900">
      <div className="max-w-screen-xl px-4 pt-8 pb-6 mx-auto sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-300 sm:justify-start">
              <Link href="#" className="w-[100px] md:w-[125px] relative h-full">
                <Image
                  src={Logo}
                  alt="Logo"
                  width={250}
                  height={250}
                  priority
                />
              </Link>
            </div>

            <p className="max-w-md mx-auto mt-6 leading-relaxed text-center text-gray-400 sm:max-w-xs sm:mx-0 sm:text-left">
              Explore a world of shopping with our curated collection of
              products. Find the latest trends and must-have items.
            </p>

            <ul className="flex justify-center gap-6 mt-8 md:gap-8 sm:justify-start">
              <li>
                <Link
                  href="/"
                  className="text-teal-500 transition-all hover:text-teal-500/75 "
                >
                  <span className="sr-only">Facebook</span>
                  <FontAwesomeIcon icon={faFacebook} className="w-5 transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon icon={faInstagram} className="w-5 transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Youtube</span>
                  <FontAwesomeIcon icon={faYoutube} className="w-5 transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">Twitter</span>
                  <FontAwesomeIcon icon={faTwitter} className="w-5 transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </li>

              <li>
                <Link
                  href="/"
                  className="text-teal-500 transition hover:text-teal-500/75"
                >
                  <span className="sr-only">faLinkedin</span>
                  <FontAwesomeIcon icon={faLinkedin} className="w-5 transition-all duration-300 hover:rotate-[360deg]" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 md:grid-cols-4">
            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">About Us</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Our Story
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Mission & Vision
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Sustainability
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Our Services</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Fast Delivery
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Easy Returns
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Secure Payments
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      24/7 Customer Support
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Helpful Links</p>

              <nav className="mt-8">
                <ul className="space-y-4 text-sm">
                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      FAQs
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Shipping Information
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Track Your Order
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/"
                      className="text-white transition hover:text-white/75"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="text-center sm:text-left">
              <p className="text-lg font-medium text-white">Contact Us</p>

              <ul className="mt-8 space-y-4 text-sm">
                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  >
                    <span className="text-white transition group-hover:text-white/75">
                      Email
                    </span>
                    <span className="text-white transition group-hover:text-white/75">
                      support@yourstore.com
                    </span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="/"
                    className="flex items-center justify-center sm:justify-start gap-1.5 group"
                  >
                    <span className="text-white transition group-hover:text-white/75">
                      Phone
                    </span>
                    <span className="text-white transition group-hover:text-white/75">
                      123-456-7890
                    </span>
                  </Link>
                </li>

                <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                  <span className="text-white transition group-hover:text-white/75">
                    <FontAwesomeIcon icon={faPhone} className="w-5" />
                  </span>
                  <address className="-mt-0.5 not-italic text-white">
                    123 Street, Cityville, Country
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 mt-12 border-t border-gray-800">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-400">
              <span className="block sm:inline">All rights reserved.</span>

              <Link
                href="/"
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
              >
                Terms & Conditions
              </Link>

              <span>&middot;</span>

              <Link
                href="/"
                className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
              >
                Privacy Policy
              </Link>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 Your E-commerce Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
