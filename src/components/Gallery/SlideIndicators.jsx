export default function SlideIndicators({
  galleryImages,
  currentSlide,
  goToSlide,
}) {
  return (
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
  );
}
