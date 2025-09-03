import './TeamSection.css';

export default function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-users"></i>
            <span>FOUNDER</span>
          </div>
          <h2 className="section-title">Meet the Founder</h2>
          <p className="section-description">
            As the founder, I bring together my passion for technology,
            problem-solving, and innovation to build meaningful solutions. My
            focus is on driving growth, empowering teams, and delivering real
            value to clients and partners.
          </p>
        </div>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-image">
              <div className="team-avatar">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="team-info">
              <h3 className="team-name">Srittam Das</h3>
              <p className="team-role">Chief Executive Consultant</p>
              <p className="team-domain">IT, Finance, Law</p>
              <div className="team-details">
                <span className="team-experience">25+ Years Experience</span>
                <span className="team-credentials">MBA, LLB, CA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
