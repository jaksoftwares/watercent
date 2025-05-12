"use client";

import { useState } from "react";
import Image from "next/image";

const OrderPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "water",
    quantity: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle order submission (API call or redirect)
    alert("Order submitted successfully!");
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/order-now.jpg"
            alt="Place an Order"
            fill
            quality={100}
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Place Your Order</h1>
          <p className="text-lg">Fast, reliable delivery for water, gas, and accessories.</p>
        </div>
      </section>

      {/* Order Form Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">Order Details</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block font-medium text-gray-700 mb-1">Full Name</label>
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
              <label className="block font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-700 mb-1">Delivery Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md p-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md p-3"
                >
                  <option value="water">Water Refill</option>
                  <option value="gas">Gas Refill</option>
                  <option value="accessories">Accessories</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-gray-700 mb-1">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={form.quantity}
                  onChange={handleChange}
                  min={1}
                  className="w-full border border-gray-300 rounded-md p-3"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition"
            >
              Submit Order
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
