import React from "react";

export default function About() {
  return (
    <div
      className="bg-black text-white flex items-center justify-center min-h-screen relative"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* News Button */}
      <div className="absolute top-10 left-14 pl-40">
        <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
          About
        </div>
      </div>
      {/* Large Background Text */}
      <div
        className="absolute inset-0 flex items-center justify-center text-[320px] font-light opacity-30 bg-clip-text text-transparent overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(262deg, #121111 0%, #2D2B2B 21%, #FFFFFF 49%, #2D2B2B 84%, #121111 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        <span className="tracking-tight">Design</span>
        <span className="ml-5 tracking-tight">What</span>
      </div>

      {/* Centered Content */}
      <div className="text-left px-4 mt-auto">
        <p className="text-gray-100 text-md max-w-md mx-auto">
          Architecture is the learned game, correct and magnificent, of forms
          assembled in the light. So keeping this in mind we started with our
          work. We are a team of 5 Architects with a clean and white vision.
        </p>
        <a
          href="#"
          className="block mt-5 !text-gray-100 text-md !underline hover:text-white transition"
        >
          Read More →
        </a>
      </div>
    </div>
  );
}
