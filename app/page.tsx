import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Speakers from "./components/Speakers";
import Sponsors from "./components/Sponsors";
import Register from "./components/Register";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Tracks />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Register />
      <Footer />
    </main>
  );
}
