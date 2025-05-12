'use client';

import Image from 'next/image';
import Hero from './components/Hero';
// import ServiceCard from './components/ServiceCard';
import ServicesOverview from './components/serviceOverview';
import CTA from './components/CTA';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* About Us Section */}
          <section className="py-20 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl font-bold text-blue-600 mb-6">About WaterCent</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <span className="font-semibold text-blue-500">WaterCent</span>, we are committed to delivering high-quality water, gas, and accessories tailored for homes and businesses.
                  Our focus is on <span className="text-blue-600 font-medium">convenience, reliability</span>, and <span className="text-blue-600 font-medium">sustainability</span> in every service we provide.
                </p>
              </div>

              {/* Image */}
              <div className="flex-1">
                <Image
                  src="/about-us.jpg"
                  alt="About WaterCent"
                  width={700}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-auto"
                />
              </div>
            </div>
          </section>

      

          {/* Services Overview Section */}
          {/* <section className="py-16 bg-gray-100 px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
              <p className="text-lg text-gray-600 mt-2">
                Whether it&apos;s a refill, delivery, or accessories — WaterCent has your needs covered.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                title="Water Refills"
                description="Clean, purified water delivered or refilled at your doorstep."
                link="/services/water"
                image="/water-refilling-station.jpg"
              />
              <ServiceCard
                title="Gas Refills"
                description="Safe, reliable gas deliveries and cylinder exchanges."
                link="/services/gas"
                image="/gas-refills.jpg"
              />
              <ServiceCard
                title="Accessories"
                description="Dispensers, gas cans, filters & more — shop all accessories."
                link="/services/accessories"
                image="/accessories.jpg"
              />
            </div>
          </section> */}
          <ServicesOverview />

          {/* Testimonials Section */}
          <section className="py-16 bg-white text-center px-4">
            <h2 className="text-3xl font-bold text-blue-600 mb-12">What Our Customers Say</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 italic">
                  “WaterCent has been a game-changer for our business. Prompt deliveries and excellent quality!”
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <Image src="/images/testimonial1.jpg" alt="John Doe" width={60} height={60} className="rounded-full" />
                  <p className="font-semibold text-gray-900 mt-2">John Doe, Business Owner</p>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <p className="text-lg text-gray-700 italic">
                  “I love the convenience of WaterCent&apos;s delivery. It’s affordable, timely, and hassle-free.”
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <Image src="/images/testimonial2.jpg" alt="Jane Smith" width={60} height={60} className="rounded-full" />
                  <p className="font-semibold text-gray-900 mt-2">Jane Smith, Homeowner</p>
                </div>
              </div>
            </div>
          </section>

      {/* Call to Action */}
      <CTA />

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-600">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">How can I order water or gas refills?</h3>
            <p className="text-gray-700 mt-2">
              Visit our order page, choose your service, enter your location, and we’ll handle the rest.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">What areas do you serve?</h3>
            <p className="text-gray-700 mt-2">
              We serve most neighborhoods in the city. Check our delivery map during checkout to confirm your area.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Can I buy accessories online?</h3>
            <p className="text-gray-700 mt-2">
              Yes! Our online store offers a wide range of accessories ready for delivery to your home or business.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
