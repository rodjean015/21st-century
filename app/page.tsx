import AboutUs from "./components/AboutUs";
import ContactFooter from "./components/ContactFooter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Program from "./components/Program";
import Highlight from "./components/Highlight";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <AboutUs />
      <Program />
      <Highlight />
      <ContactFooter />
    </main>
  );
}