export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-neutral-50 to-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-accent-950 mb-6">
            About <span className="text-primary-500">TOSHKO G</span>
          </h2>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Professional car detailing services with over 10 years of experience
            in transforming vehicles into showroom-quality masterpieces.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-accent-950">
                Excellence in Every Detail
              </h3>
              <p className="text-lg text-neutral-700 leading-relaxed">
                At TOSHKO G Detailing, we believe that every vehicle deserves
                the finest care. Our meticulous approach and premium products
                ensure your car not only looks stunning but is protected for the
                long haul.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                From luxury sedans to high-performance sports cars, we treat
                each vehicle with the respect and attention it deserves, using
                only the finest materials and techniques in the industry.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  500+
                </div>
                <div className="text-neutral-700">Cars Detailed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  10+
                </div>
                <div className="text-neutral-700">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  100%
                </div>
                <div className="text-neutral-700">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-500 mb-2">
                  24/7
                </div>
                <div className="text-neutral-700">Customer Support</div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Professional car detailing"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-accent-950/20 to-transparent"></div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-primary-500 text-accent-950 p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">Premium</div>
              <div className="text-sm">Quality Guaranteed</div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-accent-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-accent-950 mb-4">
              Professional Service
            </h4>
            <p className="text-neutral-700">
              Certified professionals with years of experience in automotive
              detailing and paint correction.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-accent-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-accent-950 mb-4">
              Time Efficient
            </h4>
            <p className="text-neutral-700">
              Quick turnaround times without compromising on quality. Your car
              back when you need it.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary-500 rounded-xl flex items-center justify-center mb-6">
              <svg
                className="w-8 h-8 text-accent-950"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h4 className="text-xl font-bold text-accent-950 mb-4">
              Premium Materials
            </h4>
            <p className="text-neutral-700">
              Only the finest products and materials are used to ensure the best
              results for your vehicle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
