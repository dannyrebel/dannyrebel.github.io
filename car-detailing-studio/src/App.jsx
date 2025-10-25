import Navbar from "./components/header/Navbar";
import Hero from "./components/header/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;
