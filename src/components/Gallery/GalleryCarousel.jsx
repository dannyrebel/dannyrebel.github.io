export default function GalleryCarousel({
  galleryImages,
  currentSlide,
  nextSlide,
  prevSlide,
}) {
  const current = galleryImages[currentSlide];

  return (
    <div className="relative">
      <div className="relative h-96 md:h-[500px] lg:h-[800px] rounded-2xl overflow-hidden">
        <img
          src={current.src}
          alt={current.title}
          className="w-full h-full object-cover transition-all duration-500"
        />

        <div className="absolute inset-0 bg-linear-to-t from-accent-950/30 via-accent-950/20 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            {current.title}
          </h3>
          <p className="text-lg md:text-xl text-neutral-200 max-w-2xl">
            {current.description}
          </p>
        </div>
      </div>

      {/* Arrows */}
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
  );
}
