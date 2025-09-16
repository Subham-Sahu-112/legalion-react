import React from "react";
import { Link } from "react-router-dom";
import "./IT.css";
import Navbar from "../../layouts/Navbar";

const IT = () => {
  const itServices = [
    {
      title: "Managed IT Support",
      description:
        "Proactive monitoring, maintenance, and technical support to keep your systems running smoothly.",
    },
    {
      title: "Network Solutions",
      description:
        "Design, setup, and management of fast, secure, and scalable networks.",
    },
    {
      title: "Cloud Services",
      description:
        "Migration, optimization, and management of cloud infrastructure for flexibility and cost-efficiency.",
    },
    {
      title: "IT Consulting",
      description:
        "Strategic guidance to align your technology with your business goals.",
    },
    {
      title: "Data Backup & Recovery",
      description:
        "Reliable solutions to safeguard your data and ensure business continuity.",
    },
  ];

  return (
    <div className="it-services">
      <Navbar />
      <div className="it-service-container">
        <div className="it-service-head">
          <h1>Services We Provide</h1>
        </div>

        <div className="it-all-services">
          <div className="it-service" id="it">
            <h1 className="it-main-title">IT Services</h1>

            <div className="it-img-info">
              <div className="it-info">
                <p className="it-intro">
                  Empower your business with reliable, scalable, and secure IT
                  solutions tailored to your needs. Our comprehensive IT
                  services are designed to help you stay ahead in a rapidly
                  evolving digital landscape. Whether you're looking to
                  streamline operations, enhance cybersecurity, or migrate to
                  the cloud, our expert team is here to support you every step
                  of the way.
                </p>

                <div className="it-services-list">
                  <div className="it-service-section">
                    <div className="service-info">
                      <h3 className="service-section-title">
                        Our IT Services Include:
                      </h3>

                      <div className="it-services-grid">
                        {itServices.map((service, index) => (
                          <div key={index} className="it-service-item">
                            <h4>{service.title}</h4>
                            <p>{service.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="service-info-image">
                        <img
                          src="/Images/IT-service.jpg"
                          alt="IT Services"
                          className="it-service-image"
                        />
                      </div>

                      <div className="it-footer">
                        <p>
                          Our dedicated IT professionals work around the clock
                          to ensure your technology infrastructure supports your
                          business objectives and drives growth. From small
                          businesses to enterprise-level organizations, we
                          provide customized IT solutions that deliver real
                          results.
                        </p>
                        <p>
                          <Link to="/contact-us" className="contact-link">
                            Contact us
                          </Link>{" "}
                          today to discuss how our IT services can transform
                          your business operations and boost your competitive
                          advantage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <Link to="/contact-us" className="quote-btn">
                  <span>Get a Quote</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IT;
