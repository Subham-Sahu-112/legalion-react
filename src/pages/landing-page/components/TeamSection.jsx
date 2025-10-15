import "./TeamSection.css";

export default function TeamSection() {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <i className="fas fa-users"></i>
            <span>FOUNDER</span>
          </div>
          <h2 className="section-title">Message from Founder</h2>
        </div>

        <div className="fou-team-grid">
          <div className="fou-team-card">
            <div className="hm-team-image">
              <img src="/Images/legalion.png" alt="founder" />
            </div>
            <div className="fou-team-info">
              <h3 className="fou-team-name">GET TO KNOW US</h3>
              <p className="fou-team-role">Message from Founder</p>
              <p className="fou-team-bio">
                "I am very grateful to legendary advocate Gokulananda Chaudhury (1863-1915) for leaving a compliance footstep to be useful for the people at problem. Having more than 25 years of experience of serving multinational Companies and managing the compliance portfolios, founded this entity to serve the clients. I humbly acknowledge the blessings of my previous generations. The deep values they have instilled continue to inspire us to create a platform that brings out the best versions of our selves collectively, while we seek to serve our clients and further the cause of justice."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
