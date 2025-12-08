export default function GalleryThumbnails({
  galleryImages,
  currentSlide,
  goToSlide,
  carouselRef
}) {
  return (
    <div className="mt-8 flex justify-center">
      <div ref={carouselRef} className="flex gap-3 overflow-x-auto pb-2 max-w-full px-4 py-2">
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
              <div className="absolute inset-0 bg-primary-500/20" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
