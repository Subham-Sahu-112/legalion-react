import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";
import Navbar from "../../layouts/Navbar";

const Service = () => {
  const services = [
    {
      id: "legal",
      title: "LEGAL SERVICE",
      image: "/Images/Lawist.jpg",
      description:
        "We provide trusted legal services tailored to individuals, families, and businesses. Our experienced attorneys are committed to protecting your rights and achieving the best possible outcome.",
      link: "/service/legal",
      className: "legal",
    },
    {
      id: "IT",
      title: "IT SERVICE",
      image: "/Images/Information-Technology.jpg",
      description:
        "We deliver smart, secure, and scalable IT solutions to help businesses operate efficiently and stay ahead in the digital age. From support to strategy, we've got your tech covered.",
      link: "/service/it",
      className: "it",
    },
    {
      id: "DM",
      title: "BUSINESS BRANDING",
      image: "/Images/digital.jpg",
      description:
        "We help businesses build powerful, memorable brands that connect with their audience. From logo design to brand strategy, we bring your vision to life.",
      link: "/service/business",
      className: "dm",
    },
    {
      id: "consulting",
      title: "CONSULTING",
      image: "/Images/business-consulting.jpg",
      description:
        "We provide expert consulting services to help businesses solve problems, improve performance, and achieve sustainable growth. Strategic advice tailored to your goals.",
      link: "/service/consulting",
      className: "dm",
    },
  ];

  return (
    <div className="services">
      <Navbar />
      <div className="service-container">
        <div className="service-head">
          <h1>Services We Provide</h1>
        </div>
        <div className="all-services">
          {services.map((service) => (
            <Link key={service.id} to={service.link} className="service-link">
              <div className={`service ${service.className}`} id={service.id}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-image"
                />
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
