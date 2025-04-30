import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaPinterest,
} from "react-icons/fa";
import logo from "@/assets/logo/Sikshya.png";
import { FaLocationDot } from "react-icons/fa6";
import c1 from "@/assets/logo/colleges-uni.jpg";
import c2 from "@/assets/logo/colleges-uni2.jpg";
import c3 from "@/assets/logo/colleges-uni3.jpg";
import c4 from "@/assets/logo/colleges-uni4.jpg";
import c5 from "@/assets/logo/colleges-uni5.jpg";
import c6 from "@/assets/logo/colleges-uni6.jpg";
import c7 from "@/assets/logo/colleges-uni7.jpg";
import { TbWorld } from "react-icons/tb";
import { RiInstagramFill } from "react-icons/ri";
import Image from "next/image";
import CountryInput from "@/components/CountryInput";

const socialMedia = [
  {
    link: "facebook.com",
    icon: FaFacebookF,
  },
  {
    link: "instagram.com",
    icon: RiInstagramFill,
  },
  {
    link: "linkedin.com",
    icon: FaLinkedinIn,
  },
  {
    link: "pinterest.com",
    icon: FaPinterest,
  },
];

export default function Footer() {
  return (
    <footer className="w-full flex_center flex-col lg:py-24 p-4 lg:px-24  py-10 font-jakarta lg:gap-24 gap-10 bg-tertiary">
      <div className="flex lg:flex-row flex-col container w-full gap-14">
        <div className="flex flex-col gap-4 lg:w-[29%] w-full text-primary">
          <div className="w-40 h-28 p-2 rounded-sm bg-white">
            <Link href={"/"} className="logo w-32 h-auto">
              <Image
                src={logo}
                alt="AI Global"
                className="w-full h-full object-contain"
              />
            </Link>
          </div>
          {/* <p className="text-xs md:text-base font-normal">About</p> */}

          <p className="text-sm font-normal text-dimmer">
            Siksha is a community-driven platform for sharing and accessing
            academic notes. Whether you're a student looking for study material
            or someone who loves helping others learn, Siksha is for you.
          </p>
          
          <div className="flex items-center gap-3">
            {socialMedia.map((media, index) => (
              <a
                key={index}
                href={media.link}
                target="_blank"
                className="social rounded-full size-6 p-1.5 border-2 border-primary"
              >
                <media.icon className="size-full" />
              </a>
            ))}
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between lg:w-[71%] w-full md:gap-0 gap-10 text-primary">
          <div className="flex justify-between md:w-[66%] w-full">
            
            <div className="flex flex-col gap-6 w-[48%]">
              <p className="text-xs md:text-base font-normal">Company</p>
              <nav className="flex flex-col text-xs text-dimmer md:text-sm gap-2 md:gap-4">
                <Link href="/" className="hover:underline">
                  Home
                </Link>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
                <Link href="/our-team" className="hover:underline">
                  Books
                </Link>
                <Link href="/why-choose-us" className="hover:underline">
                  New Release
                </Link>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
               
              </nav>
            </div>
            <div className="flex flex-col gap-6 w-[48%]">
              <p className="text-xs md:text-base font-normal">Important Links</p>
              <nav className="flex flex-col text-xs md:text-sm gap-2 text-dimmer md:gap-4">
                <Link href="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
               
                <Link href="/" className="hover:underline">
                  Terms of Services
                </Link>
              </nav>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:w-[33%] w-full">
            <p className="text-xs md:text-base font-normal">
              Subscribe to Our Newsletter
            </p>
            {/* <p className="text-sm text-dimmer">
              We use our years, international expertise, and endurance to help
              our students in a hassle-free setting.
            </p> */}
            <form className="flex flex-col gap-4 ">
              <input
                type="email"
                placeholder="Enter your email"
                required
                className="px-6 py-2 placeholder-gray-500 rounded-sm text-black w-64"
              />
              <CountryInput className=" placeholder-gray-500 rounded-sm text-black  " />
              <button
                className={
                  " bg-tertiary rounded-sm transition duration-300 h-[40px] md:h-[50px] border border-gray-300 lg:w-64 w-[80%] text-sm md:text-base font-medium text-primary"
                }
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <hr className="w-full border-t-2 border-gray-400 mt-[-20px]" />
    </footer>
  );
}
