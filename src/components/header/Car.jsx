import { useEffect, useRef } from "react";
import carImage from "../../assets/sportscar.png"; // your chosen car

export default function Car() {
  const carRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const gallery = document.getElementById("gallery");
      if (!gallery || !carRef.current) return;

      const rect = gallery.getBoundingClientRect();
      const carWidth = 180;
      const galleryWidth = gallery.offsetWidth;
      const viewportHeight = window.innerHeight;

      // Only move car if Gallery is visible
      if (rect.bottom < 0 || rect.top > viewportHeight) return;

      // Normal scroll progress 0 → 1
      let progress =
        (viewportHeight - rect.top) / (viewportHeight + rect.height);
      progress = Math.min(Math.max(progress, 0), 1);

      // Amplify progress to move faster
      const speedFactor = 2; // increase for faster movement
      let fastProgress = Math.min(progress * speedFactor, 1);

      const maxMove = galleryWidth - carWidth;
      const translateX = maxMove * (1 - fastProgress);

      carRef.current.style.transform = `translateX(${translateX}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <img
      ref={carRef}
      src={carImage}
      alt="car"
      style={{
        position: "absolute",
        top: "-100px",
        left: "0",
        width: "180px",
        zIndex: 50,
      }}
    />
  );
}
