"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { sampleArcs } from "@/data/Samplearcs";
import HeroSection from "./StarBackgroun";


const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export function GlobeDemo() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  
  

  return (
    <>
      <div className="flex justify-top items-center w-full h-screen">
        <div className="w-[100vw] h-[60vh] sm:w-full sm:h-[60vh] md:w-full md:h-[70vh] lg:w-full lg:h-full">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-white to-black z-40" />
      </div>
    </>
  );
  
}
