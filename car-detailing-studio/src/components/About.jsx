export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-linear-to-br from-neutral-50 to-neutral-100"
    >
      <div className="font-main max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-accent-950 mb-6">
            За <span className="text-primary-500">нас</span>
          </h2>
          <p className="text-xl text-neutral-800 max-w-3xl mx-auto leading-relaxed">
            Добре дошли в{" "}
            <span className="text-primary-500">AutoAura Detailing Studio</span>{" "}
            – мястото, където автомобилът ви възвръща своята истинска
            <span className="text-primary-500"> аура</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                С повече от 5 години опит в света на професионалния детайлинг,
                ние съчетаваме прецизност, знания и безкомпромисно качество.
                Преминахме редица обучения в GK Autodetailing Academy и
                продължаваме да надграждаме , за да гарантираме внимание към
                всеки детайл и безупречен резултат.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Работим единствено с качествени продукти като Nanolex Germany,
                което ни позволява да осигурим перфектна защита и огледален
                блясък. Всеки автомобил напуска студиото ни с аура на
                съвършенство — чист, защитен и готов да впечатлява.
              </p>
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
