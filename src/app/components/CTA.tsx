// src/app/components/CTA.tsx
const CTA = () => {
    return (
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl mb-6">Place your order now or contact us for more information.</p>
        <a href="/order" className="bg-yellow-500 text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors">
          Order Now
        </a>
      </section>
    );
  };
  
  export default CTA;
  