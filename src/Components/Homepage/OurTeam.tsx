"use client";
import React from 'react';
import { AnimatedTooltip } from "../ui/animated-tooltip";

const people = [
  { id: 1, name: "Mr. Sambit Biswal", designation: "Founder and CEO", image: "/assets/img/team-1.jpeg" },
  { id: 2, name: "Mr. Soumya Mohanty", designation: "Chief Technology Officer", image: "/assets/img/team-2.jpg" },
  { id: 3, name: "Mr. Bobby Garcia", designation: "Chief Advisory Consultant", image: "/assets/img/team-3.png" },
  { id: 5, name: "Mr. Anzin Saifuddin", designation: "Director Coding and Compliances", image: "/assets/img/team-5.png" },
  { id: 6, name: "Mr. Rajeev Kukade", designation: "Business Strategy and Control", image: "/assets/img/team-6.png" },
];

export function AnimatedTooltipPreview() {
  return (
    <>
    <h1 className='text-4xl font-bold text-center my-12 font-serif'>
          Welcome To RSB
    </h1>
    <p className='mt-5 text-lg text-justify lg:px-24 sm:px-6 mx-4 font-serif'>
            Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet adipisicing elit. Alias delectus debitis porro natus neque, temporibus libero. Quas voluptatem harum qui doloribus reprehenderit! Quis tenetur, illum facere sit facilis a distinctio!  
    </p>
      <div className='text-white  mt-8 px-4 md:px-4 font-serif mt-10 '>
        <div className='max-w-4xl mx-auto'>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-12 ">
          <AnimatedTooltip items={people} />
        </div>
        <div className='max-w-4xl mx-auto text-justify'>
        </div>
      </div>
      <p className='mt-5 text-lg text-justify lg:px-24 sm:px-6 mx-4 font-serif'>
            Lorem ipsum, dolor sit amet consectetur Lorem ipsum dolor sit amet adipisicing elit. Alias delectus debitis porro natus neque, temporibus libero. Quas voluptatem harum qui doloribus reprehenderit! Quis tenetur, illum facere sit facilis a distinctio!  
    </p>
    </>
  );
}