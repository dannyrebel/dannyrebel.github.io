import { useState, useRef } from "react";
import { galleryImages } from "./galleryData";
import { services } from "./servicesData";
import GalleryCarousel from "./GalleryCarousel";
import GalleryThumbnails from "./GalleryThumbnails";
import SlideIndicators from "./SlideIndicators";
import ServiceGrid from "./ServiceGrid";
import Car from "../header/Car";

export default function Gallery({ sectionRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceId, setActiveServiceId] = useState(null);
  const carouselRef = useRef(null)
  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  const handleScrollToThumbnail = (i) => {
    if(carouselRef.current){
      const thumbnailWidth = carouselRef.current.children[0].offsetWidth
      console.log('Width of thumbnail = ', thumbnailWidth, "Scrolling ", thumbnailWidth*i - (thumbnailWidth+20), ' pixels')
      carouselRef.current.style.scrollBehavior = 'smooth'
      carouselRef.current.scrollTo({left: (thumbnailWidth+12)*i - (thumbnailWidth)*2})
    } 
  };
  const goToSlide = (index) => {
    setCurrentSlide(index)
    handleScrollToThumbnail(index)
  };

  const toggleService = (id) =>
    setActiveServiceId((prev) => (prev === id ? null : id));

  return (
    <section
      id="gallery"
      className="font-main py-20 bg-linear-to-br from-accent-950 to-accent-900 relative"
    >
      <Car />
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Нашата <span className="text-primary-500">Работа</span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Разгледай галерията ни от автомобили върнали своя блясък.
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
          carouselRef={carouselRef}
        />

        <SlideIndicators
          galleryImages={galleryImages}
          currentSlide={currentSlide}
          goToSlide={goToSlide}
        />

        {/* Services */}
        <div ref={sectionRef}>
          <ServiceGrid
            services={services}
            activeServiceId={activeServiceId}
            toggleService={toggleService}
          />
        </div>
      </div>
    </section>
  );
}
