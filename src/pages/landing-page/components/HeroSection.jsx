import { useState } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [isMobile] = useState(window.innerWidth <= 768);
  return (
    <section
      id="home"
      className="hero"
      style={{ padding: "0", paddingTop: "100px" }}
    >
      <div className="hero-container">
        <div className="hero-video">
          <video
            src={
              isMobile
                ? "https://ik.imagekit.io/wiqxywfta/Legalion.mp4?updatedAt=1758198657909"
                : "https://ik.imagekit.io/wiqxywfta/Hero-section.mp4?updatedAt=1758096425577"
            }
            autoPlay
            muted
            loop
            playsInline
          ></video>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-star"></i>
            <span>Where Law Meets Technology</span>
          </div>

          <h1 className="hero-title">
            Partnering success with our &nbsp;
            <br />
            <span className="gradient-text">
              AI enabled Legal Tech Process and Tool
            </span>
          </h1>

          <p className="hero-description">
            Enable your business sustenance with our E2E consulting
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Active Cases</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">40+</div>
              <div className="stat-label">
                Years Integrated Consultant Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
