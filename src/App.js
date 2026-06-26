import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

export default App;