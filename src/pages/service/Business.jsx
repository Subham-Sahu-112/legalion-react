import React from "react";
import { Link } from "react-router-dom";
import "./Business.css";
import Navbar from "../../layouts/Navbar";

const Business = () => {
  const services = [
    {
      id: "legal",
      title: "LEGAL",
      subtitle: "Professional Legal Services You Can Trust",
      description: [
        "At Legalion, we provide comprehensive legal services tailored to meet the unique needs of individuals, families, and businesses. Our experienced attorneys are committed to delivering practical solutions with integrity, discretion, and unmatched professionalism.",
        "Whether you're facing a complex legal dispute, need guidance through a business transaction, or require personal legal advice, we're here to protect your interests every step of the way. Our practice areas include:"
      ],
      services: [
        "Civil and Commercial Litigation",
        "Business and Corporate Law",
        "Family and Divorce Law"
      ],
      footer: [
        "With a client-first approach, we combine in-depth legal knowledge with personalized service to help you make informed decisions and achieve the best possible outcomes.",
        "Contact us today for a confidential consultation. Your legal peace of mind starts here."
      ],
      image: "/Images/Lawist.jpg",
      alt: "Legal Services"
    },
    {
      id: "it",
      title: "INFORMATION TECHNOLOGY (IT)",
      subtitle: "Innovative Information Technology Solutions for a Digital World",
      description: [
        "At Legalion, we deliver smart, scalable, and secure IT solutions that drive business performance and digital transformation. Our mission is to empower organizations through cutting-edge technology, expert support, and forward-thinking strategies.",
        "Whether you're a startup, small business, or enterprise, our comprehensive IT services are designed to meet your evolving needs in today's fast-paced digital landscape. Our core services include:"
      ],
      services: [
        "Managed IT Services & Support",
        "Cloud Solutions & Migration",
        "Cybersecurity & Risk Management",
        "Network Design & Infrastructure",
        "Software Development & Integration",
        "IT Consulting & Strategy",
        "Data Backup & Disaster Recovery"
      ],
      footer: [
        "We combine technical expertise with a customer-first mindset to deliver reliable, cost-effective, and future-ready solutions. Our team of certified professionals works closely with you to understand your goals and build a technology ecosystem that grows with your business.",
        "Partner with us to make technology your competitive advantage."
      ],
      image: "/Images/Information-Technology.jpg",
      alt: "IT Services"
    },
    {
      id: "branding",
      title: "BUSINESS BRANDING",
      subtitle: "Results-Driven Digital Marketing That Grows Your Brand",
      description: [
        "At Legalion, we help businesses thrive online through strategic, data-driven digital marketing. Our goal is simple: to connect you with your audience, increase visibility, and drive real, measurable growth.",
        "From building your brand's online presence to generating qualified leads, our expert team combines creativity with analytics to deliver powerful marketing campaigns that convert. Our services include:"
      ],
      services: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing & Management",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing & Blogging",
        "Email Marketing Campaigns",
        "Conversion Rate Optimization (CRO)",
        "Web Analytics & Reporting"
      ],
      footer: [
        "Whether you're launching a new product, expanding your market, or looking to improve ROI, we tailor every strategy to your business goals and target audience.",
        "Let us help you turn clicks into customers — and customers into loyal advocates."
      ],
      image: "/Images/digital.png",
      alt: "Digital Marketing"
    },
    {
      id: "consulting",
      title: "CONSULTING",
      subtitle: "Strategic Consulting to Empower Your Business",
      description: [
        "At Legalion, we provide expert consulting services designed to help organizations navigate challenges, seize opportunities, and achieve sustainable growth. Our team of experienced consultants brings deep industry knowledge, analytical insight, and a results-oriented approach to every engagement.",
        "We partner with businesses of all sizes—from startups to established enterprises—to deliver customized strategies that drive efficiency, innovation, and performance. Our core consulting services include:"
      ],
      services: [
        "Business Strategy & Planning",
        "Operational Efficiency & Process Improvement",
        "Financial & Risk Advisory",
        "Technology & Digital Transformation",
        "Organizational Development & Change Management",
        "Market Research & Competitive Analysis"
      ],
      footer: [
        "We don't just offer advice—we work alongside you to implement actionable solutions that deliver real results. Whether you're launching a new venture, scaling operations, or rethinking your business model, we provide the clarity and support to move forward with confidence.",
        "Let's build your path to success—strategically, collaboratively, and effectively."
      ],
      image: "/Images/business-consulting.jpg",
      alt: "Business Consulting"
    }
  ];

  return (
    <div className="business-services">
      <Navbar />
      <div className="business-service-container">
        <div className="business-service-head">
          <h1>Services We Provide</h1>
        </div>

        <div className="business-all-services">
          {services.map((service, index) => (
            <React.Fragment key={service.id}>
              <div className={`business-service ${service.id}`} id={service.id}>
                <h1 className="business-service-title">
                  <span>{service.title}</span> {service.emoji}
                </h1>
                <h2 className="business-service-subtitle">
                  {service.subtitle}
                </h2>

                <div className="business-img-info">
                  <div className="business-service-info">
                    {service.description.map((desc, descIndex) => (
                      <p key={descIndex} className="business-service-description">
                        {desc}
                      </p>
                    ))}

                    <ul className="business-service-list">
                      {service.services.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>

                    {service.footer.map((footer, footerIndex) => (
                      <p key={footerIndex} className="business-service-footer">
                        {footerIndex === 1 && service.id === "legal" ? (
                          <>
                            <Link to="/contact-us" className="contact-link">Contact us</Link>{" "}
                            today for a confidential consultation. Your legal peace of mind starts here.
                          </>
                        ) : (
                          footer
                        )}
                      </p>
                    ))}
                  </div>

                  <div className="business-service-image">
                    <img 
                      src={service.image} 
                      alt={service.alt}
                      className={service.id === "branding" ? "branding-image" : ""}
                    />
                  </div>
                </div>
              </div>
              {index < services.length - 1 && <hr className="service-divider" />}
            </React.Fragment>
          ))}
        </div>

        <div className="business-cta">
          <Link to="/contact-us" className="quote-btn">
            <span>Get Started Today</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Business;