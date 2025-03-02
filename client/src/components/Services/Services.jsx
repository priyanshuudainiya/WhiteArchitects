import React from "react";

export default function Services() {
  return (
    <div className="bg-[#EEF3F7] min-h-screen flex items-center  text-left px-6">
      <div className="max-w-4xl">
        <div className="mb-8 pl-40">
          <div className="px-4 py-2 bg-gray-200 rounded-full text-gray-600 text-sm cursor-pointer hover:bg-gray-300 inline-block">
            Services
          </div>
        </div>
        <h1
          className="text-7xl font-light text-gray-800 leading-snug pl-40"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Design
          <br />
          Direction
          <br />
          Guide
        </h1>
        <p className="mt-6 ml-4 text-gray-500 text-sm pl-40">Read More →</p>
      </div>
    </div>
  );
}
