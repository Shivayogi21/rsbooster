import Image from 'next/image';
import React from 'react';


const revenueCycleImage = '/assets/img/revenue-cycle.jpg';
const serviceImage = '/assets/img/f2.jpg';
const challenges = '/assets/img/main.jpg';
const enhancementImage = '/assets/img/revenue-cycle.jpg';
const boxImages = [
  '/assets/img/f2.jpg',
  '/assets/img/f1.jpg',
  '/assets/img/f3.jpg',
  '/assets/img/f4.jpg',
  '/assets/img/f5.jpg',
  '/assets/img/f6.jpg',
];

const Service: React.FC = () => {
  return (
    <div className='text-justify text-white font-serif'>
      <section className="relative flex items-center justify-center h-screen overflow-hidden text-justify text-white font-serif">
        <div className="relative w-full h-full text-justify text-white font-serif">
          <Image
            src={revenueCycleImage}
            alt="Effective Revenue Cycle Management"
            fill
            className="object-cover"
          />
        </div>
        <h1 className="absolute text-4xl font-bold text-center text-white z-10">
          Effective Revenue Cycle Management
        </h1>
      </section>

      <section className="flex flex-col md:flex-row my-10">
        <div className="md:w-1/2">
          <div className="relative w-full h-64">
            <Image
              src={serviceImage}
              alt="Service Image"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="p-4">
            <h2 className="text-2xl font-semibold ">Service Overview</h2>
            <p className="mt-2  font-bold text-justify">
              Our Effective Revenue Cycle Management service optimizes your billing process, ensures timely collections, and improves overall financial performance.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center my-10">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          Challenges in Healthcare Revenue Cycle Management
        </h2>
      </section>

      <section className="flex flex-col md:flex-row my-5">
        <div className="md:w-1/2">
          <div className="relative w-full h-64">
            <Image
              src={challenges}
              alt="Challenges in Revenue Cycle Management"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex items-center">
          <div className="p-4">
            <h2 className="text-2xl font-semibold ">Overview of Challenges</h2>
            <p className="mt-2  font-bold text-justify">
              Revenue cycle management in healthcare faces numerous challenges, including complex billing processes, regulatory compliance, and the need for accurate data collection.
            </p>
          </div>
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          Trends in Revenue Cycle Management (RCM)
        </h2>
        <div className="flex justify-center gap-4 flex-wrap">
          {boxImages.map((src, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg w-full sm:w-1/2 md:w-1/3 h-64">
              <Image src={src} alt={`Gallery Item ${index + 1}`} fill className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-xl text-white">Heading {index + 1}</h3>
                <p className="text-white">Some text about this image.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-semibold text-white mb-5 text-center">
          How RSB Healthcare Consulting helps Clients to achieve Revenue Enhancements
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <div className="relative w-full h-64">
              <Image
                src={enhancementImage}
                alt="Revenue Enhancements"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 flex items-center">
            <div className="p-4">
              <p className="mt-2  font-bold text-justify">
                RSB Healthcare Consulting employs proven strategies to optimize revenue cycles, reduce inefficiencies, and enhance financial performance. Our expert team collaborates with clients to identify opportunities, streamline processes, and implement best practices tailored to their unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
