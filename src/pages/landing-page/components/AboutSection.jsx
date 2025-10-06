import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AboutSection.css";

export default function AboutSection() {
  const Navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("excellence");

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            <div className="abt-section-badge">
              <i className="fas fa-info-circle"></i>
              <span>About Legalion</span>
            </div>

            <p className="about-description">
              At <strong>LEGALION</strong>, we operate at the intersection of
              law and technology, delivering integrated solutions that empower
              modern businesses to thrive. As a multidisciplinary firm, we
              understand that today's challenges demand more than traditional
              services — they require a seamless blend of legal acumen, digital
              innovation, and strategic foresight.
            </p>

            <div className="abt-section-badge">
              <i className="fas fa-info-circle"></i>
              <span>Our Mission and Vision</span>
            </div>

            <p className="about-description">
              Our mission is to provide end-to-end support for businesses
              navigating both legal complexities and digital transformation.
              Whether you are addressing legal disputes, ensuring regulatory
              compliance, or scaling your digital presence, LEGALION brings
              together legal professionals, technologists, and marketing experts
              to drive real, measurable results.
            </p>

            <div className="btn-switch">
              <button
                className={`abt-section-badge ${
                  activeTab === "excellence" ? "active" : ""
                }`}
                onClick={() => setActiveTab("excellence")}
              >
                <i className="fas fa-info-circle"></i>
                <span>Our Areas of excelence</span>
              </button>

              <button
                className={`abt-section-badge ${
                  activeTab === "services" ? "active" : ""
                }`}
                onClick={() => setActiveTab("services")}
              >
                <i className="fas fa-info-circle"></i>
                <span>Our Services</span>
              </button>
            </div>

            <div className="about-partition">
              {activeTab === "excellence" ? (
                <>
                  <div className="about-features">
                    <div className="abt-feature-item">
                      <div className="abt-feature-icon">
                        <i className="fas fa-gavel"></i>
                      </div>
                      <div className="abt-feature-content">
                        <h4>Dispute Resolution</h4>
                        <p>
                          Technology-enhanced dispute resolution services
                          designed to resolve conflicts efficiently and
                          strategically.
                        </p>
                      </div>
                    </div>

                    <div className="abt-feature-item">
                      <div className="abt-feature-icon">
                        <i className="fas fa-file-contract"></i>
                      </div>
                      <div className="abt-feature-content">
                        <h4>IBC Legal Advisory</h4>
                        <p>
                          Deep expertise in Insolvency and Bankruptcy Code
                          matters, helping businesses with restructuring and
                          compliance.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="why-choose-section">
                    <h3 className="abt-section-subtitle">
                      Why Choose LEGALION?
                    </h3>
                    <div className="choice-reasons">
                      <div className="reason-item">
                        <div className="reason-icon">
                          <i className="fas fa-handshake"></i>
                        </div>
                        <div className="reason-content">
                          <h5>Integrated Approach</h5>
                          <p>
                            Unlike traditional firms, we combine legal expertise
                            with technology solutions under one roof.
                          </p>
                        </div>
                      </div>
                      <div className="reason-item">
                        <div className="reason-icon">
                          <i className="fas fa-trophy"></i>
                        </div>
                        <div className="reason-content">
                          <h5>Proven Results</h5>
                          <p>
                            Track record of successful case resolutions and
                            business growth through our comprehensive services.
                          </p>
                        </div>
                      </div>
                      <div className="reason-item">
                        <div className="reason-icon">
                          <i className="fas fa-users-cog"></i>
                        </div>
                        <div className="reason-content">
                          <h5>Expert Team</h5>
                          <p>
                            Multidisciplinary team of legal professionals,
                            technologists, and business strategists.
                          </p>
                        </div>
                      </div>
                      <div className="reason-item">
                        <div className="reason-icon">
                          <i className="fas fa-clock"></i>
                        </div>
                        <div className="reason-content">
                          <h5>Efficient Solutions</h5>
                          <p>
                            Technology-enhanced processes that deliver faster,
                            more cost-effective results.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="abt-services-grid">
                  <div
                    className="abt-service-card"
                    onClick={() => Navigate("/service/legal")}
                  >
                    <img
                      src="/Images/Lawist.jpg"
                      alt="Legal Service"
                      className="service-card-image"
                    />
                    <h4>LEGAL SERVICE</h4>
                    <p>
                      We provide trusted legal services tailored to individuals,
                      families, and businesses. Our experienced attorneys are
                      committed to protecting your rights and achieving the best
                      possible outcome.
                    </p>
                  </div>

                  <div
                    className="abt-service-card"
                    onClick={() => Navigate("/service/it")}
                  >
                    <img
                      src="/Images/Information-Technology.jpg"
                      alt="IT Service"
                      className="service-card-image"
                    />
                    <h4>IT SERVICE</h4>
                    <p>
                      We deliver smart, secure, and scalable IT solutions to
                      help businesses operate efficiently and stay ahead in the
                      digital age. From support to strategy, we've got your tech
                      covered.
                    </p>
                  </div>

                  <div
                    className="abt-service-card"
                    onClick={() => Navigate("/service/business")}
                  >
                    <img
                      src="/Images/digital.jpg"
                      alt="Business Branding"
                      className="service-card-image"
                    />
                    <h4>BUSINESS BRANDING</h4>
                    <p>
                      We help businesses build powerful, memorable brands that
                      connect with their audience. From logo design to brand
                      strategy, we bring your vision to life.
                    </p>
                  </div>

                  <div
                    className="abt-service-card"
                    onClick={() => Navigate("/service/consulting")}
                  >
                    <img
                      src="/Images/business-consulting.jpg"
                      alt="Consulting"
                      className="service-card-image"
                    />
                    <h4>CONSULTING</h4>
                    <p>
                      We provide expert consulting services to help businesses
                      solve problems, improve performance, and achieve
                      sustainable growth. Strategic advice tailored to your
                      goals.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
