import ServiceCard from './ServiceCard';

const services = [
  {
    title: "Water Refills",
    description: "Clean, purified water delivered or refilled at your doorstep.",
    link: "/services/water",
    image: "/water-refilling-station.jpg",
  },
  {
    title: "Gas Refills",
    description: "Safe, reliable gas deliveries and cylinder exchanges.",
    link: "/services/gas",
    image: "/gas-refills.jpg",
  },
  {
    title: "Accessories",
    description: "Dispensers, gas cans, filters & more — shop all accessories.",
    link: "/services/accessories",
    image: "/accessories.jpg",
  },
];

const ServicesOverview = () => {
  return (
    <section className="py-20 bg-gray-100 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-blue-600">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">
          Whether it&apos;s a refill, delivery, or accessories — WaterCent has your needs covered.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default ServicesOverview;
