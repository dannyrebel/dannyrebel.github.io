import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact/Contact";

import { useRef } from "react";

function App() {
  const contactsRef = useRef(null);

  const handleScroll = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <Hero onScrollToContacts={handleScroll} />
      <About />
      <Gallery />
      <Contact sectionRef={contactsRef} />
    </div>
  );
}

export default App;
