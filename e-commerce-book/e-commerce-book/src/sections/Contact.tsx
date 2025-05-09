import contactImage from "@/assets/images/signup.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { Link as LinkIcon } from "lucide-react";
import { Mail } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";

export default function Contact({ className }: { className?: string }) {
  return (
    <section
      className={twMerge(
        "w-full flex_center lg:px-24 lg:pt-24  pt-10 font-jakarta",
        className
      )}
    >
      <div className="flex_center lg:flex-row flex-col gap-10 container w-full rounded-md">
        <div className="lg:w-[50%] w-[90%] flex_center flex-col  overflow-hidden">
          <Image
            src={contactImage}
            alt="contact-image"
            className="w-full max-h-[900px] object-cover"
          />
        </div>
        <div className="lg:w-[50%] w-[90%] flex_center flex-col gap-6">
          <div className="flex flex-col items-start gap-4">
            <h1 className="font-normal text-sm md:text-base uppercase">
              <span className="text-sm text-secondary me-1">/</span>Contact Us
            </h1>
            <h1 className="md:text-[46px] leading-[42px] text-3xl  font-normal">
              Get In Touch With Us
            </h1>
            <p className="text-text">
              Fill out the form below, and we&apos;ll be in touch to arrange a
              consultation at a time most suitable for you.
            </p>

           
            <div className="flex items-start gap-2 mb-4">
              <div className="bg-tertiary hover:bg-secondary transition-all duration-500 rounded-full p-2 flex_center">
                <LinkIcon className="text-white" size={24} />
              </div>
              <div className="bg-tertiary hover:bg-secondary transition-all duration-500 rounded-full p-2 flex_center">
                <Mail className="text-white" size={24} />
              </div>
            </div>
          </div>
          <form className="w-full  flex flex-col gap-7">
            <div className="flex lg:flex-row flex-col gap-6 w-full mb-3">
              <div className="flex space-x-6 justify-start w-full">
                {/* First Name */}
                <div className="relative w-1/2">
                  <label className="absolute left-0 -top-4 text-sm font-medium text-gray-800  ">
                    First Name<span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700 outline-none py-1 placeholder-gray-400"
                  />
                </div>

                {/* Last Name */}
                <div className="relative w-1/2">
                  <label className="absolute left-0 -top-4 text-sm font-medium text-gray-800">
                    Last Name<span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700  outline-none py-1 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 w-full mb-3">
              <div className="flex space-x-6 justify-start w-full">
                {/* First Name */}
                <div className="relative w-1/2">
                  <label className="absolute left-0 -top-4 text-sm  font-medium text-gray-800">
                    Country<span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Your Country"
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700  outline-none py-1 placeholder-gray-400"
                  />
                </div>

                {/* Last Name */}
                <div className="relative w-1/2">
                  <label className="absolute left-0 -top-4 text-sm  font-medium text-gray-800">
                    Phone Number<span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Phone Number"
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700  outline-none py-1 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 w-full mb-3">
              <div className="flex space-x-6 justify-start w-full">
                {/* First Name */}
                <div className="relative w-full">
                  <label className="absolute left-0 -top-4 text-sm  font-medium text-gray-800">
                    Email Address<span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Email Address"
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700  outline-none py-1 placeholder-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-6 w-full">
              <div className="flex space-x-6 justify-start w-full">
                {/* First Name */}
                <div className="relative w-full">
                  <label className="absolute left-0 -top-4 text-sm font-medium text-gray-800">
                    Message<span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Write Your Message Here..."
                    className="w-full border-b-2 border-gray-400 mt-2 focus:border-gray-700  outline-none py-1 placeholder-gray-400"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* <div className="flex items-center w-full">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-text">
                I understand and agree to privacy policy
              </label>
            </div> */}
            <div className="flex justify-start items-start">
              <button className="rounded-sm bg-secondary hover:bg-tertiary transition duration-300 py-2 md:px-6 px-4 text-sm md:text-base font-medium text-primary">
              Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
