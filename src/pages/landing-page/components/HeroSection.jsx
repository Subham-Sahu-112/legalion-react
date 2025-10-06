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
          <h1 className="hero-title">
            Partnering success with our &nbsp;
            <br />
            <span style={{ color: "white" }}>
              AI enabled Process & Tools
            </span>
          </h1>

          <p className="hero-description">
            Ensure your business growth with our "End2End" consulting
          </p>

          <div className="hero-stats">
            <div className="hero-stat-item">
              <div className="hero-stat-number">500+</div>
              <div className="hero-stat-label">Successful Cases</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">200+</div>
              <div className="hero-stat-label">Happy Clients</div>
            </div>
            <div className="hero-stat-item">
              <div className="hero-stat-number">100+</div>
              <div className="hero-stat-label">
                Years of Integrated Consultant Experiences
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
