import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2">
              {" "}
              <Image
                src="/restaurant_logo.png"
                alt="restaurant_logo"
                width={70}
                height={70}
              />
              <h3 className="text-2xl font-bold">Gourmet Bistro</h3>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <Image
                src="/location_icon.png"
                alt="restaurant_logo"
                width={20}
                height={20}
              />
              <p className="mt-2">
                175b Stephen Street, Yarraville VIC 3013, Australia
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/phone_icon.png"
                alt="phone_icon"
                width={20}
                height={20}
              />
              <p className="mt-2">+61 3 9039 6304</p>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 mt-6 text-sm">
          Copyright © 2025 All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
