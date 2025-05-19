import Image from "next/image";


const Hero = () => {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] bg-blue-600 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg1.jpg"
          alt="WaterCent Services"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6 sm:px-12">
        <div className="max-w-lg">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Clean Water, Safe Gas & Reliable Services for You
          </h1>
          <p className="text-xl mb-6">
            At WaterCent, we provide top-quality water refills, gas can refills, and accessories to ensure your home and business run smoothly.
          </p>
          <div>
            <a
              href="/order"
              className="inline-block bg-yellow-500 text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
