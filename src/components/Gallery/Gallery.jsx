import { useState, useRef, useEffect } from "react";
import { galleryImages } from "./galleryData";
import { services } from "./servicesData";
import GalleryCarousel from "./GalleryCarousel";
import GalleryThumbnails from "./GalleryThumbnails";
import SlideIndicators from "./SlideIndicators";
import ServiceGrid from "./ServiceGrid";
import Car from "../header/Car";
import { motion } from "framer-motion";

export default function Gallery({ sectionRef }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeServiceId, setActiveServiceId] = useState(null);
  const carouselRef = useRef(null);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  const prevSlide = () =>
    setCurrentSlide(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );

  useEffect(() => {
    handleScrollToThumbnail(currentSlide);
  }, [currentSlide]);

  const handleScrollToThumbnail = (i) => {
    if (carouselRef.current) {
      const carouselWidth = carouselRef.current.offsetWidth;
      const thumbnailWidth = carouselRef.current.children[0].offsetWidth;
      const thumbnailLeft = carouselRef.current.children[i].offsetLeft;
      carouselRef.current.style.scrollBehavior = "smooth";
      const midPoint = carouselWidth / 2;
      const distance = thumbnailLeft - midPoint + (thumbnailWidth - 32) / 2;

      carouselRef.current.scrollTo({ left: distance });
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Нашата <span className="text-primary-500">Работа</span>
          </h2>
          <p className="text-xl text-neutral-200 max-w-3xl mx-auto leading-relaxed">
            Разгледай галерията ни от автомобили върнали своя блясък.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <GalleryCarousel
            galleryImages={galleryImages}
            currentSlide={currentSlide}
            nextSlide={nextSlide}
            prevSlide={prevSlide}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <GalleryThumbnails
            galleryImages={galleryImages}
            currentSlide={currentSlide}
            goToSlide={goToSlide}
            carouselRef={carouselRef}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <SlideIndicators
            galleryImages={galleryImages}
            currentSlide={currentSlide}
            goToSlide={goToSlide}
          />
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          ref={sectionRef}
        >
          <ServiceGrid
            services={services}
            activeServiceId={activeServiceId}
            toggleService={toggleService}
          />
        </motion.div>
      </div>
    </section>
  );
}
