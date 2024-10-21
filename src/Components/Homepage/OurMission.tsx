"use client";
import React from 'react';

const OurMission: React.FC = () => {
  return (
    <div className="relative flex flex-col md:flex-row h-screen font-serif ">
      {/* Video Card */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <video
            className="w-full h-64 object-cover"
            src="/assets/img/rsbvideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="p-4 bg-gray">
            <h5 className="text-xl font-semibold ">Our Mission</h5>
            <p className="text-gray-700 mb-4">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>

      
      <div className="relative flex-1 flex items-center justify-center p-4">
        <div className="text-center">
          <p className='mt-5  text-lg text-neutral-200 sm:m-16'>
            A diverse group of professionals passionate about healthcare table and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
