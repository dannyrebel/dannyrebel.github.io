import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";

import { useRef } from "react";

function App() {
  const contactsRef = useRef(null);
  const servicesRef = useRef(null);

  const handleScrollToContacts = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToGallery = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <Hero
        onScrollToContacts={handleScrollToContacts}
        onScrollToServices={handleScrollToGallery}
      />
      <About />
      <Gallery sectionRef={servicesRef} />
      <Contact sectionRef={contactsRef} />
    </div>
  );
}

export default App;
