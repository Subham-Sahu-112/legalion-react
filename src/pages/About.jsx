import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Srittam Das",
      position: "Chief Executive Consultant",
      specialization: "IT, Finance, Law",
      experience: "25+ Years Experience",
      image: "/Images/Client-1.jpg",
      description: "Leading expert in Insolvency and Bankruptcy Code with extensive experience in corporate restructuring and dispute resolution."
    },
  ];

  const milestones = [
    {
      year: "2018",
      title: "Foundation",
      description: "Legalion was established with a vision to merge legal expertise with digital innovation."
    },
    {
      year: "2020",
      title: "Digital Expansion",
      description: "Launched comprehensive IT and digital marketing services alongside our core legal practice."
    },
    {
      year: "2022",
      title: "IBC Specialization",
      description: "Became recognized specialists in Insolvency and Bankruptcy Code matters with multiple successful cases."
    },
    {
      year: "2024",
      title: "Integrated Solutions",
      description: "Achieved full integration of legal, technology, and business consulting services under one roof."
    }
  ];

  const coreValues = [
    {
      icon: "fas fa-balance-scale",
      title: "Integrity",
      description: "Unwavering commitment to ethical practices and transparent communication in all our dealings."
    },
    {
      icon: "fas fa-lightbulb",
      title: "Innovation",
      description: "Constantly evolving our services through technology and creative problem-solving approaches."
    },
    {
      icon: "fas fa-users",
      title: "Client-Centric",
      description: "Every solution is tailored to meet the unique needs and objectives of our clients."
    },
    {
      icon: "fas fa-award",
      title: "Excellence",
      description: "Delivering superior results through meticulous attention to detail and professional expertise."
    },
    {
      icon: "fas fa-handshake",
      title: "Collaboration",
      description: "Working closely with clients as partners to achieve their legal and business goals."
    },
    {
      icon: "fas fa-shield-alt",
      title: "Reliability",
      description: "Consistent, dependable service that our clients can trust in their most critical moments."
    }
  ];

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="about-hero-content">
            <div className="breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-separator">/</span>
              <span>About Us</span>
            </div>
            <h1 className="about-hero-title">
              About Legalion
            </h1>
            <p className="about-hero-subtitle">
              Where Legal Expertise Meets Digital Innovation
            </p>
            <p className="about-hero-description">
              We are a multidisciplinary firm operating at the intersection of law and technology, 
              delivering integrated solutions that empower modern businesses to thrive in today's complex landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="company-overview">
        <div className="container">
          <div className="overview-content">
            <div className="overview-text">
              <div className="section-badge">
                <i className="fas fa-building"></i>
                <span>Our Company</span>
              </div>
              <h2 className="section-title">
                Pioneering Integrated Legal & Technology Solutions
              </h2>
              <p className="overview-description">
                At <strong>LEGALION</strong>, we understand that today's challenges demand more than traditional 
                services — they require a seamless blend of legal acumen, digital innovation, and strategic foresight. 
                Our mission is to provide end-to-end support for businesses navigating both legal complexities and 
                digital transformation.
              </p>
              <p className="overview-description">
                Whether you are addressing legal disputes, ensuring regulatory compliance, or scaling your digital 
                presence, LEGALION brings together legal professionals, technologists, and marketing experts to 
                drive real, measurable results.
              </p>
              
              <div className="overview-stats">
                <div className="stat-item">
                  <div className="stat-number">150+</div>
                  <div className="stat-label">Cases Resolved</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Technology Projects</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">Years of Excellence</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="overview-image">
              <img src="/Images/law1.jpg" alt="Legalion Office" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <i className="fas fa-heart"></i>
              <span>Our Values</span>
            </div>
            <h2 className="section-title">
              The Principles That <span className="gradient-text">Guide Us</span>
            </h2>
            <p className="section-description">
              Our core values shape every interaction, decision, and solution we provide to our clients.
            </p>
          </div>
          
          <div className="values-grid">
            {coreValues.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">
                  <i className={value.icon}></i>
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="our-journey">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <i className="fas fa-road"></i>
              <span>Our Journey</span>
            </div>
            <h2 className="section-title">
              Milestones in Our <span className="gradient-text">Growth Story</span>
            </h2>
            <p className="section-description">
              From a small legal practice to a comprehensive legal-tech firm, here's how we've evolved.
            </p>
          </div>
          
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h3 className="timeline-title">{milestone.title}</h3>
                  <p className="timeline-description">{milestone.description}</p>
                </div>
                <div className="timeline-marker"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <i className="fas fa-users"></i>
              <span>Our Team</span>
            </div>
            <h2 className="section-title">
              Meet the <span className="gradient-text">Experts</span> Behind Legalion
            </h2>
            <p className="section-description">
              Our multidisciplinary team combines legal expertise, technological innovation, and business acumen.
            </p>
          </div>
          
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                  <div className="team-overlay">
                    <div className="team-social">
                      <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
                      <a href="#" className="social-link"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-specialization">{member.specialization}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-description">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <div className="section-badge">
                <i className="fas fa-star"></i>
                <span>Why Choose Legalion</span>
              </div>
              <h2 className="section-title">
                What Makes Us <span className="gradient-text">Different</span>
              </h2>
              
              <div className="choose-features">
                <div className="abt-feature-item">
                  <div className="abt-feature-icon">
                    <i className="fas fa-cogs"></i>
                  </div>
                  <div className="abt-feature-content">
                    <h4>Integrated Approach</h4>
                    <p>Unlike traditional firms, we combine legal expertise with technology solutions under one roof.</p>
                  </div>
                </div>
                
                <div className="abt-feature-item">
                  <div className="abt-feature-icon">
                    <i className="fas fa-trophy"></i>
                  </div>
                  <div className="abt-feature-content">
                    <h4>Proven Results</h4>
                    <p>Track record of successful case resolutions and business growth through our comprehensive services.</p>
                  </div>
                </div>
                
                <div className="abt-feature-item">
                  <div className="abt-feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="abt-feature-content">
                    <h4>Efficient Solutions</h4>
                    <p>Technology-enhanced processes that deliver faster, more cost-effective results.</p>
                  </div>
                </div>
                
                <div className="abt-feature-item">
                  <div className="abt-feature-icon">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div className="abt-feature-content">
                    <h4>24/7 Support</h4>
                    <p>Round-the-clock availability for urgent legal matters and technical support.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="abt-choose-image">
              <img src="/Images/law2.jpg" alt="Why Choose Legalion" />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Work with Legalion?</h2>
            <p className="cta-description">
              Let us help you navigate legal complexities while driving your digital transformation. 
              Contact us today for a consultation.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                <span>Get Started Today</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/services" className="btn btn-outline">
                <span>Explore Our Services</span>
                <i className="fas fa-external-link-alt"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;