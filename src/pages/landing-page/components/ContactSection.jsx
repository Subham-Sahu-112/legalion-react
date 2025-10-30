import { useState } from 'react';
import "./ContactSection.css";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // WhatsApp number (replace with actual WhatsApp number)
  const WHATSAPP_NUMBER = "919945293599"; // Format: country code + number without +
  
  const getDirections = () => {
    window.open('https://www.google.com/maps/dir//Plot+10%2F10,+Anantam+Residency,+Sabar+sahi,+Rasulgarh,+Bhubaneswar-751010', '_blank');
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Get form data
      const formData = new FormData(e.target);
      const data = {
        name: formData.get('name'),
        company: formData.get('company') || 'Not specified',
        email: formData.get('email'),
        service: formData.get('service'),
        message: formData.get('message')
      };

      // Format message for WhatsApp
      const whatsappMessage = formatWhatsAppMessage(data);
      
      // Send to WhatsApp
      sendToWhatsApp(whatsappMessage);
      
      // Reset form
      e.target.reset();
      
      // Show success message
      alert('Message sent successfully! You will be redirected to WhatsApp.');
      
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatWhatsAppMessage = (data) => {
    const message = `
🔷 *NEW CONTACT FORM SUBMISSION* 🔷

👤 *Name:* ${data.name}
🏢 *Company:* ${data.company}
📧 *Email:* ${data.email}
🛡️ *Service:* ${getServiceDisplayName(data.service)}

📝 *Project Details:*
${data.message}

---
💼 *Legalion Contact Form*
📱 Sent via Website
🕒 ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
    `.trim();
    
    return message;
  };

  const getServiceDisplayName = (service) => {
    const serviceMap = {
      'legal': 'Legal Services',
      'it': 'Information Technology',
      'digital': 'Digital Marketing',
      'consulting': 'Consulting',
      'other': 'Other'
    };
    return serviceMap[service] || service;
  };

  const sendToWhatsApp = (message) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <div className="section-badge">
            <i className="fas fa-envelope"></i>
            <span>Get In Touch</span>
          </div>

          <h2 className="section-title">
            Let's Start Your&nbsp;
            <span className="gradient-text">Success Journey</span>
          </h2>

          <p className="section-description">
            Your partner for digital transformation in Bhubaneswar, offering
            state-of-the-art legal and IT solutions that make a difference.
          </p>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-content">
                  <h4>Phone</h4>
                  <p>+91 9945293599</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-content">
                  <h4>Email</h4>
                  <p>info@Legalion.co.in</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-content">
                  <h4>Address</h4>
                  <p>
                    Plot 10/10, Anantam Residency, Sabar sahi, Rasulgarh,
                    Bhubaneswar-751010
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="contact-content">
                  <h4>Business Hours</h4>
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" id="contactForm" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your full name"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Enter your company name"
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email address"
                  required
                  disabled={isSubmitting}
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Select Service *</label>
                <select id="service" name="service" required disabled={isSubmitting}>
                  <option value="">Choose a service</option>
                  <option value="legal">Legal Services</option>
                  <option value="it">Information Technology</option>
                  <option value="digital">Digital Marketing</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Project Details *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project requirements"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="con-btn con-btn-primary con-btn-full"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? 'Sending...' : 'Send to WhatsApp'}
                </span>
                <i className={`fa-brands ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-whatsapp'}`}></i>
                {/* <i class="fa-brands fa-whatsapp"></i> */}
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <div className="map-header">
            <h3>Find Us on Map</h3>
            <p>Visit our office in Bhubaneswar for in-person consultation</p>
          </div>

          <div className="map-container">
            <div className="map-wrapper">
              <iframe
                id="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3184.943484729795!2d85.8598605661059!3d20.29237059513331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190b209f372e11%3A0xde69b3e11e31bc20!2sAnantam%20Residency!5e0!3m2!1sen!2sin!4v1756369354612!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              <div className="map-overlay">
                <div className="location-info">
                  <div className="location-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="location-details">
                    <h4>Legalion Office</h4>
                    <p>
                      Plot 10/10, Anantam Residency
                      <br />
                      Sabar sahi, Rasulgarh
                      <br />
                      Bhubaneswar-751010
                    </p>
                    <div className="location-actions">
                      <a
                        href="https://www.google.com/maps/place/Anantam+Residency/@20.2923706,85.8598606,17z/data=!3m1!4b1!4m6!3m5!1s0x3a190b209f372e11:0xde69b3e11e31bc20!8m2!3d20.2923706!4d85.8624355!16s%2Fg%2F11c0qvgd2h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline btn-sm"
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Open in Google Maps
                      </a>
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={getDirections}
                      >
                        <i className="fas fa-route"></i>
                        Get Directions
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
