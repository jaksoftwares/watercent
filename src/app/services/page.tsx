// app/services/page.tsx
import ServicesOverview from "../components/serviceOverview";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-24 px-6 text-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/bg1.jpg"
      alt="Services Background"
      fill
      quality={100} // makes the image sharper
      priority
      className="object-cover"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">Our Services</h1>
    <p className="text-lg">
      At WaterCent, we provide essential refills, safe deliveries, and reliable accessories — 
      tailored to make your life easier.
    </p>
  </div>
</section>


      {/* Services Overview Cards */}
      <ServicesOverview />

      {/* Optional Detailed Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">Why Choose WaterCent?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We pride ourselves on fast, reliable service across water and gas delivery — and back it with
            top-tier customer support. From residential to commercial needs, we’re here to support you with eco-friendly practices and efficient logistics.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
