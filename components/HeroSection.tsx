"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/restaurant.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      {/* Logo */}
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
        <Image
          src="/restaurant_logo.png"
          alt="Restaurant Logo"
          width={150}
          height={150}
        />
      </div>

      {/* Restaurant Name */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 flex items-center justify-center text-white text-5xl md:text-8xl font-bold"
      >
        Gourmet Bistro
      </motion.h1>
    </div>
  );
};

export default HeroSection;
