"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full h-screen"
      >
        {/* Image */}
        <Image
          src="/aboutustest2.jpg"
          alt="About Us Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 w-full h-full"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 flex flex-col items-center justify-end text-center px-6 pb-20">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Our Culinary Experience
          </h2>

          {/* Description */}
          <p className="text-lg text-[#a97b3d] max-w-3xl">
            At Gourmet Bistro, we serve a blend of traditional and contemporary
            dishes, made with the finest ingredients. Our chefs bring the best
            of global flavors to your table.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
