import React from "react";
import CU1 from "../../assets/Contact Us Icons/CU1.png";
import CU2 from "../../assets/Contact Us Icons/CU2.png";
import CU3 from "../../assets/Contact Us Icons/CU3.png";

export default function ContactUs() {
  return (
    <div className="bg-[#EEF3F7] min-h-screen px-6 py-12 font-[Montserrat] font-light">
      {/* Contact Us Button */}
      <div className="flex items-center mb-12 pl-40">
        <div className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm cursor-pointer">
          Contact Us
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="space-y-16">
        {/* Address */}
        <div className="relative">
          <img
            src={CU1}
            alt="Address"
            className="relative inset-0 mx-auto opacity-10 w-20 h-20"
          />
          <div className="absolute top-11 left-[750px]">
            <p className="text-lg text-gray-700 font-semibold">
              White Architectures
            </p>
            <p className="text-gray-700 font-semibold">2787 Street, Fremont</p>
            <p className="text-gray-700 font-semibold">California</p>
            <p className="text-gray-700 font-semibold">94538</p>
          </div>
        </div>

        {/* Email */}
        <div className="relative">
          <img
            src={CU2}
            alt="Email"
            className="relative inset-0 top-10 mx-auto opacity-10 w-20 h-20"
          />
          <div className="absolute top-20 left-[750px]">
            <p className="text-gray-700 font-semibold">
              wagetintouch@whitearch.com
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="relative">
          <img
            src={CU3}
            alt="Phone"
            className="relative inset-0 top-10 mx-auto opacity-10 w-20 h-20"
          />
          <div className="absolute top-18 left-[750px]">
            <p className="text-gray-700 font-semibold">510-979-9360</p>
          </div>
        </div>
      </div>
    </div>
  );
}
