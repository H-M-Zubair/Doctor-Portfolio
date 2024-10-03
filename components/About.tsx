import Image from "next/image";
import React from "react";

function About() {
  return (
    <div id="about" className="py-12 px-6 sm:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl mb-4">
            Hi,
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-4">
            I help my patients heal from any trauma and illness by working
            profoundly on their health issues. My way of treatment not only
            includes physical but also emotional and spiritual aspects. {" "}
          </p>
          <p className="text-gray-700 text-base sm:text-lg">
          For me,
            healing is a journey, not a process, and I help my patients endure
            this journey to reach a state of personal balance and acceptance.
          </p>
        </div>
        <div className="flex justify-center md:w-1/2">
          <div className="bg-white shadow-2xl p-6 md:p-8 rounded-full flex flex-col items-center justify-center w-64 md:w-72 h-64 md:h-72 mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-bold text-blue-500">
                27
              </span>
              <span className="text-base md:text-lg text-gray-600 font-bold">
                Years
              </span>
              <div className="text-gray-600 text-base md:text-lg font-bold">
                of experience
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative w-full h-60 md:h-80">
          <Image
            src="/images/footer/f2.jpg"
            alt="About image 1"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="relative w-full h-60 md:h-80">
          <Image
            src="/images/footer/f1.jpg"
            alt="About image 2"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
