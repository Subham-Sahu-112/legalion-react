import './TestimonialSection.css';

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-star"></i>
            <span>Client Testimonials</span>
          </div>
          <h2 className="section-title">
            Voice Of Our <span className="gradient-text">Customer</span>
          </h2>
        </div>

        <div className="testimonial-video">
          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/Bv4864T-C-A?autoplay=0&mute=1"
              title="Client Testimonials"
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-overlay">
              <button className="play-btn">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
