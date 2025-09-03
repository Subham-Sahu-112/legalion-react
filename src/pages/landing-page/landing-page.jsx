import { Link } from "react-router-dom";
import './landing-page.css';
import Navbar from "../../layouts/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import TestimonialSection from "./components/TestimonialSection";
import ContactSection from "./components/ContactSection";
import Footer from "../../layouts/Footer";

export default function LandingPage() {
  return (
    <div className="landing-page">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}