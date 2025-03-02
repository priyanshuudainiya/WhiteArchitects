import React from "react";
import Header from "../components/Header/Header";
import Build from "../assets/Projects Images/P1.jpg";

export default function LandingPage() {
  return (
    <div
      className="relative w-full h-screen bg-[#121111] overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Background architectural image */}
      <div
        className="absolute inset-0 opacity-10 bg-no-repeat bg-fit bg-center"
        style={{
          backgroundImage: `url(${Build})`,
          backgroundPosition: "0% 0%",
          backgroundSize: "cover",
        }}
      ></div>

      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute w-full h-full border-t border-l border-gray-500"
          style={{
            backgroundImage:
              "linear-gradient(135deg, transparent 0%, transparent 49.9%, rgba(255,255,255,0.1) 50%, transparent 50.1%, transparent 100%)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Navigation */}
      <Header />

      {/* Main content */}
      <main className="flex items-center h-[80vh] gap-25">
        <div className="flex items-center">
          <span className="w-48 h-[2px] bg-white"></span>
          <div className="pl-20 text-left">
            <h1
              className="text-4xl font-light leading-tight !text-[#BBBFC0]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Sharp & Beautiful
              <br />
              The Edge Building
            </h1>
            <p className="text-[#BBBFC0] mt-3 ml-1">Madrid, Spain</p>
          </div>
        </div>

        {/* Featured image */}
        <div className="ml-40">
          {/* Image border */}
          <span className="ml-[130px] relative">
            <span className="absolute w-56 h-[2px] bg-[#A0A2A3]"></span>
            <span className="absolute h-16 w-[2px] bg-[#A0A2A3] left-52 -top-5"></span>
          </span>
          <div className="flex items-center gap-10">
            <div className="w-80 h-96 bg-blue-50 shadow-lg overflow-hidden">
              <img
                src={Build}
                alt="The Edge Building"
                className="w-full h-full object-cover mix-blend-multiply"
              />
            </div>

            {/* Page indicator */}
            <div className="bottom-1/3 -right-9 text-gray-400 ml-10">
              <span className="text-lg">1</span>
              <span className="text-lg">/5</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
