"use client";

import { useState } from "react";
import Image from "next/image";
import Marquee from "./Marquee";

const Reservation_02 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    specialRequests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {" "}
      <section className="w-full bg-black text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase text-gray-400">
              Book Your Table Now
            </p>
            <h2 className="text-4xl font-bold mt-2">
              We look forward to serving you at{" "}
              <span className="text-yellow-400">Gourmet Bistro! </span> Fill out
              the form to book your table.
            </h2>
            <div className="mt-6">
              <p className="text-lg font-semibold">Open Hours</p>
              <p className="mt-2">Mon - Thu: 10:00 AM - 09:00 PM</p>
              <p>Fri - Sat: 09:00 AM - 10:00 PM</p>
              <p>Sun: Closed</p>
            </div>
          </div>

          {/* Reservation Form */}
          <div className="w-full md:w-1/2 bg-white text-black p-8 rounded-lg shadow-lg">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border p-3 rounded w-full"
                required
              />
              <div className="flex gap-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="border p-3 rounded w-1/2"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="border p-3 rounded w-1/2"
                  required
                />
              </div>
              <div className="flex gap-4">
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="border p-3 rounded w-1/3"
                  required
                />
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="border p-3 rounded w-1/3"
                  required
                />
                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="Number of Persons"
                  className="border p-3 rounded w-1/3"
                  required
                />
              </div>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Special Requests"
                className="border p-3 rounded w-full"
                rows={3}
              />
              <button
                type="submit"
                className="bg-yellow-500 text-black px-6 py-3 rounded w-full font-semibold"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>

        {/* Footer Section */}
        <footer className="w-full bg-black text-white py-10 mt-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold">Gourmet Bistro</h3>
              <p className="mt-2">address</p>
              <p className="mt-1">+123456</p>
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                🌐
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                📷
              </a>
            </div>
          </div>
          <div className="text-center text-gray-500 mt-6 text-sm">
            Copyright © 2025 All Rights Reserved.
          </div>
        </footer>
      </section>
      <Marquee />
    </>
  );
};

export default Reservation_02;
