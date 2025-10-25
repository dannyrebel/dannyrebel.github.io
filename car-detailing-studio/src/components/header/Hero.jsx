export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=1920&q=80')",
          filter: "blur(8px)",
        }}
      ></div>

      {/* Gradient Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-950/80 via-accent-950/60 to-accent-900/70"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 pt-20 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
          Premium Car <span className="text-primary-500">Detailing</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-neutral-200 mb-12 max-w-4xl mx-auto leading-relaxed">
          Elevate your ride with professional detailing services that bring out
          the best in your vehicle
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary-500 text-accent-950 px-10 py-5 rounded-xl text-xl font-bold hover:bg-primary-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
            Book Now
          </button>
          <button className="border-2 border-primary-500 text-primary-500 px-10 py-5 rounded-xl text-xl font-bold hover:bg-primary-500 hover:text-accent-950 transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
