import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-container">
          <div className="about-content">
            <div className="section-badge">
              <i className="fas fa-info-circle"></i>
              <span>About Legalion</span>
            </div>

            <h2 className="about-section-title">
              <span className="gradient-text">Where Legal Expertise</span>&nbsp;
              Meets Digital Innovation
            </h2>

            <p className="about-description">
              At <strong>LEGALION</strong>, we operate at the intersection of
              law and technology, delivering integrated solutions that empower
              modern businesses to thrive. As a multidisciplinary firm, we
              understand that today's challenges demand more than traditional
              services — they require a seamless blend of legal acumen, digital
              innovation, and strategic foresight.
            </p>

            <p className="about-description">
              Our mission is to provide end-to-end support for businesses
              navigating both legal complexities and digital transformation.
              Whether you are addressing legal disputes, ensuring regulatory
              compliance, or scaling your digital presence, LEGALION brings
              together legal professionals, technologists, and marketing experts
              to drive real, measurable results.
            </p>

            <div className="about-partition">
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-gavel"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Dispute Resolution</h4>
                    <p>
                      Technology-enhanced dispute resolution services designed
                      to resolve conflicts efficiently and strategically.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-file-contract"></i>
                  </div>
                  <div className="feature-content">
                    <h4>IBC Legal Advisory</h4>
                    <p>
                      Deep expertise in Insolvency and Bankruptcy Code matters,
                      helping businesses with restructuring and compliance.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-briefcase"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Corporate Legal Services</h4>
                    <p>
                      Full-spectrum legal services from contracts and governance
                      to advisory and compliance.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-laptop"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Digital & Tech Solutions</h4>
                    <p>
                      Web/app development, digital marketing, branding, UI/UX
                      design, and ready-to-use software products.
                    </p>
                  </div>
                </div>
              </div>

              <div className="why-choose-section">
                <h3 className="section-subtitle">Why Choose LEGALION?</h3>
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
                        Track record of successful case resolutions and business
                        growth through our comprehensive services.
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
                        Technology-enhanced processes that deliver faster, more
                        cost-effective results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn btn-primary">
                <span>Learn More About Us</span>
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
