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
      <section className="w-full bg-[#1f2120] text-white py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <p className="text-sm uppercase text-yellow-50">
              Book Your Table Now
            </p>
            <h2 className="text-4xl font-bold mt-2 uppercase">
              We look forward to serving you at{" "}
              <span className="text-yellow-50">Gourmet Bistro! </span> Fill out
              the form to book your table.
            </h2>
            <div className="mt-6">
              <p className="text-lg font-semibold">Open Hours</p>
              <p className="mt-2 mb-2">Mon - Thu: 10:00 AM - 09:00 PM</p>
              <p className="mb-2">Fri - Sat: 09:00 AM - 10:00 PM</p>
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
                className="bg-yellow-50 hover:bg-[#eb9e18] text-black px-6 py-3 rounded w-full font-semibold"
              >
                Reserve Now
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* <Marquee /> */}
    </>
  );
};

export default Reservation_02;
