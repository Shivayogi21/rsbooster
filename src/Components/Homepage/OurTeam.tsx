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
      <div className=' text-white  mt-8 px-4 md:px-4 font-serif'>
        <div className='max-w-4xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-6'>
          Welcome To RSB
        </h1>
          <p className='mt-5 text-lg text-neutral-200'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table. Together,
            we work cohesively, driven by a shared goal
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-12">
          <AnimatedTooltip items={people} />
        </div>
        <div className='max-w-4xl mx-auto px-2 md:px-6'>
          <p className='mt-5 text-lg text-neutral-200'>
            A diverse group of professionals passionate about healthcare and committed to excellence. 
            Our team comprises certified medical coders, billing experts, financial analysts, and healthcare
            consultants, each bringing a wealth of experience and expertise to the table  healthcare
          </p>
        </div>
      </div>
    </>
  );
}