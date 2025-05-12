"use client";

import { useState } from "react";
import Image from "next/image";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can hook this into EmailJS, Resend, or Supabase here
    alert("Your message has been sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-24 text-white text-center px-6 overflow-hidden">
        <Image
          src="/contact.jpg"
          alt="Contact Background"
          fill
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
        <div className="relative z-20 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">Have questions or need support? We&apos;re here to help.</p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Contact Details */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-600">Reach Out</h2>
            <p className="text-gray-700">
              Contact us anytime via phone, email, or visit us during working hours.
            </p>
            <div className="space-y-3 text-gray-700">
              <p><strong>Phone:</strong> +254 712 345678</p>
              <p><strong>Email:</strong> support@watercent.co.ke</p>
              <p><strong>Address:</strong> 123 Clean Springs Ave, Nairobi, Kenya</p>
              <p><strong>Hours:</strong> Mon - Sat: 8am – 6pm</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full border border-gray-300 rounded-md p-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="w-full h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.005845100446!2d36.8274907!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f4f5f5b9b97%3A0x6c5f7e3199de4a91!2s123%20Clean%20Springs%20Ave%2C%20Nairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1627369455680!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
