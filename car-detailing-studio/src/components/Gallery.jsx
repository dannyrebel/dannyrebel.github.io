import { useState } from "react";

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "Exterior Detailing",
      description: "Complete exterior wash, wax, and protection",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      title: "Interior Deep Clean",
      description: "Thorough interior cleaning and conditioning",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      title: "Paint Correction",
      description: "Professional paint polishing and restoration",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
      title: "Ceramic Coating",
      description: "Premium ceramic protection for long-lasting shine",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      title: "Engine Bay Cleaning",
      description: "Detailed engine compartment cleaning",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
      title: "Wheel & Tire Care",
      description: "Professional wheel cleaning and tire dressing",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section
      id="gallery"
      className="py-20 bg-linear-to-br from-accent-950 to-accent-900"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-primary-500">Work</span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Witness the transformation of vehicles through our professional
            detailing services
          </p>
        </div>

        {/* Main Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Main Image */}
            <div className="relative h-full">
              <img
                src={galleryImages[currentSlide].src}
                alt={galleryImages[currentSlide].title}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-accent-950/80 via-accent-950/20 to-transparent"></div>

              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {galleryImages[currentSlide].title}
                </h3>
                <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
                  {galleryImages[currentSlide].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-primary-500/90 hover:bg-primary-500 text-accent-950 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500/90 hover:bg-primary-500 text-accent-950 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex justify-center">
            <div className="flex gap-3 overflow-x-auto pb-2 max-w-full px-4 py-2">
              {galleryImages.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => goToSlide(index)}
                  className={`relative shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden transition-all duration-300 ${
                    index === currentSlide
                      ? "ring-4 ring-primary-500 scale-105"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                  {index === currentSlide && (
                    <div className="absolute inset-0 bg-primary-500/20"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary-500 scale-125"
                    : "bg-neutral-400 hover:bg-neutral-300"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.src}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent-950/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h4>
                  <p className="text-neutral-200 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Vehicle?
          </h3>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto">
            Book your detailing service today and experience the TOSHKO G
            difference
          </p>
        </div>
      </div>
    </section>
  );
}
