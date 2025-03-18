"use client";

import { useState } from "react";
import Image from "next/image";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "2025-03-18",
    time: "9:00 am",
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
    <section className="w-full bg-white py-16 text-center">
      <h2 className="text-4xl font-bold">BOOK A TABLE</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mt-2">
        Closed Sunday night, Mondays & Tuesdays. Due to the vast amount of
        no-shows, all bookings must now be secured with a credit card which will
        be charged $20 if you do not show up for your booking.
      </p>

      {/* Reservation Form */}
      <form className="flex flex-col items-center gap-4 mt-6 w-full max-w-md mx-auto">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="border p-2 rounded w-full"
          required
        />

        <textarea
          name="specialRequests"
          value={formData.specialRequests}
          onChange={handleChange}
          placeholder="Special Requests"
          className="border p-2 rounded w-full"
          rows={3}
        />

        <button
          type="submit"
          className="bg-orange-600 text-white px-6 py-2 rounded w-full"
        >
          Reserve Now
        </button>
      </form>

      {/* Menu Options */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 px-4 md:px-16">
        {[
          { title: "SPRING MENUS", img: "/spring_menus.jpg" },
          { title: "DESSERTS MENUS", img: "/desserts_menus.jpg" },
          { title: "WINE LISTS", img: "/wine_lists.jpg" },
          { title: "UPCOMING EVENTS", img: "/upcoming_events.jpg" },
        ].map((item, index) => (
          <div
            key={index}
            className="relative w-full h-80 group overflow-hidden rounded-lg"
          >
            <Image
              src={item.img}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-semibold">{item.title}</h3>
              <button className="text-orange-400 mt-2">DISCOVER MORE</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reservation;
