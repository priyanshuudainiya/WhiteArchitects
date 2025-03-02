import React from "react";

export default function Footer() {
  return (
    <div className="bg-black h-screen w-full flex flex-col gap-36 px-6 py-20 font-[Montserrat] font-light text-white">
      <div>
        <div className="text-7xl mt-32 font-poiret text-center">
          White Architectures
        </div>
        <div className="flex space-x-20 font-poiret items-center ml-[450px] mt-10">
          <span className="text-gray-400 cursor-pointer text-xl font-semibold">
            Instagram
          </span>
          <span className="text-gray-400 cursor-pointer text-xl font-semibold">
            Twitter
          </span>
        </div>
      </div>

      <div>
        <p className="relative ml-3 mt-20">
          <span className="absolute w-[1450px] h-[2px] bg-[#BBBFC0]"></span>
          <span className="absolute h-28 w-[2px] bg-[#BBBFC0] right-11 -bottom-6"></span>
        </p>
        <div className="text-gray-500 pt-14 flex justify-between">
          <span>skillmix2021</span>
          <span className="cursor-pointer">Top</span>
          <span>skillmix2021@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
