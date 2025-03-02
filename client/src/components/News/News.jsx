import React from "react";
import N1 from "../../assets/News/With Box/N1.png";
import N2 from "../../assets/News/With Box/N2.png";
import N3 from "../../assets/News/With Box/N3.png";

export default function News() {
  return (
    <div
      className="bg-black text-white min-h-screen px-6 py-12 pl-40 "
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* News Button */}
      <div className="flex items-center mb-12 ml-12">
        <div className="px-4 py-2 bg-gray-800 rounded-full text-gray-300 text-sm cursor-pointer hover:bg-gray-700">
          News
        </div>
      </div>

      {/* Magazine Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 ml-12">
        {/* Card 1 */}
        <div className="text-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img src={N2} alt="Magazine 1" className="w-full h-auto rounded" />
          </div>
          <p className="mt-4">
            White Architecture's work was mentioned as best for the spacious
            interior as well as clean design in UNI - COS Magazine of the year
            2020.
          </p>
          <span className=" bg-white"></span>
          <span className="text-gray-400 text-sm">20 Jun 2020</span>
        </div>

        {/* Card 2 */}
        <div className="text-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img src={N3} alt="Magazine 2" className="w-full h-auto rounded" />
          </div>
          <p className="mt-4">
            D&D Magazine 2020 added an article on our work of "Space and Light"
            saying about the design trend that we are setting out there.
          </p>
          <span className="text-gray-400 text-sm">12 Mar 2020</span>
        </div>

        {/* Card 3 */}
        <div className="text-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <img src={N1} alt="Magazine 3" className="w-full h-auto rounded" />
          </div>
          <p className="mt-4">
            Architecture & Design 2020 mentioned our Edge Building and the
            architectural work of Jan 2020.
          </p>
          <span className="text-gray-400 text-sm">15 Jan 2020</span>
        </div>
      </div>
    </div>
  );
}
