"use client";
import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { CiMobile4 } from "react-icons/ci";

const lists = [
  { id: 1, name: "health" },
  { id: 2, name: "days" },
  { id: 3, name: "lives" },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % lists.length);
    }, 4000); // Change word every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden md:block absolute bottom-0 right-0  p-6 bg-white rounded-lg shadow-lg max-w-sm lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
      <div className="flex items-center gap-2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Better</h1>
        <Fade
          key={currentIndex} 
          duration={4000}
          triggerOnce={false} 
        >
          <span className="text-3xl md:text-4xl font-bold text-blue-600">
            {lists[currentIndex].name}
          </span>
        </Fade>
      </div>
      <p className="mt-4 text-sm text-gray-600">
      Health is the most precious asset of a living being. We are here to help people resolve their health issues
      and achieve their true potential. So that together we can build a stronger and healthier society.
      </p>
      <div className="flex items-center mt-4 text-sm text-gray-700">
        <button className="bg-gradient-to-r from-blue-300 to-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:from-Blue-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-300 ease-in-out mr-2">
          Learn More
        </button>

        {/* <CiMobile4 size={24} className="mr-2" />
        <span>| 3407259858</span> */}
      </div>
    </div>
  );
}

export default Banner;
