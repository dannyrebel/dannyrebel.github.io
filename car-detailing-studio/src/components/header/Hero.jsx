export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image - Replace the URL with your car image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80')",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-accent-950/70"></div>

      <div className="relative z-10 text-center px-4 pt-20">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Premium Car <span className="text-primary-500">Detailing</span>
        </h1>
        <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-2xl mx-auto">
          Elevate your ride with professional detailing services that bring out
          the best in your vehicle
        </p>
        <button className="bg-primary-500 text-accent-950 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-400 transition transform hover:scale-105">
          Book Now
        </button>
      </div>
    </section>
  );
}
