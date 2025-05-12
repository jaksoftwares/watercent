import Image from "next/image";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg1.jpg"
            alt="About WaterCent"
            fill
            quality={100}
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">About WaterCent</h1>
          <p className="text-lg">
            Clean water, safe gas, and trusted delivery — built on reliability and care.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              WaterCent is more than a delivery service — we’re a mission-driven team
              focused on making access to clean water and safe gas effortless for homes and businesses.
              Since our founding, we’ve prioritized customer trust, affordability, and eco-conscious practices.
            </p>
          </div>
          <div className="w-full h-80 relative rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about-team.jpg"
              alt="WaterCent Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-left mt-10">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">
                We guarantee timely deliveries and consistent service quality, every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Sustainability</h3>
              <p className="text-gray-600">
                From refill models to efficient routing, we focus on reducing environmental impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our team is here to serve — always with transparency, support, and a smile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Experience Service with Purpose</h2>
        <p className="text-lg mb-6">
          Whether you&apos;re a household or a business, WaterCent is ready to serve you with care.
        </p>
        <a
          href="/services"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Explore Our Services
        </a>
      </section>
    </div>
  );
};

export default AboutPage;
