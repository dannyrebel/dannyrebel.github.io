import { useState } from "react";
import { galleryImages } from "./galleryData";
import { services } from "./servicesData";
import GalleryCarousel from "./GalleryCarousel";
import GalleryThumbnails from "./GalleryThumbnails";
import SlideIndicators from "./SlideIndicators";
import ServiceGrid from "./ServiceGrid";
import Car from "../header/Car";

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceId, setActiveServiceId] = useState(null);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  const goToSlide = (index) => setCurrentSlide(index);
  const toggleService = (id) =>
    setActiveServiceId((prev) => (prev === id ? null : id));

  return (
    <section
      id="gallery"
      className="py-20 bg-linear-to-br from-accent-950 to-accent-900 relative"
    >
      <Car />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-primary-500">Work</span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Witness the transformation of vehicles through our professional
            detailing services
          </p>
        </div>

        {/* Carousel */}
        <GalleryCarousel
          galleryImages={galleryImages}
          currentSlide={currentSlide}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />

        <GalleryThumbnails
          galleryImages={galleryImages}
          currentSlide={currentSlide}
          goToSlide={goToSlide}
        />

        <SlideIndicators
          galleryImages={galleryImages}
          currentSlide={currentSlide}
          goToSlide={goToSlide}
        />

        {/* Services */}
        <ServiceGrid
          services={services}
          activeServiceId={activeServiceId}
          toggleService={toggleService}
        />

        {/* CTA */}
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
